import { createContext } from "react";

export const searchTags = [];

export const SearchTagsContext = createContext({
  searchTags: searchTags,
  setsearchTags: () => {
  }
});
