import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";

import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data: games, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 3, xl: 4 }}
      padding={2.5}
      spacing={4}
    >
      {!isLoading &&
        games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton></GameCardSkeleton>
          </GameCardContainer>
        ))}
    </SimpleGrid>
  );
};

export default GameGrid;
