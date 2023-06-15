import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";

import GameHeading from "../components/GameHeading";
import SortSelector from "../components/SortSelector";

import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import PlatformMenu from "../components/PlatformMenu";

const Home = () => {
    return <>
        <Grid
            templateAreas={{
                base: `"main"`,
                lg: `"aside main"`,
            }}
            templateColumns={{
                base: "1fr",
                lg: "220px 1fr",
            }}
        >
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
}

export default Home
