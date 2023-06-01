import useGames from "../hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";

import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <ul>
      {error && <p>{error}</p>}

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, xl: 5 }} spacing={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardSkeleton key={skeleton}></GameCardSkeleton>
          ))}
      </SimpleGrid>
    </ul>
  );
}

export default GameGrid;
