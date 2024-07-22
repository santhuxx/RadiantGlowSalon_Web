import React from "react";
import { beauticians } from "./../../assets/data/beauticians";
import BeauticianCard from "./BeauticianCard";

const BeauticianList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {beauticians.map((beautician) => (
        <BeauticianCard key={beautician.id} beautician={beautician} />
      ))}
    </div>
  );
};

export default BeauticianList;
