import { StopIcon } from "@heroicons/react/24/solid";
import { Image } from "next/image";

function TargetMiniListItem(props) {
  return (
    <li className="flex  justify-center h-[40px] bg-[#23252D] shadow-xl rounded  border border-transparent border-r-[#ffffff13] border-t-[#ffffff13] border-b-[#ffffff13] w-[533px] mt-[10px]">
      <div className=" w-[64px] h-[40px] border border-l-1 border-l-[#FF8B67] border-transparent border-r-black">
        <Image
          className="rounded-full w-[24px] h-[24px] mt-[0.33rem] ml-auto mr-auto"
          src={props.imageUrl}
          alt=""
        />
      </div>
      <div className="hover:bg-[#ffffff18] w-[469px] pt-[0.33rem] pl-2 flex">
        <p className="text-sm leading-6 text-[#d0d0d0]">{props.title}</p>
        <p className="text-sm leading-6 text-[#d0d0d0] pl-6">{props.status}</p>
        <StopIcon
          width="12px"
          height="12px"
          className={`mt-[7.5px] ml-2 rounded-full ${
            props.status === "Online" ? "text-green-500" : "text-[#898989]"
          }`}
        />
      </div>
    </li>
  );
}

export default TargetMiniListItem;
