import React from "react";

const Rate = ({ rating }) => {
  const stars = (x) => {
    let starsArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        starsArray.push(<span>★</span>);
      } else {
        starsArray.push(<span>☆</span>);
      }
    }
    return starsArray;
  };
  return <div>{stars(rating)}</div>;
};
export default Rate;