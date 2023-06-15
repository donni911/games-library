import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";

import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";


const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;


  return (

    <InfiniteScroll dataLength={fetchedGamesCount} next={fetchNextPage} hasMore={!!hasNextPage} loader={<Spinner />}>
      <SimpleGrid
        padding={2.5}
        columns={{ base: 1, sm: 2, md: 3, xl: 4 }}
        spacing={4}>
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton></GameCardSkeleton>
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </InfiniteScroll>

  );
};

export default GameGrid;
