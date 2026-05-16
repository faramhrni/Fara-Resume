"use client";

import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";

const EducationSkills = () => {
  const [educationData, setEductionData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setEductionData(data?.educationData);
      } catch (error) {
        console.error("Error fetching education data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section
      id="education"
      className="relative overflow-hidden bg-white pt-6 pb-20"
    >
      {/* background blur */}
      <div className="absolute -left-24 top-12 h-[340px] w-[340px] rounded-full bg-pink-100/60 blur-3xl" />
      <div className="absolute -right-24 bottom-12 h-[380px] w-[380px] rounded-full bg-pink-200/45 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 lg:px-10">
        {/* HEADER */}
        <div className="mb-12 flex items-center justify-between border-b-2 border-pink-400 pb-6">
          <div>
            <h2 className="text-5xl font-extrabold tracking-tight text-black md:text-6xl">
              Education & Skills
            </h2>

            <p className="mt-3 text-lg font-medium text-gray-500">
              Academic journey and technical abilities
            </p>
          </div>

          <p className="text-3xl font-extrabold text-pink-500">( 03 )</p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.25fr]">
          {/* EDUCATION */}
          <div className="flex flex-col gap-6">
            {educationData?.education?.map((value: any, index: number) => (
              <div
                key={index}
                className="group animate-fade-up flex items-start gap-5 rounded-[28px] border border-pink-200 bg-pink-50/80 p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-pink-300 hover:shadow-2xl"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="mt-2 h-4 w-4 rounded-full bg-pink-500 shadow-[0_0_0_8px_rgba(236,72,153,0.12)] transition duration-300 group-hover:scale-125" />

                <div>
                  <h5 className="text-2xl font-extrabold leading-snug text-black">
                    {value?.title}
                  </h5>

                  <p className="mt-3 text-lg leading-relaxed text-gray-600">
                    {value?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* SKILLS */}
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            {educationData?.skills?.map((value: any, index: number) => (
              <div
                key={index}
                className="group animate-fade-up min-h-[190px] rounded-[28px] border border-pink-200 bg-pink-50/80 p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-pink-300 hover:shadow-2xl"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex h-full flex-col items-center justify-between">
                  <div className="flex flex-col items-center gap-5">
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-md transition duration-500 group-hover:rotate-3 group-hover:scale-110">
                      <Image
                        src={getImgPath(value?.icon)}
                        alt={value?.name || "skill"}
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </div>

                    <p className="text-center text-lg font-extrabold text-black">
                      {value?.name}
                    </p>
                  </div>

                  <div className="mt-5 flex gap-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-3 w-3 rounded-full transition-all duration-300 ${
                          i < value?.rating
                            ? "bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.45)]"
                            : "bg-pink-100"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          opacity: 0;
          animation: fadeUp 0.7s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default EducationSkills;