import { useState } from "react";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          value={query}
          autoComplete="off"
          autoFocus
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
