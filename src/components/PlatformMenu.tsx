import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Skeleton,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformMenu = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data: platforms, error, isLoading } = usePlatforms();
  if (error) return null;

  if (isLoading)
    return (
      <Skeleton height="40px" width="120px" borderRadius={"md"}></Skeleton>
    );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            key={platform.id}
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
