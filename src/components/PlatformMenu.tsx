import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import usePlatforms, { Platform } from "../hooks/usePlatforms";
import SelectorSkeleton from "./SelectorSkeleton";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformMenu = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data, error, isLoading } = usePlatforms();
  console.log(error, isLoading);

  if (error) return null;

  if (isLoading) return <SelectorSkeleton />;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.results.map((platform) => (
          <MenuItem
            key={platform.id}
            fontWeight={selectedPlatform?.id === platform.id ? "bold" : ""}
            onClick={() => onSelectedPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformMenu;
