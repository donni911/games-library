import { SimpleGrid, Image } from "@chakra-ui/react"
import useScreenshots from "../../hooks/useScreenshots"

interface Props {
    slug: string | number
}

const GameScreenshots = ({ slug }: Props) => {
    const { data: screenshots, isLoading, error } = useScreenshots(slug)

    if (isLoading) return null;

    if (error) throw error;

    return (
        <SimpleGrid mt={4} columns={{ base: 1, md: 2 }} gap={4}>
            {screenshots?.results.map(({ id, image }) => (
                <Image key={id} src={image} />
            ))}

        </SimpleGrid>
    )
}

export default GameScreenshots
