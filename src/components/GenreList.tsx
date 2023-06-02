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
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres();

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
        {genres.map((genre) => (
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
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                fontWeight={selectedGenre?.id === genre.id ? "bold" : ""}
                textDecoration={
                  selectedGenre?.id === genre.id ? "underline" : ""
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
