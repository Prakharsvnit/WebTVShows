import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addShowDetails } from "../features/shows/showSlice";
import styles from "../css/header.module.css";

const Header = () => {
  const [searchShow, setSearchShow] = useState("");
  const dispatch = useDispatch();
  const baseurl = "http://api.tvmaze.com/";

  const fetchShowDetails = useCallback(
    async (event) => {
      event.preventDefault();
      const response = await axios.get(
        `${baseurl}search/shows?q=${searchShow}`
      );
      dispatch(addShowDetails(response.data));
    },
    [searchShow, dispatch]
  );

  useEffect(() => {
    fetchShowDetails();
  }, [fetchShowDetails, searchShow]);

  return (
    <>
      <header className={styles.header}>
        <p className={styles.tv}>TV Maze</p>
        <form className={styles.form}>
          <input
            type="search"
            placeholder="Search"
            onChange={(event) => setSearchShow(event.target.value)}
          />
          <button
            onClick={(event) => fetchShowDetails(event)}
            className={styles.searchBtn}
          >
            Go
          </button>
        </form>
      </header>
    </>
  );
};

export default Header;
