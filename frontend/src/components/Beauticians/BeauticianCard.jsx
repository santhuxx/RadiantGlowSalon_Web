import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import star from '../../assets/images/Star.png';

const BeauticianCard = ({ beautician }) => {
  const {
    name,
    avgRating,
    totalRating,
    photo,
    specialty,
    totalClients,
  } = beautician;

  return (
    <div className='p-3 lg:p-5'>
      <div>
        <img src={photo} className='w-full' alt={name} />
      
        <h2 className='text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5'>
          {name}
        </h2>

        <h3 className='text-[14px] leading-6 lg:text-[16px] lg:leading-7 text-textColor mt-1'>
          {specialty}
        </h3>

        <div className='mt-2 lg:mt-4 flex items-center justify-between'>
          <span className='bg-[#ccf0f3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded flex items-center'>
            <img src={star} alt="" className='mr-1' /> {avgRating}
          </span>
          <span className='text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>
            ({totalRating})
          </span>
        </div>

        <div className='mt-[18px] lg:mt-5 flex items-center justify-between'>
          <h3 className='text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor'>
            +{totalClients} clients
          </h3>
          <Link
            to='/beauticians'
            className='w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] flex items-center justify-center group hover:bg-primaryColor hover:border-none mt-3'
          >
            <BsArrowRight className='group-hover:text-white w-6 h-5' />
          </Link>
        </div> 
      </div>
    </div>
  );
};

export default BeauticianCard;
