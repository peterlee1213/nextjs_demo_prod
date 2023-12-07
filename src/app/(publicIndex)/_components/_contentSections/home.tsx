import React from "react";
import Image from "next/image";
import EarthSvg from "../../_image/earth.svg";
import { Typography } from "@mui/material";
import * as CONST from "@/app/(publicIndex)/const";

const HomeSection = () => {
  return (
    <div className="flex justify-between">
      <Typography
        variant="h2"
        className="self-center text-5xl font-bold"
        sx={{ color: CONST.primaryColor }}
      >
        <p className="whitespace-nowrap">Buy Affordable</p>
        <p className="whitespace-nowrap">And Cheap</p>
        <p className="whitespace-nowrap">VPN Here</p>
      </Typography>
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
