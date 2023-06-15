import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";

import { Box, HStack, Icon, Tooltip } from "@chakra-ui/react";

import { Platform } from "../entities/Platform";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: SiNintendo,
    web: BsGlobe,
    ios: MdPhoneIphone,
    mac: FaApple,
  };

  return (
    <HStack marginY={2.5} flexWrap="wrap">
      {platforms.map((platform) => (
        <Tooltip key={platform.slug} label={platform.name}>
          <Box>
            <Icon
              as={iconMap[platform.slug]}
              color="gray.500"
            />
          </Box>
        </Tooltip>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
