import { useEffect, useRef, useState } from "react";
import {
  List,
  ListItem,
  HStack,
  Image,
  Heading,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";
import useGameQueryStore from "../../store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore(state => state.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore(state => state.setGenreId);

  const [height, setHeight] = useState<string>("");
  const currentList = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const toTop = currentList.current?.getBoundingClientRect().top;

    setHeight(`calc(100vh - ${toTop}px)`);
  }, []);

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading mb={3} fontSize={"xl"}>
        Genres
      </Heading>
      <List
        ref={currentList}
        position="sticky"
        top={0}
        height={height}
        overflowX="hidden"
        overflowY="auto"
      >
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={1}>
            <HStack>
              <Image
                boxSize="32px"
                src={getCroppedImageUrl(genre.image_background)}
                objectFit={"cover"}
                borderRadius={8}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                variant="link"
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize="lg"
                fontWeight={selectedGenreId === genre.id ? "bold" : ""}
                textDecoration={
                  selectedGenreId === genre.id ? "underline" : ""
                }
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
