import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import GameAttributes from "../components/Game/GameAttributes";
import ExpandableText from "../components/UI/ExpandableText";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/Game/GameTrailer";
import GameScreenshots from "../components/Game/GameScreenshots";

const GameDetailPage = () => {
    const { slug } = useParams();
    const { data: game, isLoading, error } = useGame(slug!)

    if (isLoading) {
        return <Spinner />
    }

    if (error || !game) throw error

    return (
        <Box p={5}>
            <Heading>
                {game.name}
            </Heading>
            <ExpandableText maxChars={300}>{game.description_raw}</ExpandableText>
            <GameAttributes game={game} />
            <GameTrailer slug={game.slug} />
            <GameScreenshots slug={game.slug} />
        </Box>
    )
}

export default GameDetailPage
