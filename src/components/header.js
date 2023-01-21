import { useEffect, useState, useRef } from "react";
import axios from "axios";
import styles from "../css/header.module.css";

const Header = () => {
  const [searchShow, setSearchShow] = useState("");
  const [showDetails, setShowDetails] = useState([]);
  const inputRef = useRef(null);
  const baseurl = "http://api.tvmaze.com/";

  const fetchShowDetails = async (searchShow) => {
    const response = await axios.get(`${baseurl}search/shows?q=${searchShow}`);
    setShowDetails(response.data);
  };

  useEffect(() => {
    fetchShowDetails(searchShow);
  }, [searchShow]);

  function handleSearch(event) {
    event.preventDefault();
    setSearchShow(event.target.value);
    inputRef.current.focus();
  }

  return (
    <header className={styles.header}>
      <p className={styles.tv}>TV Maze</p>
      <form className={styles.form}>
        <input
          ref={inputRef}
          type="search"
          placeholder="Search"
          onChange={handleSearch}
        />
        <button onClick={fetchShowDetails} className={styles.searchBtn}>
          Go
        </button>
      </form>
    </header>
  );
};

export default Header;
