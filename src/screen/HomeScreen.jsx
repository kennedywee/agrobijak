import React from "react";

import Button from "../components/Button";
import { Navbar } from "../components";

import { hero } from "../assets";

const HomeScreen = () => {
  return (
    <div className="container py-6">
      <Navbar></Navbar>

      <div className="py-24 flex items-center justify-center">
        <img src={hero} alt="" />
      </div>

      <div className="pb-10 flex flex-col items-center justify-center">
        <h1 className="font-poppins font-bold text-[48px]">
          IoT Platform For Agriculture.
        </h1>
        <p className="font-normal text-[16px]">
          Automate your farm with smart farming using agrobijak.
        </p>
      </div>
    </div>
  );
};

export default HomeScreen;
