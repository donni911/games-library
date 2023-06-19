import { useQuery } from "@tanstack/react-query";

import APICLIENT from "../services/api-client";
import ms from "ms";
import Trailer from "../entities/Trailer";

const useGameTrailer = (slug: string | number) => {
  const apiClient = new APICLIENT<Trailer>(`/games/${slug}/movies`);

  return useQuery({
    queryKey: ["trailers", slug],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default useGameTrailer;
