import { motion } from "framer-motion";

export function ScrollMouse({ href = "#one" }) {
  return (
    <a
      href={href}
      className="w-[35px] h-[55px] border-2 border-white rounded-[23px] flex items-start justify-center p-1"
    >
      <motion.span
        className="w-2 h-2 bg-white rounded-full"
        animate={{ y: [0, 40], opacity: [1, 0] }} // desce e some
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
      />
    </a>
  );
}
