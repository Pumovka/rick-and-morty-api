import "./style.css";

interface IPagination {
  page: number;
  totalPages: number;
  handlePageChange: (newPage: number) => void;
}
const Pagination = ({ page, totalPages, handlePageChange }: IPagination) => {
  return (
    <div className="pagination">
      <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
        Prev
      </button>
      <span className="page_info">
        {page} / {totalPages}
      </span>
      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
};
export default Pagination;
