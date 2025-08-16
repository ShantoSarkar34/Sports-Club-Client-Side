import React, { useEffect } from "react";
import SportsBanner from "./SportsBanner";
import About from "./About";
import Location from "./Location";
import Promotions from "./Promotions";

const Home = () => {
  useEffect(() => {
    document.title = "Sports-Club | Home";
  }, []);
  return (
    <div>
      <SportsBanner></SportsBanner>
      <About></About>
      <Location></Location>
      <Promotions></Promotions>
    </div>
  );
};

export default Home;
