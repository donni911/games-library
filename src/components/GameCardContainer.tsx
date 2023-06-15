import { ReactNode } from "react";

import { Box } from "@chakra-ui/react";
interface Props {
  children?: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box _hover={{ transform: "scale(1.03)", transition: "transform 0.12s ease-in" }} width="100%" borderRadius={"lg"} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
