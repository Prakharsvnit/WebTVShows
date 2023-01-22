import Header from "./components/header";
import TvshowPage from "./components/tvshowPage";
import DetailsPage from "./components/detailsPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TvshowPage />} />
        <Route path="/showsDetail" element={<DetailsPage />} />
      </Routes>
    </>
  );
};

export default App;
