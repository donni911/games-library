import { AspectRatio } from "@chakra-ui/react"
import useGameTrailer from "../../hooks/useGameTrailer"

interface Props {
    slug: string | number
}

const GameTrailer = ({ slug }: Props) => {
    const { data, isLoading, error } = useGameTrailer(slug)
    if (isLoading) return null;
    if (error) throw error

    const firstVideo = data?.results[0]

    return firstVideo ? (
        <AspectRatio ratio={16 / 9}>
            <video src={firstVideo?.data[480]}
                poster={firstVideo?.preview} controls>
            </video >
        </AspectRatio>) : null

}

export default GameTrailer
