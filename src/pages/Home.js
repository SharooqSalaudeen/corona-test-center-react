import React from "react";

import HomeSection1 from "../components/HomeSections/HomeSection1";
import HomeSection2 from "../components/HomeSections/HomeSection2";
import TestSection from "../components/TestSections/TestSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <HomeSection1 />
      <TestSection />
      <HomeSection2 />
      <Footer />
    </>
  );
}
