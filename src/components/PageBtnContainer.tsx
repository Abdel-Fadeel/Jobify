import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import styled from "styled-components";
import { useAllJobsContext } from "../context/allJobs";
import { useLocation, useNavigate } from "react-router-dom";

const PageBtnContainer = () => {
  const {
    data: { numOfPages, currentPage },
  } = useAllJobsContext();
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const handlePageChange = (pageNumber: number) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", `${pageNumber} `);
    navigate({
      pathname,
      search: searchParams.toString(),
    });
  };
  const pages = Array.from({ length: numOfPages }, (_, index) => index + 1);
  return (
    <Wrapper>
      <button
        className="btn prev-btn"
        onClick={() => {
          let prevPage = currentPage - 1;
          if (prevPage < 1) prevPage = numOfPages;
          handlePageChange(prevPage);
        }}
      >
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {pages.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`btn page-btn ${pageNumber === currentPage && "active"}`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <button
        className="btn prev-btn"
        onClick={() => {
          let nextPage = currentPage + 1;
          if (nextPage > numOfPages) nextPage = 1;
          handlePageChange(nextPage);
        }}
      >
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  gap: 1rem;
  .btn-container {
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    display: flex;
  }
  .page-btn {
    background: transparent;
    border-color: transparent;
    width: 50px;
    height: 40px;
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--primary-500);
    border-radius: var(--border-radius);
    cursor:pointer:
  }
  .active{
    background:var(--primary-500);
        color: var(--white);

  }
  .prev-btn,.next-btn{
    background: var(--background-secondary-color);
    border-color: transparent;
        border-radius: var(--border-radius);

    width: 100px;
    height: 40px;
        color: var(--primary-500);
text-transform:capitalize;
letter-spacing:var(--letter-spacing);
display:flex;
align-items:center;
justify-content:center;
gap:0.5rem;
cursor:pointer;
  }
  .prev-btn:hover,.next-btn:hover{
    background:var(--primary-500);
        color: var(--white);
        transition:var(--transition);
  }
.dots{
  display:grid;
  place-items:center;
  cursor:text;
}
`;

export default PageBtnContainer;
