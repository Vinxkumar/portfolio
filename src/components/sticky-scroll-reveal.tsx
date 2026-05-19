"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string | React.ReactNode;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const segment = 1 / cardLength;
    const index = Math.min(
      Math.floor(latest / segment),
      cardLength - 1
    );
    setActiveCard(index);
  });

const backgroundColors = [
  "#09090b",  // Portfolio
  "#09090b",  // Blockchain Voting
  "#09090b",  // Hospital CRM
  "#09090b",  // VisionCaption
  "#09090b",  // RuleBased ChatBot
];

const linearGradients = [
  "linear-gradient(to bottom right, #7c3aed, #06b6d4)",  // Portfolio — purple + cyan
  "linear-gradient(to bottom right, #f59e0b, #10b981)",  // Blockchain — amber + emerald
  "linear-gradient(to bottom right, #3b82f6, #06b6d4)",  // Hospital CRM — blue + cyan
  "linear-gradient(to bottom right, #a855f7, #ec4899)",  // VisionCaption — violet + pink
  "linear-gradient(to bottom right, #22c55e, #06b6d4)",  // ChatBot — green + cyan
];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-screen justify-center space-x-10 overflow-y-auto overflow-x-hidden rounded-md p-10"

      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div
              key={index}
              className="h-screen flex flex-col justify-center"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0,
                  y: activeCard === index ? 0 : 20,
                }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0,
                  y: activeCard === index ? 0 : 20,
                }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mt-6 max-w-sm text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{ background: backgroundGradient }}
        className={cn(
         "sticky top-10 hidden h-[60vh] w-[40%] overflow-hidden rounded-2xl lg:flex items-center justify-center",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};