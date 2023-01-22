import Header from "./components/header";
import TvshowPage from "./components/tvshowPage";
import DetailsPage from "./components/detailsPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <TvshowPage />
      <Routes>
        <Route path="/searchShow" element={<DetailsPage />} />
      </Routes>
    </>
  );
};

export default App;
