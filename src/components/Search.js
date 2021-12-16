import React from "react";
import "../components/styles.css";

const Search = () => (
  <form action="/" method="get">
    <label htmlFor="header-search">
      <span className="visually-hidden">Search blog posts</span>
    </label>
    <input
      type="text"
      id="header-search"
      placeholder="Search blog posts"
      name="s"
    />
    <button type="submit">Search</button>
  </form>
);

export default Search;
