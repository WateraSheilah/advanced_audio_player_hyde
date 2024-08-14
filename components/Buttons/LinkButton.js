import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { motion } from "framer-motion";

function LinkButton(props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 800,
        duration: 0.5,
        damping: 50,
      }}
      className=" mb-4 px-6 w-[110px]"
    >
      {props.isBack ? (
        <Link
          href={props.href}
          title={props.title}
          className=" flex hover:text-[#6fb9c9]"
        >
          <ArrowLeftIcon className=" w-[24px]" />
          <h3 className=" ml-1">Back</h3>
        </Link>
      ) : (
        <Link
          href={props.href}
          title={props.title}
          className=" flex hover:text-[#6fb9c9]"
        >
          {/* <ArrowLeftIcon className=" w-[24px]" /> */}
          <h3 className=" ml-1">{props.title}</h3>
        </Link>
      )}
    </motion.div>
  );
}

export default LinkButton;
