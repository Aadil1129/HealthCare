import React from "react";
import Common from "./common.js";
import Services from "./services.js";
import About from "./about.js";
import Department from "./department.js";
import Doctor from "./doctor.js";
import Offers from "./offers.js";
import Faq from "./faq.js";
import Footer from "../common/footer.js";

export default function Home() {
  return (
    <>
      <Common />
      <Services />
      <About />
      <Department />
      <Doctor />
      <Offers />
      <Faq />
      <Footer />
    </>
  );
}
