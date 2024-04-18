import { Routes, Route, useLocation } from "react-router-dom";
import Detail from "./Detail";
import Home from "./Home";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function ImgRoutes(props: { slideshowText: boolean; handleClick: () => void }) {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Home
              slideshowText={props.slideshowText}
              handleClick={props.handleClick}
            />
          }
        />
        <Route path="/Art/:Art" element={<Detail />} />
      </Routes>
    </>
  );
}

export default ImgRoutes;
