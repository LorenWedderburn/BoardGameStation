//import "./App.css";
import "./Gallery.css";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router";

import { NavigationBar } from "./NavigationBar";
import { Footer } from "./Footer";
import { Logo } from "./Logo";
import { Border } from "./Border";
import { Title } from "./Title";

export default function Gallery({ gameBank, shoppingCart }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const lastPostIndex = currentPage + postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = gameBank.slice(firstPostIndex, lastPostIndex);
  const pageCount = Math.ceil(gameBank.length / postsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * postsPerPage) % gameBank.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    setCurrentPage(newOffset);
  };

  return (
    <>
      <Logo shoppingCart={shoppingCart} />
      <NavigationBar shoppingCart={shoppingCart} />
      <Title />
      <Border className="break-border" />
      <GallerySection gameBank={currentPosts} />
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
      <Border className="break-border" />
      <Footer />
    </>
  );
}

function GallerySection({ gameBank }) {
  return (
    <>
      <div className="gallery-section">
        {gameBank.map((game) => (
          <GalleryItem
            name={game.name}
            path={game.path}
            key={crypto.randomUUID()}
          ></GalleryItem>
        ))}
      </div>
    </>
  );
}

function GalleryItem({ name, path }) {
  return (
    <figure className="item-image">
      <Link to={`/Reviews/${name}`} name={name}>
        <img src={path} alt={name} />
      </Link>
      <figcaption className="image-text">{name}</figcaption>
    </figure>
  );
}
