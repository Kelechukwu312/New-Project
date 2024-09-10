function Site(){
    return(
        <div>
              <nav className="flex items-center h-8">
                <div className=" flex items-center  ml-[12%]">
                <img src = "jumia.png"  className="w-[13px]  h-[13px]"/>
                <p className = "text-[12px] text-orange-400 font-medium ml-[5px]">Sell on Jumia</p>
                </div>
                <div className="flex ml-[28%] mt-[5px]">
                <img src = "Jumia-Logo.png" className="w-[55px] h-[30px] mr-[15px]"/>
                <img src = "jm-pay.png" className="w-[60px] h-[30px]"/>
                </div>
            </nav>
        </div>
    )
} 
export default Site;