import React from "react";
import { motion } from "framer-motion";
import { Sparklines, SparklinesLine } from "react-sparklines";

const StatCard = ({ title, value, icon, color, description, trendData = [] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative p-8 rounded-2xl shadow-lg bg-white flex flex-col justify-between border-l-8 ${color} group hover:shadow-2xl transition-all duration-300`}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* Top: Icon + Title + Value */}
      <div className="flex items-start justify-between">
        <div className="text-5xl">{icon}</div>
        <div className="text-right">
          <h3 className="text-sm text-gray-500 uppercase tracking-wide font-medium">
            {title}
          </h3>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div>
      </div>

      {/* Sparkline chart */}
      <div className="mt-6">
        {trendData.length > 0 ? (
          <Sparklines data={trendData} limit={10} height={30} width={100} margin={5}>
            <SparklinesLine color="#3b82f6" style={{ fill: "none" }} />
          </Sparklines>
        ) : (
          <div className="h-8 w-full bg-gray-100 rounded-md animate-pulse" />
        )}
      </div>

      {/* Optional description */}
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-sm text-gray-500"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default StatCard;
