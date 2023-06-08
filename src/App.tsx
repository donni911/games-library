import { useState } from "react";

import { Grid, GridItem, Show, HStack } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformMenu from "./components/PlatformMenu";

import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface sortOrder {
  value: string;
  label: string;
}

export interface GameQuery {
  genreId?: number | undefined;
  platformId?: number | undefined;
  sortOrder: sortOrder | null;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "220px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" p={5}>
            <GenreList
              selectedGenreId={gameQuery.genreId}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genreId: genre.id })}
            ></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5} paddingX={2.5}>
            <PlatformMenu
              selectedPlatformId={gameQuery.platformId}
              onSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platformId: platform.id })
              }
            />
            <SortSelector
              selectedSortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
