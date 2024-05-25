"use client";

import React, { useState } from "react";

import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const LikeDislikeComponent = ({ title, subTitle }) => {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [hovered, setHovered] = useState(null);

  const handleLike = () => {
    if (like) {
      setLike(false);
    } else {
      setLike(true);
      setDislike(false);
    }
  };

  const handleDislike = () => {
    if (dislike) {
      setDislike(false);
    } else {
      setDislike(true);
      setLike(false);
    }
  };
  return (
    <div className="rating-container" style={{ gap: "1rem" }}>
      <div>
        <h1 className="rating-title">{title}</h1>
        <p className="rating-subtitle">{subTitle}</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <span
          onClick={handleDislike}
          onMouseEnter={() => setHovered("dislike")}
          onMouseLeave={() => setHovered(null)}
          style={{
            cursor: "pointer",
            color: dislike || hovered === "dislike" ? "red" : "#E8EAE6",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <ThumbDownIcon />{" "}
          <span
            style={{ color: dislike || hovered === "dislike" ? "red" : "#000" }}
          >
            No
          </span>
        </span>
        <span
          onClick={handleLike}
          onMouseEnter={() => setHovered("like")}
          onMouseLeave={() => setHovered(null)}
          style={{
            cursor: "pointer",
            color: like || hovered === "like" ? "green" : "#E8EAE6",
            marginRight: "10px",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <ThumbUpIcon />{" "}
          <span
            style={{ color: like || hovered === "like" ? "green" : "#000" }}
          >
            Yes
          </span>
        </span>
      </div>
    </div>
  );
};

export default LikeDislikeComponent;
