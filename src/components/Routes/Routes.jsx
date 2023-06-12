import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Services from "../Services/Services";
import Portfolio from "../Portfolio/Portfolio";
import FAQs from "../FAQs/FAQs";
import About from "../About/About";
import Contact from "../Contact/Contact";
import QuhDock_life from "../QUHDockLife/QuhDock_life"

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Home" element={<Home />} />
      <Route path="Services" element={<Services />} />
      <Route path="Portfolio" element={<Portfolio />} />
      <Route path="FAQs" element={<FAQs />} />
      <Route path="About" element={<About />} />
      <Route path="ContactUs" element={<Contact />} />
      <Route path="lifeatquhdock" element={<QuhDock_life />} />
    </Routes>
  );
}
