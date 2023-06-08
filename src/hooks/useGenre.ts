import useGenres from "./useGenres";

const usePlatform = (id?: number | undefined) => {
  const { data: genres } = useGenres();

  return genres?.results.find((g) => g.id === id);
};

export default usePlatform;
