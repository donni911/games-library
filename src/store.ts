import { create } from "zustand";

export interface sortOrder {
  value: string;
  label: string;
}

interface GameQuery {
  genreId?: number | undefined | null;
  platformId?: number | undefined | null;
  sortOrder?: sortOrder | null;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: sortOrder) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) =>
    set(() => ({
      gameQuery: {
        searchText,
      },
    })),
  setGenreId: (genreId) =>
    set(() => ({
      gameQuery: {
        genreId,
      },
    })),
  setPlatformId: (platformId) =>
    set(() => ({
      gameQuery: {
        platformId,
      },
    })),
  setSortOrder: (sortOrder) =>
    set((store) => ({
      gameQuery: {
        ...store.gameQuery,
        sortOrder,
      },
    })),
}));

export default useGameQueryStore;
