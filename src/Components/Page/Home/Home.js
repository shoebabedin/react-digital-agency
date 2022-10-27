import React from "react";
import CustomPlan from "../../Common/CustomPlan/CustomPlan";
import CaseStudy from "./CaseStudy";
import Explore from "./Explore";
import Hero from "./Hero";
import OurClient from "./OurClient";
import RecentProjects from "./RecentProjects";
import Service from "./Service";

const Home = () => {
  return (
    <>
      {/* <!-- hero section --> */}
      <Hero/>
      {/* <!-- hero section --> */}

      {/* <!-- our service --> */}
      <Service/>
      {/* <!-- our service --> */}

      {/* <!-- Case Studies --> */}
      <CaseStudy/>
      {/* <!-- Case Studies --> */}

      {/* <!-- Explore our world class features --> */}
      <Explore/>
      {/* <!-- Explore our world class features --> */}

      {/* <!-- Recent Projects --> */}
      <RecentProjects/>
      {/* <!-- Recent Projects --> */}

      {/* <!-- Our Client Say --> */}
      <OurClient/>
      {/* <!-- Our Client Say --> */}

      {/* <!-- Custome Plan --> */}
      <CustomPlan/>
      {/* <!-- Custome Plan --> */}
    </>
  );
};

export default Home;
