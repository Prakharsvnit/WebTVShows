import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { addShowDetail } from "../redux/showSlice";
import styles from "../css/header.module.css";

const Header = () => {
  const [searchShow, setSearchShow] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const baseurl = "https://api.tvmaze.com/";

  const fetchShowDetails = useCallback(
    async (event) => {
      if (event) {
        event.preventDefault();
        const response = await axios.get(
          `${baseurl}search/shows?q=${searchShow}`
        );
        if (response) {
          dispatch(addShowDetail(response.data));
          navigate("/showsDetail");
        }
      }
    },
    [searchShow, dispatch, navigate]
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
