import { useState } from 'react';
import avatar from '../assets/images/beautician-img01.png';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import uploadImageToCloudinary from '../../utils/uploadCloudinary';
import { BASE_URL } from '../../config';
import {toast} from 'react-toastify'
import HashLoader from 'react-spinners/HashLoader'

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: selectedFile,
    role: '',
    gender: '',
    
  });

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    const data = await uploadImageToCloudinary(file)
    
    
    setSelectedFile(data.url);
    setPreviewURL(data.url);
    setFormData({... formData, photo:data.url})
  };

  const submitHandler = async (event) => {

    
    event.preventDefault();
    setLoading(true)

    try {
      const res = await fetch(`${BASE_URL}/auth/register`,{
        method: 'post',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(formData)
      })

      const {message} = await res.json()

      if(!res.ok){
        throw new Error(message)
      }

      setLoading(false)
      toast.success(message)
      navigate('/login')
    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
  };

  return (
    <section className='h-screen flex items-center justify-center px-5 xl:px-0'>
      <div className='max-w-[1170px] w-full mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden'>
          

          <div className='p-10 flex flex-col justify-center'>
            <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
              Create an <span className='text-blue-900'>account</span>
            </h3>

            <form onSubmit={submitHandler}>
              <div className='mb-5'>
                <input
                  type='text'
                  placeholder='Full Name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-text'
                  required
                />
              </div>
              <div className='mb-5'>
                <input
                  type='email'
                  placeholder='Type your email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-text'
                  required
                />
              </div>
              <div className='mb-5'>
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={formData.password}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-text'
                  required
                />
              </div>

              <div className='mb-5 flex items-center justify-between'>
                <label className='text-headingColor font-bold text-[16px] leading-7'>
                  Are you a:
                  <select
                    name='role'
                    value={formData.role}
                    onChange={handleInputChange}
                    className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none ml-2'
                    required
                  >
                    <option value=''>Select Role</option>
                    <option value='client'>Client</option>
                    <option value='beautician'>Beautician</option>
                  </select>
                </label>
                <label className='text-headingColor font-bold text-[16px] leading-7'>
                  Gender:
                  <select
                    name='gender'
                    value={formData.gender}
                    onChange={handleInputChange}
                    className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none ml-2'
                    required
                  >
                    <option value=''>Select</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                  </select>
                </label>
              </div>

              <div className='mb-5 flex items-center gap-3'>
                { selectedFile && <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
                
                    <img src={previewURL} alt='' className='rounded-full w-full ' />
                   
                </figure>}

                <div className='relative w-[130px] h-[50px]'>
                  <input
                    type='file'
                    name='photo'
                    id='customFile'
                    accept='.jpg, .png'
                    onChange={handleFileChange}
                    className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                  />
                  <label
                    htmlFor='customFile'
                    className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'
                  >
                    Upload Photo
                  </label>
                </div>
              </div>

              <div className='mt-7'>
                <button
                disabled={loading && true}
                  type='submit'
                  className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'
                >
                  {loading? <HashLoader size={30} color="#ffffff"/>:'Sign Up'}
                </button>
              </div>

              <p className='mt-5 text-textColor text-center'>
                Already have an account? <Link to='/login' className='text-primaryColor font-medium ml-1'>Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
