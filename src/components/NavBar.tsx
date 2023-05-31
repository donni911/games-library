import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image boxSize={"60px"} src={logo} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
