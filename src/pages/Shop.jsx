
import React, { useState } from 'react'
import Container from '../components/Container'

import { Link } from 'react-router-dom'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { FiPlus } from 'react-icons/fi'
import { TiMinus } from 'react-icons/ti'
import { HiSquares2X2 } from 'react-icons/hi2'
import { FaHeart, FaShoppingCart, FaThList } from 'react-icons/fa'
import { IoGitCompare } from 'react-icons/io5'
import { RxCross2 } from "react-icons/rx";

import Page from '../components/Page'

const Shop = () => {
    let [cateShow, SetcateShow] = useState(false)
    let [cateShowOne, SetcateShowOne] = useState(false)
    let [cateShowTwo, SetcateShowTwo] = useState(false)
    let [cateShowThree, SetcateShowThree] = useState(false)
    let [cateShowFour, SetcateShowFour] = useState(false)
    let [cateShowFive, SetcateShowFive] = useState(false)
    let [letShow, SetLatShow] = useState(false)
    let [letShowOne, SetLatShowOne] = useState(false)
    let [letShowThree, SetLatShowThree] = useState(false)
    return (
      <div>
  <Container>
    <div className="w-2/12 py-[40px]">
<div className="">
<h2 className='font-dm font-bold pb-[10px] text-[#262626] text-[49px]'>Products</h2>
</div>

</div>
    <div className="flex">
      <div className="w-3/12 pb-[100px]">
        <div className="">
           <h4 onClick={(() => SetcateShow(!cateShow))} className='flex justify-between items-center font-dm font-bold text-[20px] text-[#262626] pb-[30px]'>Shop by Category {cateShow ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</h4>
            {cateShow &&

             <ul className='mb-[50px]'>
                 <li onClick={(() => SetcateShowOne(!cateShowOne))} className={`text-[#767676] text-[16px] font-dm font-bold  py-[19px]  border-b-1 border-[#D8D8D8] ${cateShowOne ? "border-none" : ""}`}>
                                        <div className="flex justify-between  items-center">
                                            Category 1 {cateShowOne ? < RxCross2 /> : <FiPlus />}
                                        </div>
                                    </li>
                                    {cateShowOne &&
                                     <div className="mb-[10px]">
                                        <ul>
            <li className='text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm'>Category 1</li>
            <li className='text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm'>Category 2</li>
             <li className='text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm'>Category 3</li>
             <li className='text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm'>Category 4</li>
            <li className='text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm'>Category </li>
            </ul>
     </div>
         }
         <li onClick={(() => SetcateShowTwo(!cateShowTwo))} className={`text-[#767676] flex justify-between items-center text-[16px] font-dm font-bold  py-[19px] border-b-1 border-[#D8D8D8] ${cateShowTwo ? "border-none" : ""}`}>Category 2
            {cateShowTwo ? <RxCross2/> : <FiPlus />}
                                    </li>
        
             <li onClick={(() => SetcateShowThree(!cateShowThree))} className={`text-[#767676] flex justify-between items-center text-[16px] font-dm font-bold  py-[19px] border-b-1 border-[#D8D8D8] ${cateShowThree ? "border-none" : ""}`}>Category 3
                                        {cateShowThree ? < RxCross2/> : <FiPlus/>}
            </li>

            {cateShowThree &&
            <div className="mb-[10px]">

                </div>
                    }

                  <li onClick={(() => SetcateShowFour(!cateShowFour))} className={`text-[#767676] flex justify-between items-center text-[16px] font-dm font-bold  py-[19px] border-b-1 border-[#D8D8D8] ${cateShowFour ? "border-none" : ""}`}>Category 4
                     {cateShowFour ? < RxCross2/> : <FiPlus/>}
                    </li>
                    {cateShowFour &&
                    <div className="mb-[10px]">
                    

                     </div>
                     } 
                     <li onClick={(() => SetcateShowFive(!cateShowFive))} className={`text-[#767676] flex justify-between items-center text-[16px] font-dm font-bold  py-[19px] border-b-1 border-[#D8D8D8] ${cateShowFive ? "border-none" : ""}`}>Category 5
                        {cateShowFive ? < RxCross2/> : <FiPlus/>}
                                    </li>
                                   




                                </ul>
                            }
                        </div>
                        <div className="">
                            <h4 onClick={(() => SetLatShow(!letShow))} className='flex justify-between items-center font-dm font-bold text-[20px] text-[#262626] pb-[30px]'>Shop by Color {letShow ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>}</h4>
                            {letShow &&

                                <ul className='mb-[50px]'>
                                    <li className='text-[#767676] text-[16px] font-dm pb-[19px] flex items-center gap-[10px] border-b-1 border-[#D8D8D8] font-bold'>
                                        <div className='h-[11px] w-[11px] bg-[#666] rounded-full'></div>
                                        Color 1
                                    </li>
                                    <li className='text-[#767676] text-[16px] font-dm py-[19px] flex items-center gap-[10px] border-b-1 border-[#D8D8D8] font-bold'>
                                        <div className='h-[11px] w-[11px] bg-[#FF8899] rounded-full'></div>
                                        Color 2
                                    </li>
                                    <li className='text-[#767676] text-[16px] font-dm py-[19px] flex items-center gap-[10px] border-b-1 border-[#D8D8D8] font-bold'>
                                        <div className='h-[11px] w-[11px] bg-[#7E6321] rounded-full'></div>
                                        Color 3
                                    </li>
                                    <li className='text-[#767676] text-[16px] font-dm py-[19px] flex items-center gap-[10px] border-b-1 border-[#D8D8D8] font-bold'>
                                        <div className='h-[11px] w-[11px] bg-[#B6B6B6] rounded-full'></div>
                                        Color 4
                                    </li>
                                    <li className='text-[#767676] text-[16px] font-dm py-[19px] flex items-center gap-[10px] border-b-1 border-[#D8D8D8] font-bold'>
                                        <div className='h-[11px] w-[11px] bg-[#15CBA5] rounded-full'></div>
                                        Color 5
                                    </li>
                                </ul>
                            }
                        </div>
                        <div className="">
                            <h4 onClick={(() => SetLatShowOne(!letShowOne))} className='flex justify-between items-center font-dm font-bold text-[20px] text-[#262626] pb-[30px]'>Shop by Brand {letShowOne ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</h4>
                            {letShowOne &&

                                <ul className='mb-[50px]'>
                                    <li className='text-[#767676] text-[16px] font-dm pb-[19px] border-b-1 border-[#D8D8D8] font-bold'>
                                        Brand 1
                                    </li>
                                    <li className='text-[#767676] text-[16px] font-dm py-[19px] border-b-1 border-[#D8D8D8] font-bold'>
                                        Brand 2
                                    </li>
                                    <li className='text-[#767676] text-[16px] font-dm py-[19px] border-b-1 border-[#D8D8D8] font-bold'>
                                        Brand  3
                                    </li>
                                    <li className='text-[#767676] text-[16px] font-dm py-[19px] border-b-1 border-[#D8D8D8] font-bold'>
                                        Brand  4
                                    </li>
                                    <li className='text-[#767676] text-[16px] font-dm py-[19px] border-b-1 border-[#D8D8D8] font-bold'>
                                        Brand 5
                                    </li>
                                </ul>
                            }
                        </div>
                        <div className="">
                            <h4 onClick={(() => SetLatShowThree(!letShowThree))} className='flex justify-between items-center font-dm font-bold text-[20px] text-[#262626] pb-[30px]'>Shop by Price {letShowThree ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</h4>
                            {letShowThree &&

                                <ul>
                                    <li className='text-[#767676] text-[16px] font-dm pb-[19px] border-b-1 border-[#D8D8D8] font-bold'>
                                        $1.00 - $9.99
                                    </li>
                                    <li className='text-[#767676] text-[16px] font-dm py-[19px] border-b-1 border-[#D8D8D8] font-bold'>
                                        $10.00 - $19.99
                                    </li>
                                    <li className='text-[#767676] text-[16px] font-dm py-[19px] border-b-1 border-[#D8D8D8] font-bold'>
                                        $20.00 - $29.99
                                    </li>
                                    <li className='text-[#767676] text-[16px] font-dm py-[19px] border-b-1 border-[#D8D8D8] font-bold'>
                                        $30.00 - $39.99
                                    </li>
                                    <li className='text-[#767676] text-[16px] font-dm py-[19px] border-b-1 border-[#D8D8D8] font-bold'>
                                        $40.00 - $69.99
                                    </li>
                                </ul>
                            }
                        </div>
                    </div>
                    <div className="w-9/12 pl-[40px] ">
                        <div className="flex pb-[60px]">
                            <div className="flex gap-[12px] ">
                                <div className="h-[36px] w-[36px] flex justify-center items-center hover:text-white bg-white hover:bg-[#000]">
                                    <HiSquares2X2/>
                                </div>
                                <div className="h-[36px] w-[36px] flex justify-center items-center hover:text-white bg-white hover:bg-[#000]">
                                    <FaThList/>
                                </div>
                            </div>
                            <div className="flex pl-[280px] pr-[40px]">
                                <h4 class="pt-[6px] pr-[10px]">Sort by:</h4>
                              </div>
                            <div className="flex">
                                <h4 class="pt-[5px] pr-[10px]">Show:</h4>
                                <form class="w-[139px]">

                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ">

                                        <option>36</option>
                                       
                                    </select>
                                </form>

                            </div>
                        </div>
                        <div className="flex flex-wrap justify-between">
                      <Page/>
                        
                           
                       
                            
                        </div>
                    </div>
                </div>

            </Container>
            </div> 


   
    

  )
}

export default Shop