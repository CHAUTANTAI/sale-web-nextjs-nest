import { PoppinsText } from "@/components/commons/text/text";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Line3 } from "@/components/line-3/line3";
import { TopHeader } from "@/components/top-header/topHeader";
import React from "react";

const About = () => {
  return (
    <div>
      <TopHeader />
      <div className="h-10"></div>
      <div className="px-20">
      <Header/>
      <div className="h-5"></div>
      <Line3 />
      <div className="h-10"></div>
      <PoppinsText text="About Page" size={56} weight="bold" color="black"/>
      <div className="h-10"></div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
