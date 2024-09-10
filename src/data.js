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

const slides = [
  "/image-1.jpg",
  "/image-2.png",
  "/image-3.jpg",
  "/image-4.jpg",
  "/image-5.png",
  "/image-6.png",
];

const data = [
  {
    icon: <PiCookingPot />,
    text: "Appliances",
  },
  {
    icon: <PiDeviceMobileLight />,
    text: "Phones & Tablets",
  },
  {
    icon: <MdOutlineCandlestickChart />,
    text: "Health & Beauty",
  },
  {
    icon: <GrHomeRounded />,
    text: "Home & Office",
  },
  {
    icon: <PiTelevision />,
    text: "Electronics",
  },
  {
    icon: <IoShirtOutline />,
    text: "Fashion",
  },
  {
    icon: <LuApple />,
    text: "Supermarket",
  },
  {
    icon: <HiOutlineComputerDesktop />,
    text: "Computing",
  },
  {
    icon: <LuBaby />,
    text: "Baby Products",
  },
  {
    icon: <LuGamepad2 />,
    text: "Gaming",
  },
  {
    icon: <CiDumbbell />,
    text: "Sporting Goods",
  },
  {
    icon: <IoEllipsisHorizontalCircleOutline />,
    text: "Other Categories",
  },
];

export { data, slides };
