interface ISearchBox {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: () => void;
}
const SearchBox = ({
  searchQuery,
  setSearchQuery,
  handleSearch,
}: ISearchBox) => {
  return (
    <div className="search_box">
      <input
        className="search_input"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search a character ..."
      />
      <button className="search_btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};
export default SearchBox;
