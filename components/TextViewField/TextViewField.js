import { motion } from "framer-motion";
import { CheckCheck, ClipboardCopy } from "lucide-react";
import React, { useEffect, useState } from "react";

const TextViewField = React.forwardRef(({ onClick, title, url }, ref) => {
  const [coppied, setCoppied] = useState(false);

  useEffect(() => {
    const copyTime = setTimeout(() => {
      setCoppied(false);
    }, 2000);
    coppied ? copyTime : "";
    return () => {
      clearTimeout(copyTime);
    };
  }, [coppied]);

  return (
    <div className="flex justify-start mt-4">
      <h1 className=" mt-auto mb-auto border border-transparent border-t-[#ffffff2a] border-r-[#ffffff2a] w-[155px] text-end pt-1 pb-1 pr-2">
        {title}
      </h1>
      <div className="flex justify-start mt-auto mb-auto w-[60%]">
        <h2 className=" bg-[#1F2229] border border-[#3B3E46] rounded py-1 px-2 ml-1 text-[#ffee8eb6] ">
          {url}
        </h2>
        {coppied ? (
          <button className=" ml-2 mt-auto mb-auto flex justify-start w-[100px]">
            <h1 className=" font-thin mr-1 mt-auto mb-auto text-center">
              Coppied
            </h1>{" "}
            <CheckCheck
              className=" text-green-400 mt-[0.8px]"
              height={18}
              width={18}
            />
          </button>
        ) : (
          <motion.button
            ref={ref}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 800,
              duration: 0.5,
              damping: 50,
            }}
            className=" ml-2 mt-auto mb-auto flex justify-start w-[100px]"
            onClick={() =>
              onClick().then(() => {
                setCoppied(true);
              })
            }
          >
            <h1 className=" font-thin mr-1 mt-auto mb-auto text-cente ">
              Coppy
            </h1>
            <ClipboardCopy
              className="mt-[3px]"
              height={18}
              width={18}
              color="white"
            />
          </motion.button>
        )}
      </div>
    </div>
  );
});

TextViewField.displayName = "TextViewField";

export default TextViewField;
