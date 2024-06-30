import { createContext } from "react";

interface SearchContextType {
  search: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => any;
}

export const SearchContext = createContext<SearchContextType>({
  search: '',
  handleSearch: () => {},
});
