import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import usePlatforms from "../hooks/usePlatforms";
import SelectorSkeleton from "./SelectorSkeleton";
import usePlatform from "../hooks/useGenre";
import useGameQueryStore from "../store";

const PlatformMenu = () => {
  const { data, error, isLoading } = usePlatforms();

  const platformId = useGameQueryStore(s => s.gameQuery.platformId);
  const setPlatformId = useGameQueryStore(s => s.setPlatformId);

  const selectedPlatform = usePlatform(platformId);

  if (error) return null;

  if (isLoading) return <SelectorSkeleton />;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            fontWeight={selectedPlatform?.id === platform.id ? "bold" : ""}
            onClick={() => setPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformMenu;
