import {
  ComputerDesktopIcon,
  TvIcon,
  VideoCameraIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
// import { Divider } from "@mui/joy";
import Link from "next/link";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

function HomeComponent() {
  return (
    <div className=" w-[620px] h-[750px] max-h-[85vh] ml-4">
      <h1 className=" text-white text-2xl mb-8">
        Select your input source to proceed
      </h1>
      <div className=" border-[0.5px] border-[#ffffff29] pt-6 pb-6 rounded ">
        <motion.div
          whileHover={{ scale: 1.05, cursor: "pointer" }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 800,
            duration: 0.5,
            damping: 40,
          }}
          className="w-[505px] h-[222px] bg-[#1D2027] hover:bg-[#ffffff0e] active:bg-[#ffffff05] ml-auto mr-auto border-[3px] border-transparent border-t-[1px] border-r-[1px] border-b-[1px] border-t-[#ffffff1f] border-r-[#ffffff1f] border-b-[#ffffff1f] border-l-[#FF8B67] rounded"
        >
          <Link
            href=""
            className=" flex justify-start mt-auto mb-auto w-[505px] h-[222px]"
          >
            <VideoCameraIcon className=" w-[80px] ml-4 mr-4 text-[#FFE5B2] mt-auto mb-auto" />
            {/* <Divider orientation="vertical" /> */}
            
            <h1 className=" mt-auto mb-auto ml-4 text-white">
              Stream With Camera
            </h1>
          </Link>
        </motion.div>
        {/* <Divider  */}
        <Separator className=" mt-10 mb-10 w-[610px] ml-1" />
        <motion.div
          whileHover={{ scale: 1.05, cursor: "pointer" }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 800,
            duration: 0.5,
            damping: 40,
          }}
          className="w-[505px] h-[222px] bg-[#1D2027] hover:bg-[#ffffff0e] active:bg-[#ffffff05] ml-auto mr-auto border-[3px] border-transparent border-t-[1px] border-r-[1px] border-b-[1px] border-t-[#ffffff1f] border-r-[#ffffff1f] border-b-[#ffffff1f] border-l-[#FF8B67] rounded"
        >
          <Link
            href="/streaming"
            className=" flex justify-start mt-auto mb-auto w-[505px] h-[222px]"
          >
            <ComputerDesktopIcon className=" w-[80px] ml-4 mr-4 text-[#FFE5B2] mt-auto mb-auto" />
            {/* <Divider orientation="vertical" /> */}
            <h1 className=" mt-auto mb-auto ml-4 text-white">
            Stream With software
            </h1>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default HomeComponent;
