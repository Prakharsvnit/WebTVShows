import { useSelector } from "react-redux";
import styles from "../css/detailsPage.module.css";
import Summary from "./summary";

const DetailsPage = () => {
  const showsDetails = useSelector((state) => state.show.showDetail[0]);
  console.log(showsDetails);
  return (
    <>
      {showsDetails.map((detail, index) => (
        <article key={index} className={styles.showDetailBox}>
          <figure>
            <img
              key={index}
              className={styles.detailImg}
              src={detail.show.image.original}
              alt="img"
            />
          </figure>
          <aside>
            <p className={styles.showName}>
              {detail.show.name}
              {"|"} {detail.show.rating.average}
            </p>
            <p className={styles.showHistory}>
              {detail.show.ended || "2011-02-14"} {"|"}{" "}
              {detail.show.runtime || 120} minutes {"|"}{" "}
              <span>Christopher Nolan</span>
            </p>
            <Summary summary={detail.show.summary} />
          </aside>
        </article>
      ))}
    </>
  );
};

export default DetailsPage;
