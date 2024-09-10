import { FaPhone } from "react-icons/fa6";
function Rightnav (){
    return(
        <div>
        <div className="ml-8  space-y-[22px] py-[15px] px-4 w-[13.5rem] rounded-md shadow cursor-pointer bg-white">
            <div className="flex items-center">
            <FaPhone  className="border-[1px] border-orange-400 rounded-full text-gray-500 py-[7px] text-[2.2rem] mr-2"/>
            <div>
            <h2 className="text-sm font-medium">CALL TO ORDER</h2>
            <p className="text-xs">0700-600-0000</p>
            </div>
            </div>
            <div className="flex items-center">
                <img src="hut.png" className="w-[2.2rem] mr-2"/>
                <h2 className="text-sm font-medium">Sell on Jumia</h2>
            </div>
            <div className="flex items-center">
                <img src="box.png" className="w-[2.2rem] mr-2"/>
                <h2 className="text-sm font-medium">Best Deals</h2>
            </div>
        </div>
        <div>
        <img src="shop.png" className="ml-8  mt-[16px] rounded-md "/>
        </div>
        </div>
    )
}
export default Rightnav;