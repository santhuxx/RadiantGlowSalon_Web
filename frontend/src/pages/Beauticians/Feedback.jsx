import React from 'react'
import avatar from '../../assets/images/avatar-icon.png'
import { format } from 'date-fns';
import {AiFillStar} from 'react-icons/ai'

const Feedback = () => {
    const formatDate = (dateString) => {
        // May 14, 2024
        return format(new Date(dateString), 'MMMM d, yyyy');
      };
  return (
    <div>
      <div className='mb-[50px]'>
        <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>
            All reviews (310)
        </h4>

        <div className='flex justify-between gap-10 mb-[30px]'>
            <div className='flex gap-3'>
                <figure className='w-10 h-10 rounded-full'>
                    <img className='w-full' src={avatar} alt=''/>
                </figure>

                <div>
                    <h5 className='text-[16px] leading-6 text-primaryColor font-bold'>
                    Ms. Aisha Rahman
                    </h5>
                    <p className='text-[14px] leading-6 text-textColor'>
                        {formatDate("05-14-2024")}
                    </p>
                    <p className='text_para mt-3 font-medium text-[15px]'>
                    Ms. Aisha Rahman is simply amazing! Her talent with hair is unmatched. Always leaving the salon feeling fabulous. Highly recommended! ✨
                    </p>
                </div>
            </div>
            <div className='flex gap-1'>
                {[...Array(5).keys()].map((_,index)=> <AiFillStar key={index} color='#0067ff'/>)}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback
