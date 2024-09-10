/* eslint-disable jsx-a11y/anchor-is-valid */
import { data, slides } from "./data";
import Slider from "./Slider";
import Rightnav from "./Rightnav";

function Section() {
  return (
    <div className="flex justify-between px-[11rem] max-w-full w-full basis-full pb-4 mt-4">
      <div className="flex w-[206px] text-0 relative bg-white shadow rounded-sm">
        <div className="absolute top-0 left:0 z-[50] text-[0.75rem] flex flex-wrap flex-col rounded-md shadow transition-all duration-200 delay-0 w-0 height-[384px]">
          {data.map((item, index) => (
            <a
              href="#"
              key={index}
              className="flex items-center w-[206px] text-[0.75rem] h-[32px] pl-4"
            >
              <span className="text-[1rem] mr-2 flex-shrink-0">
                {item.icon}
              </span>
              <span>{item.text}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="w-[712px] h-[384px]">
        <Slider slides={slides} />
      </div>
      <Rightnav />
    </div>
  );
}

export default Section;
