import React from "react";
import "./App.css";

import Header from "./components/header/headerComponent";
import Content from "./components/content/contentComponent";

import { SearchTagsContext } from "./contexts/searchTagsContext";

function App() {
  const [searchTags, setSearchTags] = React.useState([]);

  const searchTagsContext = { searchTags, setSearchTags };

  return (
    <div className="App">
      <SearchTagsContext.Provider value={searchTagsContext}>
        <Header />
        <Content />
      </SearchTagsContext.Provider>
    </div>
  );
}

export default App;
