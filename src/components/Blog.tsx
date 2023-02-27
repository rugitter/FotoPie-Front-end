import { color } from "@mui/system";
import { useState } from "react";

interface BlogProps {
  posts: Post[];
}

interface Post {
  title: string;
  content: string;
  url: string;
  thumbnailUrl: string
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      {currentPosts.map((post, index) => (
        <img key={index} src={post.thumbnailUrl} />
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
      />
    </>
  );
};

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const paginationStyles = {
    color: "red",
    display: "flex",
    listStyle: "none",
  };

  /*const pageButtonStyles = {
    color: "blue",
    backgroundColor: "white",
    border: "1px solid black",
    marginLeft: "-1px",
    padding: "0.5rem 0.75rem",
  };
  */

  return (
    <nav>
      <ul className="pagination" style={paginationStyles}>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className="page-item">
            <button
              style={{
                color: "blue",
                backgroundColor: "white",
                border: "1px solid black",
                marginLeft: "-1px",
                padding: "0.5rem 0.75rem",
                background: currentPage === pageNumber ? "lightblue" : null,
              }}
              onClick={() => paginate(pageNumber)}
              className="page-bttn"
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Blog;
