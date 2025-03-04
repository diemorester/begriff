import { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";
import Promo from "./components/Promo";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    requestAnimationFrame(() => {
      setTimeout(handleLoad, 2000);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <NavBar />
          <Hero />
          <AboutUs />
          <Promo />
          <Menu />
          <Contact />
        </>
      )}
    </>
  );
};

export default App;