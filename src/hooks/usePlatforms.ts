import { useQuery } from "@tanstack/react-query";
import APICLIENT from "../services/api-client";
import platforms from "../data/platforms";

const apiClient = new APICLIENT<Platform>("/platforms/lists/pajrents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
