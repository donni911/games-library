import { Grid, Image, GridItem } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

function NavBar({ onSearch }: Props) {
  return (
    <Grid
      templateColumns={{ base: "1fr 1fr", xl: "auto 1fr auto" }}
      gap={2}
      alignItems="center"
      padding={"10px"}
    >
      <GridItem>
        <Image boxSize={"60px"} src={logo} />
      </GridItem>
      <GridItem
        colEnd={{ base: -1, xl: "auto" }}
        colStart={{ base: 1, xl: "auto" }}
        rowStart={{ base: 2, xl: "auto" }}
        rowEnd={{ base: 3, xl: "auto" }}
      >
        <SearchInput onSearch={onSearch} />
      </GridItem>
      <GridItem>
        <ColorModeSwitch />
      </GridItem>
    </Grid>
  );
}

export default NavBar;
