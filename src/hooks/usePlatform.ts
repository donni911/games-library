import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number | undefined | null) => {
  const { data: platforms } = usePlatforms();

  return platforms?.results.find((p) => p.id === id);
};

export default usePlatform;
