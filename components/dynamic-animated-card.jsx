"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldQuestion,
  ShieldX,
  Bug,
  Mail,
  Lock,
  EarthLock,
  CircleX,
  BellOff,
} from "lucide-react";
import CardLayout from "./card-layout";

// Icon mapping
const iconMap = {
  ShieldQuestion: ShieldQuestion,
  ShieldX: ShieldX,
  Bug: Bug,
  Mail: Mail,
  Lock: Lock,
  EarthLock: EarthLock,
  CircleX: CircleX,
  BellOff: BellOff,
};

// Reusable Icon component
const IconComponent = ({ iconName, size = 18, className = "" }) => {
  const Icon = iconMap[iconName];
  return Icon ? <Icon size={size} className={className} /> : null;
};

export default function DynamicAlertCard({ isWithoutSimbian, item = {} }) {
  const {
    id,
    title,
    icon,
    defaultCount = 5,
    timeout = 2500,
    alertIcons = [],
    initialAlerts = [],
  } = item;

  console.log("icon", icon);
  const [count, setCount] = useState(defaultCount);
  const [alerts, setAlerts] = useState(initialAlerts);

  useEffect(() => {
    let interval;
    if (isWithoutSimbian) {
      interval = setInterval(() => {
        setCount((prev) => prev + 1);
        const newAlert =
          alertIcons[Math.floor(Math.random() * alertIcons.length)];
        setAlerts((prev) => [
          { id: Date.now(), icon: newAlert.icon, text: newAlert.text },
          ...prev,
        ]);
      }, timeout);
    } else {
      setTimeout(() => {
        interval = setInterval(() => {
          setCount((prev) => {
            if (prev <= 0) return 0;
            // Faster decrement for high counts (ignored-alerts with 200)
            const decrement = prev > 100 ? Math.ceil(prev / 10) : 1;
            return prev - decrement;
          });
          setAlerts((prev) => (prev.length > 0 ? prev.slice(0, -1) : prev));
        }, 100);
      }, 1100);
    }

    return () => clearInterval(interval);
  }, [isWithoutSimbian, timeout, alertIcons]);

  return (
    <CardLayout
      className={`${
        isWithoutSimbian
          ? id === "active-threats"
            ? "bg-red-300/30"
            : "bg-blue-300/20"
          : ""
      }`}
    >
      <div
        className={`flex justify-between ${
          isWithoutSimbian
            ? id === "active-threats"
              ? "text-red-500"
              : "text-white"
            : "text-white"
        } items-center`}
      >
        <div className="flex gap-2 items-center">
          <IconComponent iconName={icon} size={18} />
          <span className="font-semibold">{title}</span>
        </div>
        <motion.div
          key={count}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: isWithoutSimbian ? 0.7 : 0 }}
        >
          <span
            className={`font-semibold text-2xl ${
              isWithoutSimbian
                ? id === "active-threats"
                  ? "text-red-500"
                  : "text-blue-400"
                : "text-green-400"
            }`}
          >
            {count}
          </span>
        </motion.div>
      </div>
      <div className="bg-red-100/10 rounded-sm mt-2 h-8 flex overflow-hidden">
        <AnimatePresence initial={false}>
          {alerts.map((alert, index) => (
            <motion.div
              key={alert.id}
              initial={{
                x: 50,
                y: -50,
                opacity: 0,
                boxShadow: "0 0 0 rgba(255, 255, 255, 0)",
              }}
              animate={{
                x: index === 0 ? 0 : -8,
                y: 0,
                opacity: 1,
                zIndex: alerts.length - index,
                boxShadow: "3px 0 6px rgba(0,0,0, 0.3)",
              }}
              exit={{ x: -100, y: 0, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className={`bg-white p-1 rounded-sm ${
                index === 0
                  ? "shadow-[3px_0_6px_rgba(0,0,0,0.5)]"
                  : "shadow-[3px_0_6px_rgba(0,0,0,0.3)]"
              } ${index >= 1 ? "-translate-x-2" : ""}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconComponent iconName={alert.icon} size={22} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </CardLayout>
  );
}
