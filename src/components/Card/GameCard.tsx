import {
  Card,
  HStack,
  CardBody,
  Image,
  Heading,
  VStack,
} from "@chakra-ui/react";
import Game from "../../entities/Game";
import PlatformIconList from "../Platform/PlatformIconList";
import CriticScore from "../UI/CriticScore";
import getCroppedImageUrl from "../../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card height={"100%"} >
      <Image
        aspectRatio={16 / 9}
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
      />
      <CardBody display="flex">
        <VStack w={"full"} alignItems={"flex-start"}>
          <Heading as={Link} to={`/games/${game.slug}`} fontSize={{ base: "2xl", md: "xl" }}>
            {game.name} <Emoji rating={game.rating_top} />
          </Heading>
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
