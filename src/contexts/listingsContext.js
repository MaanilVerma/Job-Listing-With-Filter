import { createContext } from "react";

export const listings = [];

export const ListingsContext = createContext({
  listings: listings,
  setListings: () => {
  }
});
