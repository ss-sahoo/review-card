"use client";

import React, { useState } from "react";

import StarIcon from "@mui/icons-material/Star";

const RatingReview = ({ title, subTitle }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [rating, setRating] = useState(0);
  return (
    <div className="rating-container">
      <div>
        <h1 className="rating-title">{title}</h1>
        <p className="rating-subtitle">{subTitle}</p>
      </div>
      <div>
        {[1, 2, 3, 4, 5].map((star) => {
          return (
            <span
              key={star}
              className="star"
              style={{
                cursor: "pointer",
                color: (hoverRating || rating) >= star ? "gold" : "#E8EAE6",
                fontSize: `35px`,
              }}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
            >
              <StarIcon />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default RatingReview;
