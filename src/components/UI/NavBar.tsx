import { Grid, Image, GridItem } from "@chakra-ui/react";
import logo from "@/assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Grid
      templateColumns={{ base: "1fr 1fr", xl: "auto 1fr auto" }}
      gap={2}
      alignItems="center"
      padding={"10px"}
    >
      <GridItem>
        <Link to="/">
          <Image boxSize={"60px"} src={logo} />
        </Link>
      </GridItem>
      <GridItem
        colEnd={{ base: -1, xl: "auto" }}
        colStart={{ base: 1, xl: "auto" }}
        rowStart={{ base: 2, xl: "auto" }}
        rowEnd={{ base: 3, xl: "auto" }}
      >
        <SearchInput />
      </GridItem>
      <GridItem>
        <ColorModeSwitch />
      </GridItem>
    </Grid>
  );
}

export default NavBar;
