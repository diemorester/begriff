import { useEffect, useState } from "react";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";
import Promo from "./components/Promo";
import Preloader from "./components/Preloader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 3000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // Menyimpan posisi scroll sebelum halaman di-refresh
  useEffect(() => {
    const saveScrollPosition = () => {
      localStorage.setItem("scrollPosition", window.scrollY.toString());
    };

    window.addEventListener("beforeunload", saveScrollPosition);
    return () => window.removeEventListener("beforeunload", saveScrollPosition);
  }, []);

  // Mengembalikan posisi scroll setelah halaman dimuat
  useEffect(() => {
    const savedPosition = localStorage.getItem("scrollPosition");
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition, 10));
    }
  }, [isLoading]); // Pastikan preloader selesai dulu sebelum scroll

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <>
      <NavBar />
      <Hero />
      <AboutUs />
      <Promo />
      <Menu />
      <Contact />
    </>
  );
};

export default App;
