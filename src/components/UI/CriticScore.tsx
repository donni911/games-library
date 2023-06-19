import { Badge, Tooltip } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 50 ? "yellow" : "red";
  return (
    <Tooltip colorScheme="green" label='Critic Score'>
      <Badge colorScheme={color} paddingX={2} fontSize="14px" borderRadius={"md"}>
        {score}
      </Badge>
    </Tooltip>
  );
};

export default CriticScore;
