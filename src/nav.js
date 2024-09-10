import { AiOutlineSearch } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
function Nav(){
    return(
        <div>
            <nav className="flex items-center relative  shadow bg-white">
                <img src ="Jumia-logo.png"  className="w-[9%] h-[9%] ml-[175px]"/>
                <AiOutlineSearch  className = "text-[22px] text-gray-500 absolute left-[415px]"/>
                <input type = "text" placeholder="Search products, brands and categories" name="search" className=" rounded-[3px] w-[34%] pt-[8px] pb-[8px] pl-[35px] placeholder-gray-500  border border-gray-400 focus:outline-none ml-24"/>
                <button className="py-[8px] px-[15px] bg-orange-400 text-white text-[15px] font-semibold  rounded - md shadow-lg  ml-[8px]">SEARCH</button>
                <div className="flex items-center ml-[18px]">
                <a href = "#" className="flex items-center mr-[10px] text-[16px] font-semibold" ><FaRegUser className="mr-[7px] text-[22px]"/>Account<RiArrowDropDownLine className = "ml-[7px] text-lgicon"/></a>
                <a href = "#" className="flex items-center mr-[10px] text-[16px] font-semibold"><FaRegQuestionCircle className = "mr-[7px] text-[22px]" />Help<RiArrowDropDownLine className="ml-[7px] text-lgicon" /></a>
                <a href = "#" className="flex items-center text-[16px] font-semibold"><MdOutlineShoppingCart className="mr-[7px] text-[22px]"/>Cart</a>
                </div>
            </nav>
        </div>
    )
}
export default Nav;