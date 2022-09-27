import React, { useEffect, useRef, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../CustomCursor";
import Header from "../components/Header";
import Featured from "../components/Featured";
import About from "../components/About";
import Gallery from "../components/Gallery";


import "../styles/home.scss";
import "../styles/reset.css";
import useLocoScroll from "../hooks/useLocoScroll";

const Home = () => {

  const [preloader, setPreLoader] = useState(true);

  useLocoScroll(!preloader);
  const [timer, setTimer] = useState(2);
  
  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreLoader(false);
  }

  useEffect(()=> {
    id.current = window.setInterval(() => {
      setTimer(timer => timer -1);
    }, 1000);
    return() => clear();    
  }, []);

  useEffect(()=> {
    if (timer === 0) {
      clear ();
    }

  }, [timer]);

  
  return (
    <>
      <CustomCursor />
      {preloader ? (
        <div className="loader-wrapper  absolute">
        <h1>Flirty flowers</h1>
        <h2>Argentina</h2>
        </div>
      ) : (
        <div
          className="main-container"
          id="main-container"
          data-scroll-container          
        >
          <Navbar />
          <Header />
          <Featured />
          <About />
          <Gallery />
          <Footer />
        </div>
      )}
    </>
  );
};
export default Home;
