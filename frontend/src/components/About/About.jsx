import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* ----- about img ----- */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2lg:order-1">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>
          {/* ----- content ------ */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order2">
            <h2 className="heading">Proud to be one of the best</h2>
            <p className="text_para">
              For more than 5 years, we have been a beacon of beauty and style,
              setting the standard for exceptional service and unmatched
              expertise. Join our satisfied clients who trust us for all their
              beauty needs.
            </p>
            <p className="text_para">
              Our commitment to perfection drives us daily, dedicated to our
              clients—not resting on our laurels but always seeking new ways to
              bring out your best look. Delivering top-notch beauty services.
            </p>

            {/* ----- button ----- */}
            <Link to="/">
              <button className="btn">Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
