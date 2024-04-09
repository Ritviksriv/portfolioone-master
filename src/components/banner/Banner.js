import React from "react";
import LeftBanner from "./LeftBanner";
const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-32 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center font-titleFont rounded-sm border-b-designColor"
    >
      <LeftBanner />
    </section>
  );
};

export default Banner;