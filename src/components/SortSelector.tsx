import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import SelectorSkeleton from "./SelectorSkeleton";
import useGameQueryStore from "../store";


const SortSelector = () => {
  const { isLoading } = usePlatforms();
  const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore(s => s.setSortOrder);

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "rating", label: "Average Rating" },
  ];

  if (isLoading) return <SelectorSkeleton />;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {sortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => {
              setSortOrder(order);
            }}
            key={order.value}
            fontWeight={
              sortOrder?.value === order.value ? "bold" : "normal"
            }
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
