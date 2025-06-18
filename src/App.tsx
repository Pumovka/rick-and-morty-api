import { useState } from "react";
import { fetchData } from "./api/apiFetch";
import { ICharacter } from "./api/apiFetch";
import "./App.css";
import SearchBox from "./components/SearchBox";
import CharacterList from "./components/CharacterList";
import Pagination from "./components/Pagination";

function App() {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const loadData = async () => {
    try {
      const data = await fetchData(page, searchQuery);
      setCharacters(data.results);
      setTotalPages(data.info.pages);
    } catch (error) {
      setCharacters([]);
      setTotalPages(1);
    }
  };

  if (!characters.length && page === 1 && !searchQuery) loadData();

  const handleSearch = async () => {
    setPage(1);
    await loadData();
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      loadData();
    }
  };

  return (
    <div className="container">
      <SearchBox
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      <CharacterList characters={characters} searchQuery={searchQuery} />
      <Pagination
        page={page}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
