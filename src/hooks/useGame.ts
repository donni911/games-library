import { useQuery } from "@tanstack/react-query";
import APICLIENT from "../services/api-client";
import ms from "ms";
import Game from "../entities/Game";

const apiClient = new APICLIENT<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms("24h"),
  });

export default useGame;
