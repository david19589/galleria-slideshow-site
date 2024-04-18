import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import ImgRoutes from "./Components/ImgRoutes";
import { useState } from "react";

function App() {
  const [slideshowText, setSlideshowText] = useState(false);
  const handleClick = () => {
    setSlideshowText((prevState) => !prevState);
  };

  return (
    <BrowserRouter>
      <Header
        slideshowText={slideshowText}
        setSlideshowText={setSlideshowText}
        handleClick={handleClick}
      />
      <ImgRoutes slideshowText={slideshowText} handleClick={handleClick} />
    </BrowserRouter>
  );
}

export default App;
