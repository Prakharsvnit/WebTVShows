import Header from "./features/shows/header";
import TvshowPage from "./components/tvshowPage";
import DetailsPage from "./features/shows/detailsPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <TvshowPage />
      <DetailsPage />
      <Routes>
        <Route path="/searchShow" element={<DetailsPage />} />
      </Routes>
    </>
  );
};

export default App;
