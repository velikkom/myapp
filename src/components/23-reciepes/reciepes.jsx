import React, { useState } from "react";
import { SearchBox } from "./searchBox";
import { SearchResults } from "./searchResults";

export const Reciepes = () => {
  const [searchText, setSearchText] = useState(""); 

  return (
    <div>
      <SearchBox setSearchText={setSearchText} />
      <SearchResults searchText={searchText} />
    </div>
  );
};
