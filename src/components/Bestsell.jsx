import React from 'react'
import { FaHeart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import bsell1 from "../assets/bsell1.png"
import bsell2 from "../assets/bsell2.png"
import bsell3 from "../assets/bsell3.png"
import bsell4 from "../assets/bsell4.png"
import Container from './Container'

const Bestsell = () => {
  return (
    <div>
        <Container>
       <h2 className="lg:text-[39px] text-[20px] text-primary font-bold font-dmsans">BestSells</h2>

       <div className="flex justify-around mt-5">
        <div className="w-[24%]">
       <div className="">
          <div className="relative group">
            <img src={bsell1} alt="" />
        
         <div className="absolute left-0 bottom-0 w-full bg-[white] opacity-0 group-hover:opacity-50 duration-300 ease-in-out">
          <ul>
            <li className='flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]'S>
              <span className=''>Add to Wish List</span><FaHeart/>
            </li>
            <li className='flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]'>
               <span>compare</span> <IoGitCompare/>
            </li>
            <li className='flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]'>
                <span>Add to cart</span><FaCartPlus/>
              </li>
          </ul>
         </div>
          </div>
       </div>
         <div className="flex justify-between">
          <div className="">
            <h3>Basic Crew Neck Tee</h3>
            <p className="lg:text-[16px] text-[12px] text-secondary font-normal font-dm">Black</p>

          </div>
          <div className="">
            $44:00
          </div>
         </div>
          </div>
            <div className="w-[24%]">
       <div className="">
          <div className="relative group">
            <img src={bsell2} alt="" />
        
         <div className="absolute left-0 bottom-0 w-full bg-[white] opacity-0 group-hover:opacity-50 duration-300 ease-in-out">
          <ul>
            <li className='flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]'S>
              <span className=''>Add to Wish List</span><FaHeart/>
            </li>
            <li className='flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]'>
               <span>compare</span> <IoGitCompare/>
            </li>
            <li className='flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]'>
                <span>Add to cart</span><FaCartPlus/>
              </li>
          </ul>
         </div>
          </div>
       </div>
         <div className="flex justify-between">
          <div className="">
            <h3 className="lg:text-[18px] text-[14px] text-primary font-bold font-dm">Basic Crew Neck Tee</h3>
            <p className="lg:text-[16px] text-[12px] text-secondary font-normal font-dm">Black</p>

          </div>
          <div className="">
            $44:00
          </div>
         </div>
          </div>
            <div className="w-[24%]">
       <div className="">
          <div className="relative group">
            <img src={bsell3} alt="" />
        
         <div className="absolute left-0 bottom-0 w-full bg-[white] opacity-0 group-hover:opacity-50 duration-300 ease-in-out">
          <ul>
            <li className='flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]'S>
              <span className=''>Add to Wish List</span><FaHeart/>
            </li>
            <li className='flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]'>
               <span>compare</span> <IoGitCompare/>
            </li>
            <li className='flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]'>
                <span>Add to cart</span><FaCartPlus/>
              </li>
          </ul>
         </div>
          </div>
       </div>
         <div className="flex justify-between">
          <div className="">
            <h3 className="lg:text-[18px] text-[14px] text-primary font-bold font-dm">Basic Crew Neck Tee</h3>
            <p className="lg:text-[16px] text-[12px] text-secondary font-normal font-dm">Black</p>

          </div>
          <div className="">
            $44:00
          </div>
         </div>
          </div>
            <div className="w-[24%]">
       <div className="">
          <div className="relative group">
            <img src={bsell4} alt="" />
        
         <div className="absolute left-0 bottom-0 w-full bg-[white] opacity-0 group-hover:opacity-50 duration-300 ease-in-out">
          <ul>
            <li className='flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]'S>
              <span className=''>Add to Wish List</span><FaHeart/>
            </li>
            <li className='flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]'>
               <span>compare</span> <IoGitCompare/>
            </li>
            <li className='flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]'>
                <span>Add to cart</span><FaCartPlus/>
              </li>
          </ul>
         </div>
          </div>
       </div>
         <div className="flex justify-between">
          <div className="">
            <h3 className="lg:text-[18px] text-[14px] text-primary font-bold font-dm">Basic Crew Neck Tee</h3>
            <p className="lg:text-[16px] text-[12px] text-secondary font-normal font-dm">Black</p>

          </div>
          <div className="">
            $44:00
          </div>
         </div>
          </div>
        </div>
      
        </Container>

    </div>
  )
}

export default Bestsell