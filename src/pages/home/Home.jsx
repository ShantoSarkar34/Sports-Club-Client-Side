import React, { useEffect } from "react";
import SportsBanner from "./SportsBanner";
import About from "./About";
import Location from "./Location";
import Promotions from "./Promotions";
import FacilitiesAmenities from "./FacilitiesAmenities";
import SportsPrograms from "./SportsPrograms";
import MembershipPlans from "./MembershipPlans";
import CoachesTrainers from "./CoachesTrainers";
import NewsletterCTA from "./NewsletterCTA";

const Home = () => {
  useEffect(() => {
    document.title = "Sports-Club | Home";
  }, []);
  return (
    <div>
      <SportsBanner></SportsBanner>
      <About></About>
      <FacilitiesAmenities></FacilitiesAmenities>
      <SportsPrograms></SportsPrograms>
      <CoachesTrainers></CoachesTrainers>
      <MembershipPlans></MembershipPlans>
      <Promotions></Promotions>
      <Location></Location>
      <NewsletterCTA></NewsletterCTA>
    </div>
  );
};

export default Home;
