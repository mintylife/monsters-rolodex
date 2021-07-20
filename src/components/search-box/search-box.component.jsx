import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ defaultText, handleChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={defaultText}
      onChange={handleChange}
    />
  );
};
