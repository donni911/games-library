import {
  Card,
  Skeleton,
  CardBody,
  SkeletonText,
  SkeletonCircle,
  HStack,
} from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width={"100%"} borderRadius={"lg"}>
      <Skeleton height="200px" padding={"100px"} />
      <Skeleton height="20px" margin={2} />
      <HStack p={2}>
        <SkeletonCircle height="20px" width="20px" />
        <SkeletonCircle height="20px" width="20px" />
        <SkeletonCircle height="20px" width="20px" />
        <Skeleton height="15px" width="20px" marginLeft="auto" />
      </HStack>
    </Card>
  );
};

export default GameCardSkeleton;
