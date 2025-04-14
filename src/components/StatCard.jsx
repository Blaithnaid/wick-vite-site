import React from "react";

const StatCard = ({ title, value, icon, color, description }) => (
  <div
    className={`p-10 rounded-2xl shadow-2xl bg-white flex flex-col items-start gap-6 border-l-8 ${color} transition-transform transform hover:scale-105 hover:shadow-3xl`}
  >
    <div className="flex items-center gap-8">
      <div className="text-6xl">{icon}</div>
      <div>
        <h3 className="text-lg text-gray-600 uppercase tracking-wide font-semibold">
          {title}
        </h3>
        <p className="text-4xl font-semibold text-gray-800">{value}</p>
      </div>
    </div>
    {description && (
      <p className="text-sm text-gray-500 mt-2">{description}</p>
    )}
  </div>
);

export default StatCard;
