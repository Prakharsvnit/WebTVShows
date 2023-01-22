import Header from "./header";
import { useSelector } from "react-redux";

const DetailsPage = () => {
  const showDetailsInfo = useSelector((state) => state.showDetail);

  console.log("showDetailsInfo", showDetailsInfo);

  return (
    <>
      <Header />
      {/* {showDetails.map((detail, index) => (
        <article>
          <figure>
            <img key={index} src={detail.image.original} alt="img" />
          </figure>
          <aside>
            <p>
              {detail.show.name}
              <span>{detail.rating.average || 0}</span>
            </p>
          </aside>
        </article>
      ))} */}
    </>
  );
};

export default DetailsPage;
