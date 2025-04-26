import React from "react";
import { motion } from "framer-motion";

const StatCard = ({ title, value, icon, color, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative p-6 rounded-2xl shadow-md bg-white border-l-8 ${color} group hover:shadow-xl transition-all duration-300`}
    >
      {/* Glow Overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-0" />

      <div className="flex items-center justify-between relative z-10">
        {/* Icon Bubble */}
        <div
          className={`text-2xl w-12 h-12 rounded-full flex items-center justify-center shadow-md ${color.replace(
            "border-",
            "bg-"
          )} text-white`}
        >
          {icon}
        </div>

        <div className="text-right">
          <h3 className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
            {title}
          </h3>
          <p className="text-2xl font-bold text-gray-800 leading-tight">
            {value}
          </p>
        </div>
      </div>

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-sm text-gray-500 relative z-10"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default StatCard;
