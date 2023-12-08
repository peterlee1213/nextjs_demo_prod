import React from "react";
import Image from "next/image";
import EarthSvg from "../../_image/earth.svg";

const HomeSection = async () => {
  return (
    <div className="flex justify-between">
      <h2 className="self-center text-5xl font-bold">
        <p className="whitespace-nowrap">Buy Affordable</p>
        <p className="whitespace-nowrap">And Cheap</p>
        <p className="whitespace-nowrap">VPN Here</p>
      </h2>
      <Image
        src={EarthSvg}
        alt="index earth decoration"
        className="w-3/4 h-3/4 translate-x-1/4"
        style={{ minHeight: "478px", minWidth: "850px" }}
      ></Image>
    </div>
  );
};

export default HomeSection;
