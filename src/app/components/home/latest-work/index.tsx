"use client";

import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LatestWork = () => {
  const [workData, setWorkData] = useState<any[]>([]);
  const [selectedWork, setSelectedWork] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/work-data.json"));
        const data = await res.json();
        setWorkData(data?.workData || []);
      } catch (error) {
        console.error("Error fetching works:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="works" className="relative overflow-hidden bg-white pt-6 pb-20">
      <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-pink-200/50 blur-3xl" />
      <div className="absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-pink-200/60 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex items-center justify-between border-b-2 border-pink-400 pb-6"
        >
          <div>
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[3px] text-pink-500">
              Portfolio
            </p>

            <h2 className="text-5xl font-extrabold text-black md:text-6xl">
              Latest Works
            </h2>
          </div>

          <p className="text-3xl font-extrabold text-pink-500">
            ( 04 )
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {workData.map((value: any, index: number) => (
            <motion.button
              key={index}
              type="button"
              onClick={() => setSelectedWork(value)}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group overflow-hidden rounded-[32px] border border-pink-200 bg-pink-50/70 text-left shadow-xl transition-all duration-500 hover:shadow-2xl"
            >
              <div className="relative h-[300px] w-full overflow-hidden bg-pink-100">
                <Image
                  src={getImgPath(value?.image)}
                  alt={value?.title || "project image"}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-500 shadow-lg shadow-pink-300">
                    <span className="text-3xl text-white">↗</span>
                  </div>
                </div>
              </div>

              <div className="p-7">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="text-sm font-extrabold uppercase tracking-[2px] text-pink-500">
                    {value?.client}
                  </p>

                  <p className="rounded-full bg-white px-4 py-2 text-sm font-bold text-gray-500 shadow-sm transition group-hover:text-pink-500">
                    Preview
                  </p>
                </div>

                <h3 className="text-2xl font-extrabold leading-snug text-black transition-colors group-hover:text-pink-500">
                  {value?.title}
                </h3>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[32px] bg-white shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedWork(null)}
                className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-3xl text-white transition hover:bg-pink-500"
              >
                ×
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="flex items-center justify-center bg-pink-50 p-5 md:p-8">
                  <div className="relative h-[360px] w-full overflow-hidden rounded-[26px] bg-white shadow-inner md:h-[620px]">
                    <Image
                      src={getImgPath(selectedWork?.image)}
                      alt={selectedWork?.title || "project preview"}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center p-7 md:p-10">
                  <p className="mb-3 text-sm font-extrabold uppercase tracking-[2px] text-pink-500">
                    {selectedWork?.client}
                  </p>

                  <h3 className="mb-5 text-3xl font-extrabold leading-tight text-black md:text-4xl">
                    {selectedWork?.title}
                  </h3>

                  <p className="mb-7 text-lg leading-relaxed text-gray-600">
                    {selectedWork?.description ||
                      "Project ini menampilkan visualisasi data yang dirancang untuk membantu pengguna memahami informasi utama secara cepat, rapi, dan interaktif."}
                  </p>

                  <Link
                    href={selectedWork?.link || "#"}
                    target="_blank"
                    className="mb-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-pink-500 py-5 font-extrabold text-white transition hover:bg-pink-600"
                  >
                    <span className="text-xl">↗</span>
                    Open Project
                  </Link>

                  <div>
                    <p className="mb-4 text-sm font-extrabold uppercase tracking-[2px] text-pink-500">
                      Skill yang Digunakan
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {selectedWork?.skills?.map(
                        (skill: string, index: number) => (
                          <span
                            key={index}
                            className="rounded-xl border border-pink-200 bg-pink-50 px-4 py-3 text-sm font-bold text-gray-700 shadow-sm"
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LatestWork;