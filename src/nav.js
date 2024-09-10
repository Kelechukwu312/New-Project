import { AiOutlineSearch } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

function Nav() {
  return (
    <nav className="flex items-center relative shadow bg-white">
      <img src="Jumia-logo.png" className="w-[9%] h-[9%] ml-[175px]" alt="" />
      <div className="relative border border-gray-400 w-[30%] rounded-[3px] ml-24 pt-[8px] pb-[8px] pl-[35px] pr-[10px]">
        <AiOutlineSearch className="text-[22px] text-gray-500 absolute left-2" />
        <input
          type="text"
          placeholder="Search products, brands and categories"
          name="search"
          className="w-full placeholder-gray-500  border-none outline-none"
        />
      </div>
      <button className="py-[8px] px-[15px] bg-orange-400 text-white text-[15px] font-semibold  rounded - md shadow-lg  ml-[8px]">
        SEARCH
      </button>
      <div className="flex items-center ml-[18px]">
        <a
          href="#"
          className="flex items-center mr-[10px] text-[16px] font-semibold"
        >
          <FaRegUser className="mr-[7px] text-[22px]" />
          Account
          <RiArrowDropDownLine className="ml-[7px] text-lgicon" />
        </a>
        <a
          href="#"
          className="flex items-center mr-[10px] text-[16px] font-semibold"
        >
          <FaRegQuestionCircle className="mr-[7px] text-[22px]" />
          Help
          <RiArrowDropDownLine className="ml-[7px] text-lgicon" />
        </a>
        <a href="#" className="flex items-center text-[16px] font-semibold">
          <MdOutlineShoppingCart className="mr-[7px] text-[22px]" />
          Cart
        </a>
      </div>
    </nav>
  );
}
export default Nav;
