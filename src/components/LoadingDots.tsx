import { motion } from "framer-motion";

const dotStyle = [
  "h-3 w-3 bg-sky-300 rounded-4xl",
  "h-3 w-3 bg-sky-500 rounded-4xl",
  "h-3 w-3 bg-blue-700 rounded-4xl",
  "h-3 w-3 bg-secundaria rounded-4xl",
];

export function LoadingDots() {
  return (
    <div className="flex mt-20 items-center justify-center gap-3">
      {dotStyle.map((style, i) => (
        <motion.span
          key={i}
          className={style}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1,
          }}
        />
      ))}
    </div>
  );
}
