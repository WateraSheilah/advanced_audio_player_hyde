import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { DeleteTargetModal } from "../Modals/DeleteTargetModal";
import { useState } from "react";

function StreamTargetItem(props) {
  const [isenabled, setIsEnabled] = useState(props.disabled);

  function updateTargetHandler() {
    setIsEnabled(!isenabled);
    props.updateItem(props.id, props.title, props.disabled);
  }

  return (
    <motion.li
      variants={{
        hidden: { y: 20, opacity: 0, transition: { duration: 0.2 } },
        visible: {
          y: 0,
          opacity: 1,
          transition: { type: "spring", stiffness: 300, damping: 24 },
        },
      }}
      className="flex flex-row h-24 bg-[#23252D] my-2  shadow-xl rounded pr-4 group/item hover:bg-[#ffffff18] border border-transparent border-r-[#ffffff13] border-t-[#ffffff13] border-b-[#ffffff13]"
    >
      <div className=" w-24 border border-l-1 border-l-[#FF8B67] border-transparent border-r-black">
        <img
          className="rounded-full px-5 py-5"
          src={props.image}
          alt="Thumb image"
          width={100}
          height={100}
        />
      </div>
      <div className=" flex justify-between w-[80%]">
        <div className=" py-2 px-2 basis-1/1 ">
          <p className="text-sm font-semibold text-[#ffffffc7]">
            {props.title}
          </p>
          <div className=" h-4 bg-[#ffffff87] w-[0.5px] mt-[2px] mb-[2px] ml-5"></div>
          <div
            className={`${"mt- text-xs flex justify-between border border-[#e1ff000e] h-8 rounded-md p-1 text-[#dfdf5ba0]"}`}
          >
            <div
              className={` mt-auto mb-auto h-2 ${
                props.status === "running" ? "text-[#44ca6c]" : ""
              }`}
            >
              {props.status === "" ? "Initializing" : props.status}
            </div>
            <div
              className={`${
                props.status === "running"
                  ? "bg-[#44ca6c] w-2 h-2 ml-2 mt-auto mb-auto rounded-full"
                  : ""
              }${
                props.status !== "running"
                  ? "bg-[#555555] w-2 h-2 ml-2 mt-auto mb-auto rounded-full"
                  : ""
              }`}
            ></div>
          </div>
        </div>
        <div className=" basis-1/12 py-2">
          <DeleteTargetModal onClick={() => props.deleteItem(props.id)} />
          <Switch
            checked={isenabled}
            onCheckedChange={updateTargetHandler}
            className=" bg-red-500"
          />
        </div>
      </div>
    </motion.li>
  );
}

export default StreamTargetItem;
