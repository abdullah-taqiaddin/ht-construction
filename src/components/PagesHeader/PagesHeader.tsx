import React from "react";
import "./PagesHeader.css";

export const PagesHeader = ({
  title,
  imagePath,
}: {
  title: string;
  imagePath: string;
}) => {
  return (
    <div className="pages-header-container">
      <div className="pages-header-image" style={{ padding: "3rem 26rem" }}>
        <img src={imagePath} alt={title} className="header-image" />
      </div>
      <div className="pages-header-title">
        <h1>{title}</h1>
      </div>
    </div>
  );
};
