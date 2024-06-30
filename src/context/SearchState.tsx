import { useState } from "react";
import { SearchContext } from "./SearchContext";

const SearchState = (props) => {
    const [search, setSearch] = useState();
   
    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    return (
        <SearchContext.Provider value={{ search, handleSearch }}>
            {props.children}
        </SearchContext.Provider>
    );
};
export default SearchState;
