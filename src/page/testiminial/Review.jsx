import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import styled from "styled-components";
import people from "./data";
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <ReviewContainer>
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
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </ReviewContainer>
  );
};

const ReviewContainer = styled.article`
  background: var(--clr-white);
  padding: 1.5rem 2rem;
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  text-align: center;

  &:hover {
    box-shadow: var(--dark-shadow);
  }

  .img-container {
    position: relative;
    width: 9.37rem;
    height: 9.37rem;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1.5rem;

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      background: var(--clr-primary-5);
      position: absolute;
      top: -0.25rem;
      right: -0.5rem;
      border-radius: 50%;
    }

    .person-img {
      width: 100%;
      display: block;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      position: relative;
    }
    .quote-icon {
      position: absolute;
      top: 0;
      left: 0;
      width: 2.5rem;
      height: 2.5rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
      transform: translateY(25%);
      background: var(--clr-primary-5);
      color: var(--clr-white);
    }
  }
  .author {
    margin-bottom: 0.25rem;
  }
  .job {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    color: var(--clr-primary-5);
    font-size: 0.85rem;
  }
  .info {
    margin-bottom: 0.75rem;
  }

  .button-container {
    .prev-btn,
    .next-btn {
      color: var(--clr-primary-7);
      font-size: 1.25rem;
      background: transparent;
      border-color: transparent;
      margin: 0 0.5rem;
      transition: var(--transition);
      cursor: pointer;

      &:hover {
        color: var(--clr-primary-5);
      }
    }
  }
  .random-btn {
    margin-top: 0.5rem;
    background: var(--clr-primary-10);
    color: var(--clr-primary-5);
    padding: 0.25rem 0.5rem;
    text-transform: capitalize;
    border-radius: var(--radius);
    transition: var(--transition);
    border-color: transparent;
    cursor: pointer;

    &:hover {
      background: var(--clr-primary-5);
      color: var(--clr-primary-1);
    }
  }
`;

export default Review;
