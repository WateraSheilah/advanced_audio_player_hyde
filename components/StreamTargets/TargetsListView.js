import styles from "./TargetListItem.module.css";
import { motion } from "framer-motion";
import StreamTargetItem from "./TargestListItem";
import { Separator } from "@/components/ui/separator";
import AddTargetModal from "../Modals/AddTargetModal";

function StreamTargetListView(props) {
  return (
    <div
      className={`py-2 mx-10 px-5 w-[576px] h-[650px] container border border-[#30333A] bg-[#191C24] rounded`}
    >
      <div className="flex justify-between">
        <h1 className=" mt-[0.39rem] mb-auto">Broadcast Destinations</h1>
        <div className="flex justify-end w-[185px]">
          <AddTargetModal onSubmit={props.addTarget} />
        </div>
      </div>
      <Separator orientation="horizontal" className=" mt-4 mb-4" />
      <ul className=" text-white flex justify-between">
        <li className=" h-2 text-white">{props.people.length} of 7</li>
        <ul className=" flex justify-between w-[140px]">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 800,
              duration: 0.5,
              damping: 50,
            }}
            className=" text-white hover:text-[#FF8B67]"
            onClick={props.disableAll}
          >
            Stop all
          </motion.button>
          <Separator orientation="vertical" />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 800,
              duration: 0.5,
              damping: 50,
            }}
            className=" text-white hover:text-[#FF8B67]"
            onClick={props.enableAll}
          >
            Start all
          </motion.button>
        </ul>
      </ul>
      <div className={` overflow-auto h-[500px] mt-1 pr-1 ${styles.scbars}`}>
        <motion.ul
          variants={{
            hidden: {
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
            visible: {
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.05,
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {props.people.map((person) => (
            <StreamTargetItem
              deleteItem={props.deleteItem}
              updateItem={props.updateItem}
              key={person._id ?? `${Math.random()}`}
              id={person._id}
              image={person.image}
              title={person.title}
              description={person._id}
              disabled={person.disabled}
              status={person.status}
            />
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

export default StreamTargetListView;
