import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Common/Layout/Layout";
import NoMatch from "./Components/Common/NoMatch/NoMatch";
import About from "./Components/Page/About/About";
import CaseStudies from "./Components/Page/CaseStudies/CaseStudies";
import Contact from "./Components/Page/Contact/Contact";
import Home from "./Components/Page/Home/Home";
import EmailMarketing from "./Components/Page/Service/EmailMarketing";
import Seo from "./Components/Page/Service/Seo";
import SmsMarketing from "./Components/Page/Service/SmsMarketing";
import SocialMarketing from "./Components/Page/Service/SocialMarketing";
import VideoMarketing from "./Components/Page/Service/VideoMarketing";
import WebDevelopment from "./Components/Page/Service/WebDevelopment";
import "./dist/output.css";

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/email-marketing" element={<EmailMarketing />} />
          <Route path="/video-marketing" element={<VideoMarketing />} />
          <Route path="/seo" element={<Seo />} />
          <Route path="/social-marketing" element={<SocialMarketing />} />
          <Route path="/sms-marketing" element={<SmsMarketing />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
