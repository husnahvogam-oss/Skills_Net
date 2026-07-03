function Pagination({ currentPage, totalItems, itemsPerPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  if (totalPages <= 1) {
    return null
  }

  return (
    <nav className="flex flex-wrap items-center gap-2">
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          className={
            page === currentPage
              ? 'rounded-md bg-[#10192B] px-4 py-2 text-sm font-medium text-[#F6F3EC]'
              : 'rounded-md border border-[#E4DECF] bg-white px-4 py-2 text-sm text-[#5B6472] transition-colors hover:border-[#9C7A3C] hover:text-[#10192B]'
          }
        >
          {page}
        </button>
      ))}
    </nav>
  )
}

export default Pagination