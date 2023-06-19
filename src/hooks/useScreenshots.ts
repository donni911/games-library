import { useQuery } from "@tanstack/react-query";
import APICLIENT from "../services/api-client";
import ms from "ms";
import Screenshot from "../entities/Screenshot";

const useScreenshots = (slug: string | number) => {
  const apiClient = new APICLIENT<Screenshot>(`/games/${slug}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", slug],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default useScreenshots;
