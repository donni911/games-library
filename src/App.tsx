import { Grid, GridItem, Show, HStack } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformMenu from "./components/PlatformMenu";

import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";


function App() {
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
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" p={5}>
            <GenreList
            ></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameHeading />
          <HStack spacing={5} paddingX={2.5}>
            <PlatformMenu

            />
            <SortSelector

            />
          </HStack>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
