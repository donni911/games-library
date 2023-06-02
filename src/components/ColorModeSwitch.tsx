import {
  HStack,
  FormLabel,
  FormControl,
  Switch,
  useColorMode,
} from "@chakra-ui/react";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <FormControl
        cursor={"pointer"}
        display="flex"
        gap={2}
        alignItems="center"
        justifyContent="flex-end"
      >
        <FormLabel htmlFor="dark-mode" m="0">
          Light
        </FormLabel>
        <Switch
          id="dark-mode"
          colorScheme="green"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
        <FormLabel htmlFor="dark-mode" mb="0">
          Dark
        </FormLabel>
      </FormControl>
    </HStack>
  );
}

export default ColorModeSwitch;
