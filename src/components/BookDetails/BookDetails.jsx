import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover-not-found.png";
import "./BookDetails.css";
import { FaArrowLeft } from "react-icons/fa";

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);

        if (data) {
          const {
            description,
            title,
            covers,
            subject_places,
            subject_times,
            subjects,
          } = data;
          const newBook = {
            description: description
              ? description.value
              : "no  description found",
            title: title,
            cover_img: covers
              ? `http://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : coverImg,
            subject_places: subject_places
              ? subject_places.join(", ")
              : "no subject places found",
            subject_times: subject_times
              ? subject_times.join(", ")
              : "no subject times found",
            subjects: subjects ? subjects.join(", ") : "no subjects found",
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <section className="book-details">
      <div className="container">
        <button
          type="button"
          className="flex flex-c back-btn"
          onClick={() => navigate("/book")}
        >
          <FaArrowLeft size={22} />
          <span className="fs-18 fw-6">Go Back</span>
        </button>
        <div className="book-details-content grid">
          <div className="book-details-img">
            <img src={book?.cover_img} alt="cover img" />
          </div>
          <div className="book-details-info">
            <div className="book-details-item title">
              <span className="fw-6 fs-24"> {book?.title} </span>
            </div>
            <div className="book-details-item decription">
              <span> {book?.description} </span>
            </div>
            <div className="book-details-item ">
              <span className="fw-6">subject Places:</span>
              <span className="text-italic"> {book?.subject_places} </span>
            </div>
          </div>
          <div className="book-details-item ">
            <span className="fw-6">subject Title:</span>
            <span className="text-italic"> {book?.subject_times} </span>
          </div>
          <div className="book-details-item ">
            <span className="fw-6">subjects:</span>
            <span> {book?.subjects} </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
