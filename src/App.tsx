import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import ImgRoutes from "./Components/ImgRoutes";
import { useEffect, useState } from "react";

function App() {
  const [slideshowText, setSlideshowText] = useState(() => {
    const storedState = localStorage.getItem("slideshowText");
    return storedState ? JSON.parse(storedState) : false;
  });
  console.log(slideshowText);
  useEffect(() => {
    localStorage.setItem("slideshowText", JSON.stringify(slideshowText));
  }, [slideshowText]);
  const handleClick = () => {
    setSlideshowText((prevState: boolean) => !prevState);
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
