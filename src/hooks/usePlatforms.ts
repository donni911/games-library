import { useQuery } from "@tanstack/react-query";
import APICLIENT from "../services/api-client";
import genres from "../data/genres";
import ms from "ms";

const apiClient = new APICLIENT<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default usePlatforms;
