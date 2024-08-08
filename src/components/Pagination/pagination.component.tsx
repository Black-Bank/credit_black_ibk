type Pagination = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ currentPage, totalPages, onPageChange }: Pagination) => {
  const pageNumbers = [];

  let startPage = Math.max(0, currentPage - 2);
  let endPage = Math.min(totalPages - 1, currentPage + 2);

  if (currentPage <= 2) {
    endPage = Math.min(4, totalPages - 1);
  } else if (currentPage >= totalPages - 3) {
    startPage = Math.max(0, totalPages - 5);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {startPage > 0 && (
        <>
          <button onClick={() => onPageChange(0)}>1</button>
          {startPage > 1 && <span>...</span>}
        </>
      )}

      {pageNumbers.map((number) => (
        <button key={number} onClick={() => onPageChange(number)}>
          {number + 1}
        </button>
      ))}

      {endPage < totalPages - 1 && (
        <>
          {endPage < totalPages - 2 && <span>...</span>}
          <button onClick={() => onPageChange(totalPages - 1)}>
            {totalPages}
          </button>
        </>
      )}
    </div>
  );
};

export default Pagination;
