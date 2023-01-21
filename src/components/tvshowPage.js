import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../css/tvshowPage.module.css";

const TvshowPage = () => {
  const baseURL = "https://api.tvmaze.com/shows";

  const [showData, setShowData] = useState([]);

  useEffect(() => {
    const fetchtvShows = async () => {
      const response = await axios.get(baseURL);
      setShowData(response.data);
    };
    fetchtvShows();
  }, []);

  let genreDetails = showData.reduce((acc, item) => {
    item.genres.forEach((genre) => {
      if (!acc[genre]) {
        acc[genre] = [];
      }
      acc[genre].push(item.image.medium);
    });
    return acc;
  }, {});

  return (
    <>
      {Object.keys(genreDetails).map((genre, index) => (
        <article key={index}>
          <p className={styles.genres}>{genre}</p>
          <figure className={styles.genreImgContainer}>
            {genreDetails[genre].map((imageURL, index) => (
              <img
                key={index}
                className={styles.genreImg}
                src={imageURL}
                alt="img"
              />
            ))}
          </figure>
        </article>
      ))}
    </>
  );
};

export default TvshowPage;
