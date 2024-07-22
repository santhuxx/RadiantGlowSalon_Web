import React from "react";
import BeauticianCard from "./../../components/Beauticians/BeauticianCard";
import { beauticians } from "../../assets/data/beauticians";

const Beauticians = () => {
  return (
    <>
      <section className="bg-#fff9ed">
        <div className="container text-center">
          <div className="max-w-[580px] mt-[30px] mx-auto bg-[#0866ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-text placeholder:text-textColor"
              placeholder="Search Beautician"
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {beauticians.map((beautician) => (
              <BeauticianCard key={beautician.id} beautician={beautician} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Beauticians;
