"use client";

import * as React from "react";

interface StatCardProps {
  title: string;
  value: number;
}

const data =  {
  devices: 20,
  scheduled: 15,
  active: 2,
};

export const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
  return (
    <article className="flex flex-col items-start justify-between px-6 py-6 bg-white rounded-2xl shadow-sm h-[132px] w-[274px]">
      <h2 className="text-l">{title}</h2>
      <p className="text-4xl font-semibold text-black">{value}</p>
    </article>
  );
};

export function DeviceStats() {
  return (
    <section className="flex justify-between w-full">
      <div className="flex gap-6 max-md:flex-wrap max-sm:flex-col">
        <StatCard title="Devices" value={data?.devices ?? 0} />
        <StatCard title="Scheduled" value={data?.scheduled ?? 0} />
        <StatCard title="Active" value={data?.active ?? 0} />
      </div>
    </section>
  );
}