import React from "react";
import { useGlobalContext } from "../../context";
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover-not-found.png";
import "./BookList.css";

// https://covers.openlibrary.org/b/id/240727-S.jpg

function BookList() {
  const { books, loading, resulTitle } = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/to get only id
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg,
    };
  });

  if (loading) return <Loading />;

  return (
    <section className="booklist">
      <div className="container">
        <div className="section-title">
          <h2> {resulTitle} </h2>
        </div>
      </div>
      <div className="booklist-content grid">
        {booksWithCovers.slice(0, 30).map((item, index) => {
          return <Book key={index} {...item} />;
        })}
      </div>
    </section>
  );
}

export default BookList;
