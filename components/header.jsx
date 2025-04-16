import { motion, AnimatePresence } from "framer-motion";

export default function Header({ isWithoutSimbian }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={isWithoutSimbian ? "without" : "with"}
        className={`flex flex-col ${isWithoutSimbian ? 'lg:items-end' : ''}`}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {isWithoutSimbian ? (
          <>
            <span className="text-4xl max-md:text-3xl leading-10 font-bold text-white">
              Without Simbian
            </span>
            <span className="text-xl max-md:text-base text-white/90">
              if this sounds all too familiar, you might want to...
            </span>
          </>
        ) : (
          <>
            <span className="text-4xl max-md:text-3xl leading-10 font-bold text-white">
              With Simbian
            </span>
            <span className="text-xl max-md:text-base text-white/90">
              Relax, Our AI Agents will take it from here.
            </span>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}