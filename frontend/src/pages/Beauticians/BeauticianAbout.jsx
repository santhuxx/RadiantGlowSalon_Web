import React from "react";

const BeauticianAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-2xl leading-10 text-headingColor font-semibold flex items-center gap-2">
          About
          <span className="text-irisBlueColor font-bold text-2xl leading-9">
            Ms. Aisha Rahman
          </span>
        </h3>
        <p className="text-base leading-7 text-textColor mt-4">
          Meet Ms. Aisha Rahman, a distinguished Hair Stylist with over a decade
          of expertise in creating stunning hairstyles. Known for her meticulous
          attention to detail and a flair for the latest trends, Ms. Rahman
          transforms hair into works of art. Her dedication to client
          satisfaction and commitment to using premium products ensure every
          visit leaves you feeling confident and beautiful.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-xl leading-10 text-headingColor font-semibold">
          Experience
        </h3>
        <ul className="mt-4">
          <li className="mb-4">
            <h4 className="text-lg leading-7 font-semibold text-headingColor">
              Lead Stylist at Glamour Salon, 2015 - Present
            </h4>
            <p className="text-base leading-7 text-textColor mt-2">
              Managed a team of stylists, overseeing hair services for
              high-profile clients. Introduced innovative styling techniques,
              contributing to a 20% increase in client retention.
            </p>
          </li>
          <li className="mb-4">
            <h4 className="text-lg leading-7 font-semibold text-headingColor">
              Stylist Apprentice at Vogue Cuts, 2010 - 2015
            </h4>
            <p className="text-base leading-7 text-textColor mt-2">
              Gained hands-on experience in cutting, coloring, and styling
              techniques under senior stylists. Developed a keen eye for
              precision and customer-focused service.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BeauticianAbout;
