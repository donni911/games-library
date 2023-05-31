import useGames from "../hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";

import GameCard from "./GameCard";

function GameGrid() {
  const { games, error } = useGames();

  return (
    <ul>
      {error && <p>{error}</p>}

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, xl: 5 }} spacing={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </ul>
  );
}

export default GameGrid;
