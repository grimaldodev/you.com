import { createContext, useState } from "react";

export const SearchContext = createContext({
  query: null,
  setQuery: () => null,
});

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState(null);
  const value = { query, setQuery };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
