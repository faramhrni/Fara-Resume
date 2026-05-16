"use client";

import React from "react";
import { motion } from "framer-motion";

const ExperienceSec = () => {
  const experiences = [
    {
      year: "2024",
      title: "Bakti Champion",
      company: "BCA Scholarship Program",
      type: "Awardee Project",
      tech: ["HTML", "CSS", "JavaScript"],
      contributions: [
        "Selected as a Bakti Champion awardee under the BCA Scholarship Program",
        "Developed a prototype digital solution for MSME (UMKM) business growth",
        "Designed and built a website for 'Warung Mambo'",
        "Improved product visibility and online presence",
        "Focused on user-friendly UI/UX and digital accessibility",
      ],
    },
    {
      year: "2025",
      title: "Integrated Production Planning & Meteorology",
      company: "PT TIMAH TBK",
      type: "Web-Based Data System",
      tech: ["HTML", "MySQL", "PHP", "JavaScript", "CSS", "Excel"],
      contributions: [
        "Developed a web-based monitoring and analytics system",
        "Handled backend development and database management using MySQL",
        "Performed data processing, cleaning, and validation",
        "Built interactive dashboards for data visualization",
        "Supported trend analysis for reporting and decision-making",
      ],
    },
  ];

  return (
    <section id="experience" className="relative overflow-hidden bg-white pt-0 pb-20">
      <div className="absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-pink-200/50 blur-3xl" />
      <div className="absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-pink-200/60 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex items-center justify-between border-b-2 border-pink-400 pb-6"
        >
          <h2 className="text-5xl font-extrabold text-black md:text-6xl">
            Experience
          </h2>

          <p className="text-3xl font-extrabold text-pink-500">( 02 )</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative overflow-hidden rounded-[32px] border border-pink-200 bg-pink-50/70 p-6 shadow-xl transition-all duration-300 hover:shadow-2xl md:p-10"
            >
              <div className="absolute right-[-70px] top-[-70px] h-[180px] w-[180px] rounded-full bg-pink-200/60 blur-2xl transition-all duration-500 group-hover:scale-125" />

              <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1fr_90px_1fr] lg:gap-12">
                <div>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-4 text-2xl font-extrabold text-pink-500"
                  >
                    {exp.year}
                  </motion.p>

                  <h3 className="mb-4 text-3xl font-extrabold leading-snug text-black">
                    {exp.title}
                  </h3>

                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white px-5 py-2.5 shadow-md">
                    <span className="h-2.5 w-2.5 rounded-full bg-pink-400" />
                    <p className="text-sm font-bold text-gray-700">
                      {exp.company}
                    </p>
                  </div>

                  <p className="mb-6 text-base font-medium text-gray-500">
                    {exp.type}
                  </p>

                  <p className="mb-3 text-base font-extrabold text-black">
                    Tech Stack
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {exp.tech.map((item, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.06 }}
                        whileHover={{ scale: 1.08 }}
                        className="rounded-full border border-pink-300 bg-white px-4 py-2 text-sm font-extrabold text-pink-500 shadow-sm"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="hidden justify-center lg:flex">
                  <div className="relative flex w-full justify-center">
                    <div className="h-full w-[2px] bg-gradient-to-b from-pink-500 via-pink-300 to-transparent" />
                    <motion.div
                      animate={{ y: [0, 14, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute top-0 h-5 w-5 rounded-full bg-pink-500 shadow-lg shadow-pink-300"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="mb-5 text-2xl font-extrabold text-black">
                    Key Contributions
                  </h4>

                  <ul className="space-y-4">
                    {exp.contributions.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.08 }}
                        className="flex items-start gap-3 text-lg leading-relaxed text-gray-700"
                      >
                        <span className="mt-3 h-2.5 min-w-2.5 rounded-full bg-pink-400" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;