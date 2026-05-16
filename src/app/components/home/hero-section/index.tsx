import { getImgPath } from "@/utils/image";
import Image from "next/image";

const index = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-6 lg:pt-36 lg:pb-8">
      
      {/* BACKGROUND */}
      <div className="absolute -left-32 bottom-0 h-[320px] w-[850px] rounded-full bg-pink-200/40 blur-3xl"></div>

      <div className="absolute right-0 top-20 h-[350px] w-[350px] rounded-full bg-pink-100/60 blur-3xl"></div>

      {/* DOTS */}
      <div className="absolute right-[430px] top-24 hidden lg:grid grid-cols-5 gap-4 opacity-70">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="h-2.5 w-2.5 rounded-full bg-pink-400"
          ></div>
        ))}
      </div>

      {/* CIRCLE */}
      <div className="absolute right-[220px] top-48 hidden h-[220px] w-[220px] rounded-full border-[20px] border-pink-200 lg:block"></div>

      <div className="container relative z-10 mx-auto px-6 lg:px-10">
        
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
          {/* LEFT */}
          <div className="max-w-3xl">
            
            {/* BADGE */}
            <div className="mb-6 inline-flex items-center rounded-full border border-pink-200 bg-pink-50 px-5 py-3 text-sm font-semibold text-pink-500 shadow-sm md:text-base">
              Mathematics Graduate • Data Enthusiast
            </div>

            {/* TITLE */}
            <div className="space-y-2">
              
              <div className="flex flex-wrap items-center gap-4">
                <h1 className="text-6xl font-extrabold tracking-tight text-black md:text-7xl xl:text-8xl">
                  I'm Fara
                </h1>

                <span className="text-5xl md:text-6xl xl:text-7xl">
                  👋
                </span>
              </div>

              <h1 className="text-6xl font-extrabold tracking-tight text-black md:text-7xl xl:text-8xl">
                Data Analyst
              </h1>

              <div className="mt-7 h-1.5 w-24 rounded-full bg-pink-500"></div>
            </div>

            {/* DESC */}
            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl md:leading-9">
              Fresh Graduate in Mathematics with a passion for data analysis.
              Skilled in SQL, Python, and Excel, and experienced in turning raw
              data into meaningful insights to support decision making.
            </p>

            {/* BUTTON */}
            <div className="mt-10 flex flex-wrap gap-4">
              
              <a
                href="#projects"
                className="rounded-full bg-pink-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-pink-200 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-600 hover:shadow-xl"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mx-auto w-full max-w-[420px] lg:max-w-[520px]">
            
            {/* GLOW */}
            <div className="absolute -inset-5 rounded-[2.5rem] bg-pink-200/50 blur-2xl"></div>

            {/* CARD */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-pink-100 bg-white p-4 shadow-2xl">
              
              <Image
                src={getImgPath("/images/home/banner/banner-img.jpeg")}
                alt="banner-img"
                width={520}
                height={620}
                priority
                className="h-auto w-full rounded-[2rem] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;