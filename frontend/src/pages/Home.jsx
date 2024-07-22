import React from "react";
import upperImg01 from "../assets/images/upper-Img01.png";
import upperImg02 from "../assets/images/upper-Img02.png";
import upperImg03 from "../assets/images/upper-Img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import underImg from "../assets/images/under-Img.png";
import faqImg from "../assets/images/faq-Img.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import FaqList from "../components/Faq/FaqList";

const Home = () => {
  return (
    <>
      {/* ----- upper section ----- */}
      <section className='upper_section pt-[60px] 2xl:h-[800px] bg-[url("./assets/images/upper-bg.png")] bg-no-repeat bg-center bg-cover'>
        <div className="container">
          {/* ----- upper content ----- */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:w-[570px]">
              <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                We help clients look and feel their best.
              </h1>
              <p className="text_para">
                We are dedicated to enhancing your natural beauty with our range
                of professional services. From hair styling to skincare, our
                expert beauticians use the latest techniques and top-quality
                products to ensure you leave feeling refreshed, confident, and
                radiant. Your satisfaction is our top priority, and we strive to
                provide an exceptional experience in a relaxing and welcoming
                environment.
              </p>
              <button className="btn">Request an Appointment</button>
            </div>
            {/* ----- upper content ----- */}
            <div className="flex gap-[30px] justify-end mt-[30px] lg:mt-0">
              <img src={upperImg01} alt="" className="max-w-full" />
            </div>
            <div className="mt-[30px]">
              <img src={upperImg02} alt="" className="w-full mb-[30px]" />
              <img src={upperImg03} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </section>
      {/* ----- end of upper section ----- */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Professional Beauty and Wellness Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex flex-col items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[16px] leading-9 text-headingColor font-[700] text-center mt-[20px]">
                  Find a Beautician
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Exceptional beauty services for everyone. Experience top-tier
                  care at our salon. From hair to skincare.
                </p>

                <Link
                  to="/beauticians"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex flex-col items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[16px] leading-9 text-headingColor font-[700] text-center mt-[20px]">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Exceptional beauty services for everyone. Experience top-tier
                  care at our salon. From hair to skincare.
                </p>

                <Link
                  to="/beauticians"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex flex-col items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[16px] leading-9 text-headingColor font-[700] text-center mt-[20px]">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Exceptional beauty services for everyone. Experience top-tier
                  care at our salon. From hair to skincare.
                </p>

                <Link
                  to="/beauticians"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----- about section ------ */}
      <About />
      {/* ----- about section end------ */}

      {/* ----- under section ----- */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* ----- under content -----  */}
            <div className="xl:w-[670px]">
              <h2 className="heading">Experience virtual consultations</h2>

              <ul className="pl-4">
                <li className="text_para">1. Schedule the appoinment.</li>
                <li className="text_para">
                  2. Search for your beautician, and contact our salon.
                </li>
                <li className="text_para">
                  3. Use the online shedule to select an appoinment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn"> Learn more</button>
              </Link>
            </div>

            {/* ----- under img ----- */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={underImg} className="w-3/4" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* ----- under section end ------ */}

      {/* ----- services ----- */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Beauty Services</h2>
          </div>

          <ServiceList />
        </div>
      </section>
      {/* ----- services end ----- */}

      {/* ----- faq ------ */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Frequently asked questions from our clients
              </h2>

              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* ----- faq end ------ */}
    </>
  );
};

export default Home;
