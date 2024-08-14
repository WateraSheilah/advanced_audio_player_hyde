import * as React from "react";
import { motion } from "framer-motion";

const NavigationButton = React.forwardRef(
  ({ className, onClick, withIcon = false, title, icon, isEnabled }, ref) => {
    return (
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
        className={` ${
          isEnabled &&
          "text-sm bg-[#1F2229] h-[28px] px-2 border border-transparent border-t-[0.5px] border-r-[0.5px] border-b-[0.5px] border-l-[#ff8a6740] hover:border-l-[#FF8B67] border-t-[#ffffff13] border-r-[#ffffff13] border-b-[#ffffff13] text-white rounded"
        } ${className}`}
        size="sm"
        variant="outlined"
        color="warning"
        onClick={onClick}
      >
        {withIcon && (
          <div className="flex justify-between w-auto">
            <div className="w-[22px] h-[22pxs] text-[#FF8B67] mt-auto mb-auto mr-2">
              {icon}
            </div>
            <h3 className=" text-center mt-auto mb-auto">{title}</h3>
          </div>
        )}
        {!withIcon && <h1>{title}</h1>}
      </motion.button>
    );
  }
);

NavigationButton.displayName = "NavigationButton";

export default NavigationButton;
