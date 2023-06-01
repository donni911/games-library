import { useEffect, useRef, useState } from "react";
import { List, ListItem, HStack, Image, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
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
    <List
      ref={currentList}
      position="sticky"
      top={0}
      height={height}
      overflowY="auto"
    >
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY={1}>
          <HStack>
            <Image
              boxSize="32px"
              src={getCroppedImageUrl(genre.image_background)}
              borderRadius={8}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY={1}>
          <HStack>
            <Image
              boxSize="32px"
              src={getCroppedImageUrl(genre.image_background)}
              borderRadius={8}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
