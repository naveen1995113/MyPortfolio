import { ISkill } from "../types";
import { motion } from "framer-motion";

const StatusBar: React.FC<ISkill> = ({ Icon, name, level }) => {
  const bar_width = `${level}%`;
  const variants = {
    initialState: { width: 0 },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };
  return (
    <div className="my-4 text-white bg-gray-400 rounded-full dark:bg-gray-700">
      <motion.div
        className="flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-cblue to-clight"
        style={{ width: `${level}%` }}
        variants={variants}
        initial="initialState"
        animate="animate"
      >
        <Icon />
        {name}
      </motion.div>
    </div>
  );
};
export default StatusBar;
