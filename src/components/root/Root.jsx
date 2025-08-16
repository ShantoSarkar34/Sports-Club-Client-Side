import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router";
import Lenis from "@studio-freight/lenis";

const Root = () => {

    useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <Header />
      <div className="pt-16 lg:pt-19">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
