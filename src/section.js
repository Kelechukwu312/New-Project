/* eslint-disable jsx-a11y/anchor-is-valid */
import { PiCookingPot } from "react-icons/pi";
import { PiDeviceMobileLight } from "react-icons/pi";
import { MdOutlineCandlestickChart } from "react-icons/md";
import { GrHomeRounded } from "react-icons/gr";
import { PiTelevision } from "react-icons/pi";
import { IoShirtOutline } from "react-icons/io5";
import { LuApple } from "react-icons/lu";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { LuBaby } from "react-icons/lu";
import { CiDumbbell } from "react-icons/ci";
import { IoEllipsisHorizontalCircleOutline } from "react-icons/io5";
import { LuGamepad2 } from "react-icons/lu";
import Slider from "./Slider";
import Rightnav from "./Rightnav";
function Section(){
    const slides =[
        "/image-1.jpg",
        "/image-2.png",
        "/image-3.jpg",
        "/image-4.jpg",
        "/image-5.png",
        "/image-6.png"
      ];
      {/*const containerStyles = {
        width: "700px",
        height: "400px",
        margin: "0 auto"
      }*/}
    return (
      <div className="flex justify-between px-[11rem] max-w-full w-full basis-full pb-4 mt-4">
        <div className="flex w-[206px] text-0 relative bg-white shadow rounded-sm">
            <div className="absolute top-0 left:0 z-[50] text-[0.75rem] flex flex-wrap flex-col rounded-md shadow transition-all duration-200 delay-0 w-0 height-[384px]">
           <a href = "#" className="flex items-center w-[206px] text-[0.75rem] h-[32px] pl-4">
            <PiCookingPot className="text-[1rem] mr-2 flex-shrink-0"/>
            <span>Appliances</span>
           </a>

           <div className="transition-all duration-200 delay-0 p-0 w-0 h-[384px] order-[99] invisible opacity-0 bg-white text-black"></div>
           <a href = "#" className="flex items-center w-[206px] text-[0.75rem] h-[32px] pl-4">
            <PiDeviceMobileLight className="text-[1rem] mr-2" />
           <span>Phones & Tablets</span>
           </a>

           <div className="transition-all duration-200 delay-0 p-0 w-0 h-[384px] order-[99] invisible opacity-0"></div>
           <a href = "#" className="flex items-center w-[206px] text-[0.75rem] h-[32px] pl-4"><MdOutlineCandlestickChart className="text-[1rem] mr-2"/>
           <span>Health & Beauty</span>
           </a>

           <div className="transition-all duration-200 delay-0 p-0 w-0 h-[384px] order-[99] invisible opacity-0"></div>
           <a href = "#" className="flex items-center w-[206px] text-[0.75rem] h-[32px] pl-4">
            <GrHomeRounded className="text-[1rem] mr-2" />
            <span>Home & Office</span>
            </a>

           <div className="transition-all duration-200 delay-0 p-0 w-0 h-[384px] order-[99] invisible opacity-0"></div>
           <a href = "#"className="flex items-center w-[206px] text-[0.75rem] h-[32px] pl-4"><PiTelevision className="text-[1rem] mr-2"/>Electronics</a>
           <div className="transition-all duration-200 delay-0 p-0 w-0 h-[384px] order-[99] invisible opacity-0"></div>
            <a href = "#"className="flex items-center w-[206px] text-[0.75rem] h-[32px] pl-4">
              <IoShirtOutline className="text-[1rem] mr-2"/>
              <span>Fashion</span>
              </a>

            <div className="transition-all duration-200 delay-0 p-0 w-0 h-[384px] order-[99] invisible opacity-0"></div>
            <a href = "#" className="flex items-center w-[206px] text-[0.75rem] h-[32px] pl-4">
              <LuApple className="text-[1rem] mr-2"/>
              <span>Supermarket</span>
              </a>
            <div className="transition-all duration-200 delay-0 p-0 w-0 h-[384px] order-[99] invisible opacity-0"></div>
            <a href = "#"className="flex items-center w-[206px] text-[0.75rem] h-[32px] pl-4">
              <HiOutlineComputerDesktop className="text-[1rem] mr-2"/>
              <span>Computing</span>
              </a>

            <div className="transition-all duration-200 delay-0 p-0 w-0 h-[384px] order-[99] invisible opacity-0"></div>
            <a href="#" className="flex items-center w-[206px] text-[0.75rem] h-[32px] pl-4">
              <LuBaby className="text-[1rem] mr-2"/>
              <span>Baby Products</span>
              </a>

            <div className="transition-all duration-200 delay-0 p-0 w-0 h-[384px] order-[99] invisible opacity-0"></div>
            <a href="#" className="flex items-center w-[206px] text-[0.75rem] h-[32px] pl-4">
              <LuGamepad2 className="text-[1rem] mr-2"/>
              <span>Gaming</span>
              </a>

            <div className="transition-all duration-200 delay-0 p-0 w-0 h-[384px] order-[99] invisible opacity-0"></div>
            <a href = "#" className="flex items-center w-[206px] text-[0.75rem] h-[32px] pl-4">
              <CiDumbbell className="text-[1rem] mr-2"/>
              <span>Sporting Goods </span>
              </a>

            <div className="transition-all duration-200 delay-0 p-0 w-0 h-[384px] order-[99] invisible opacity-0"></div>
            <a href = "#" className="flex items-center w-[206px] text-[0.75rem] h-[32px] pl-4">
              <IoEllipsisHorizontalCircleOutline className="text-[1rem] mr-2"/>
              <span>Other Categories</span>
              </a>

            <div className="transition-all duration-200 delay-0 p-0 w-0 h-[384px] order-[99] invisible opacity-0"></div>
            </div>
        </div>
        <div className="w-[712px] h-[384px]">
            <Slider slides={slides}/>
            </div>
        <Rightnav/>
        </div>
    )
}

export default Section;