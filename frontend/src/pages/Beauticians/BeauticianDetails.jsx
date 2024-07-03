import React, { useState } from 'react';
import beauticianImg from '../../assets/images/beautician-img01.png';
import star from '../../assets/images/star.png';
import BeauticianAbout from './BeauticianAbout';
import Feedback from './Feedback';
import SidePanel from './SidePanel';

const BeauticianDetails = () => {
  const [tab, setTab] = useState('about');

  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
        <div className='grid md:grid-cols-3 gap-[50px]'>
          <div className='md:col-span-2'>
            <div className='flex items-start gap-[50px]'>
              <figure className='w-1/4'>
                <img src={beauticianImg} alt='' className='w-full' />
              </figure>

              <div className='mt-5'>
                <span className='bg-[#ccf0f3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>
                  Hair Stylist
                </span>
                <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>
                  Ms. Aisha Rahman
                </h3>
                <div className='flex items-center gap-[6px] mt-2'>
                  <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                    <img src={star} alt='' /> 4.9
                  </span>
                  <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>
                    (310)
                  </span>
                </div>
              </div>
            </div>

            <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
              <button
                onClick={() => setTab('about')}
                className={`py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold ${tab === 'about' && 'border-b border-solid border-primaryColor'}`}
              >
                About
              </button>
              <button
                onClick={() => setTab('feedback')}
                className={`py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold ${tab === 'feedback' && 'border-b border-solid border-primaryColor'}`}
              >
                Feedbacks
              </button>
            </div>

            <div className='mt-[50px]'>
              {
                tab=='about' && <BeauticianAbout/>
              }
              {
                tab=='feedback' && <Feedback/>
              }
            </div>


          </div>
          <div>
            <SidePanel/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeauticianDetails;
