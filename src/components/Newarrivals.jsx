import React, { useContext } from 'react'
import Container from './Container'
import product from "../assets/product.png"
import { FaHeart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import { ApiData } from './ContextApi';
import Slider from "react-slick";



function SampleNextArrow(props) {
  const {  onClick } = props;
  return (
    <div className='nextButton'
     onClick={onClick}
    ><GrLinkPrevious/></div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className='prevButton'
    
      onClick={onClick}
    ><GrLinkNext/></div>
  );
}


const Newarrivals = () => {
   let Data = useContext(ApiData);
  let newSlider ={
     infinite: true,
     slidesToShow: 4,
     slidesToScroll: 1,
      nextArrow:<SampleNextArrow />,
    prevArrow:<SamplePrevArrow />,
  }
 
 
  
  return (
    <div>
        <Container>
            <h2 className='font-dm text-[40px] text-[#262626] font-bold mb-[10px]'>Newarrivals</h2>
          
             <div>
                  <Slider {...newSlider}>
                    {Data.map((item)=>(
              <div className="!w-[95%]]">
               <div className="relative group">
                 <div className="">
                  <img src={item.thumbnail} alt="" />
                </div>
                 <div className="absolute left-0 bottom-0 w-full bg-[white] opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
                  <ul className=' pr-4'>
                    <li className='flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]'>
                      <span className=''>Add to Wish List</span>  <FaHeart  />
                       </li>
                   <li className='flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]' >
                    <span>compare</span> <IoGitCompare />
                    </li>
                        <li className='flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]'>
                          <span>Add to cart</span><FaCartPlus/>
                          </li>
                      
                  </ul>
                 </div>
               </div>
                <div className=" flex justify-between ">
                  <div className="">
                    <h3>{item.title}</h3>
                    <p>{item.brand}</p>
                  </div>
                  <div className="">
                    ${item.price}
                  </div>
                </div>
              </div>
            ))}
            </Slider>
            </div>
           
              
             
           
        </Container>
    </div>
  )
}

export default Newarrivals