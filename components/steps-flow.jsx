import { motion } from "framer-motion";
 
import { CheckCircle, Zap, Brain, ShieldCheck, Clock } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { stepsData } from "@/utils/data";
import CardLayout from "./card-layout";

// Icon mapping
const iconMap = {
  CheckCircle,
  Zap,
  Brain,
  ShieldCheck,
  Clock,
};

// Reusable Icon component
const IconComponent = ({ iconName, size = 24, className = "" }) => {
  const Icon = iconMap[iconName];
  return Icon ? <Icon size={size} className={className} /> : null;
};

export default function StepsFlow() {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 flex-wrap w-full mt-10 px-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {stepsData.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <motion.div variants={cardVariants}>
            <div className="px-2 py-3 rounded-xl border border-gray-100/10 bg-green-800/35 w-[220px] sm:w-[250px]  ">
              <div className="flex flex-col items-center text-center">
                <IconComponent
                  iconName={step.icon}
                  size={32}
                  className="text-green-500 mb-2"
                />
                <h3 className="text-base font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-white/80 mt-1">{step.subtitle}</p>
              </div>
            </div>
          </motion.div>
          {index < stepsData.length - 1 && (
            <div className="hidden sm:block w-8 h-1 bg-green-500/50 relative">
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-green-500 border-y-4 border-y-transparent" />
            </div>
          )}
        </div>
      ))}
    </motion.div>
  );
}