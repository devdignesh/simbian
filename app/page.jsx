"use client";
import { AlertMessage } from "@/components/alert-message";
import DynamicAlertCard from "@/components/dynamic-animated-card";
import {
  alertCardData,
  alertMessages,
  withSimbianAlertMessages,
} from "@/utils/data";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/header";
import { useEffect, useState } from "react";
import StepsFlow from "@/components/steps-flow";

export default function Home() {
  const [isWithoutSimbian, setIsWithoutSimbian] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsWithoutSimbian(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="relative min-h-screen px-4">
        <Image
          src="/images/bg-home.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div
          className={`absolute inset-0 ${
            isWithoutSimbian ? "bg-black/80" : "bg-blue-800/20"
          } transition-colors duration-800`}
        ></div>
        <div className="relative w-full max-w-7xl mx-auto  pt-40 max-lg:pt-32 h-full">

          {/* Header (title, subtitle) for both Simbian and Without Simbian */}
          <Header isWithoutSimbian={isWithoutSimbian} />

          {/* Steps flow cards only visible in with Simbian */}
          {!isWithoutSimbian && <StepsFlow />}
          <div
            className={`relative w-full max-w-6xl  flex flex-col md:flex-col lg:flex-row justify-between pt-20 ${
              isWithoutSimbian ? "lg:pt-40" : "lg:pt-10"
            } pb-20 h-full px-4 lg:px-8`}
          >
            <AnimatePresence>
              {isWithoutSimbian && (
                <motion.div
                  className="flex flex-col justify-end gap-y-4 order-2 max-lg:mt-10 max-w-xl"
                  initial={{ y: 0, opacity: 1 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {alertMessages.map((alert) => (
                    <AlertMessage
                      key={alert.id}
                      icon={alert.icon}
                      text={alert.text}
                      isWithoutSimbian={isWithoutSimbian}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div
              className="flex flex-col justify-between items-end order-1 lg:order-2"
              layout
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="flex flex-col w-full gap-y-6 ">

                {/* Ignored Alerts, Wrongly Closed and Active Threats cards*/}
                {alertCardData.map((item, index) => (
                  <DynamicAlertCard
                    key={index}
                    isWithoutSimbian={isWithoutSimbian}
                    item={item}
                  />
                ))}

                 
              </div>
            </motion.div>
            <AnimatePresence>
              {!isWithoutSimbian && (
                <motion.div
                  className="flex flex-col justify-end gap-y-4 order-2 max-lg:mt-10 max-w-[450px]"
                  initial={{ y: 0, opacity: 1 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {withSimbianAlertMessages.map((alert) => (
                    <AlertMessage
                      key={alert.id}
                      icon={alert.icon}
                      text={alert.text}
                      title={alert.title}
                      isWithoutSimbian={isWithoutSimbian}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
