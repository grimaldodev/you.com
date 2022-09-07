import { createContext, useState } from "react";

export const ResultListContext = createContext({
  listResults: null,
  setListResults: () => null,
});
export const ResultsProvider = ({ children }) => {
  const [listResults, setListResults] = useState(null);
  const value = { listResults, setListResults };
  return (
    <ResultListContext.Provider value={value}>
      {children}
    </ResultListContext.Provider>
  );
};
