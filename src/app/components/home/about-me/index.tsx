"use client";

import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { motion } from "framer-motion";
import { Database, FileSpreadsheet, Code2 } from "lucide-react";

const AboutMe = () => {
  const highlights = [
    "Data Cleaning",
    "SQL",
    "Python",
    "Excel",
    "Data Visualization",
    "Problem Solving",
  ];

  const skills = [
    {
      title: "SQL",
      desc: "Database Querying",
      icon: Database,
    },
    {
      title: "Python",
      desc: "Pandas • NumPy",
      icon: Code2,
    },
    {
      title: "Excel",
      desc: "Reporting • Analysis",
      icon: FileSpreadsheet,
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-white py-20">
      <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-pink-200/60 blur-3xl" />
      <div className="absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-pink-200/60 blur-3xl" />

      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex items-center justify-between border-b-2 border-pink-400 pb-6"
        >
          <h2 className="text-5xl font-extrabold text-black md:text-6xl">
            About Me
          </h2>
          <p className="text-3xl font-extrabold text-pink-500">( 01 )</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid w-full items-center gap-10 rounded-[32px] border border-pink-200 bg-pink-50/70 px-8 py-12 shadow-xl lg:grid-cols-[350px_1fr_300px] lg:px-10"
        >
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto w-[300px] md:w-[330px]"
          >
            <div className="absolute -inset-4 rotate-3 rounded-[34px] bg-pink-200/70" />

            <Image
              src={getImgPath("/images/home/about-me/about-banner-img.JPG")}
              alt="about-banner"
              width={330}
              height={460}
              className="relative h-[460px] w-full rounded-[30px] object-cover shadow-2xl"
            />

            <div className="absolute -bottom-8 left-14 rounded-3xl bg-white px-7 py-5 shadow-xl">
              <p className="text-lg font-bold text-pink-500">I am</p>
              <p className="text-3xl font-extrabold leading-tight text-pink-500">
                Fresh Graduate
              </p>
              <p className="mt-1 text-base text-gray-500">Mathematics</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-[650px]"
          >
            <p className="mb-4 text-lg font-extrabold text-pink-500">
              Mathematics Graduate • Data Enthusiast
            </p>

            <h3 className="text-4xl font-extrabold leading-tight text-black md:text-5xl">
              Turning raw data into meaningful insights.
            </h3>

            <div className="my-7 h-1.5 w-28 rounded-full bg-pink-500" />

            <div className="space-y-6 text-2xl font-medium leading-[44px] text-gray-700">
              <p>
                I am a Mathematics fresh graduate with a strong interest in data
                analysis, data visualization, and business insights.
              </p>

              <p>
                Skilled in SQL, Python, and Excel to clean, analyze, and present
                data for better decision-making.
              </p>
            </div>

            <div className="mt-7">
              <p className="mb-4 text-xl font-extrabold text-black">
                Core Strengths
              </p>

              <div className="flex flex-wrap gap-3">
                {highlights.map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ scale: 1.08 }}
                    className="rounded-full border border-pink-300 bg-white px-5 py-2.5 text-sm font-extrabold text-pink-500 shadow-md"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-5"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, x: 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="flex items-center gap-5 rounded-3xl bg-white p-5 shadow-md"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-500">
                    <Icon size={30} strokeWidth={2.5} />
                  </div>

                  <div>
                    <p className="text-2xl font-extrabold text-pink-500">
                      {skill.title}
                    </p>
                    <p className="mt-1 text-base text-gray-500">
                      {skill.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;