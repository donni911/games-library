import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

function GameGrid() {
  const [games, setGame] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/gчames")
      .then((response) => {
        setGame(response.data.results);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);
  return (
    <ul>
      {error && <p>{error}</p>}
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
}

export default GameGrid;
