import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  let [index, setIndex] = useState(0);
  console.log(index);
  const { id, name, job, image, text } = people[index];
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button
          className="prev-btn"
          onClick={() => {
            index > 0 ? setIndex(--index) : setIndex(index);
          }}
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn"
          onClick={() => {
            index < 3 ? setIndex(++index) : setIndex(index);
          }}
        >
          <FaChevronRight />
        </button>
      </div>
      <button
        className="random-btn"
        onClick={() => {
          let random = Math.floor(Math.random() * people.length);
          if (random === index) {
            random = index + 1;
          }
          setIndex(random > 3 ? random - 1 : random);
        }}
      >
        Suprise Me
      </button>
    </article>
  );
};

export default Review;
