"use client";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Line3 } from "@/components/line-3/line3";
import { TopHeader } from "@/components/top-header/topHeader";
import React, { useEffect, useState} from "react";
import axios from "axios";
import { fetchAccounts } from "@/services/test";

const Home = () => {

  useEffect(() => {
    fetchAccounts();
  }, []); 
  return (
    <div>
      <TopHeader />
      <div className="h-10"></div>
      <div className="px-20">
      <Header/>
      <div className="h-6"></div>
      <Line3 />
      <div className="h-10"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
