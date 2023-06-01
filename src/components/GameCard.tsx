import {
  Card,
  HStack,
  CardBody,
  Image,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card height={"100%"}>
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <CardBody display="flex">
        <VStack w={"full"} alignItems={"flex-start"}>
          <Heading fontSize={{ base: "2xl", md: "xl" }}>{game.name}</Heading>
          <HStack
            marginTop={"auto"}
            w={"full"}
            justifyContent={"space-between"}
          >
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconList>
            <CriticScore score={game.metacritic} />
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;