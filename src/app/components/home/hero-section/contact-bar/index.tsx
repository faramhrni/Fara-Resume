"use client";

import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type ContactItem = {
  icon?: string;
  label?: string;
  link?: string;
  type?: string;
};

type SocialItem = {
  icon?: string;
  platform?: string;
  link?: string;
};

type ContactBarData = {
  contactItems?: ContactItem[];
  socialItems?: SocialItem[];
};

const ContactBar = () => {
  const [contactBarData, setContactBarData] =
    useState<ContactBarData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));

        if (!res.ok) {
          throw new Error("Failed to fetch contact bar data");
        }

        const data = await res.json();
        setContactBarData(data?.contactBar || null);
      } catch (error) {
        console.error("Error fetching contact bar:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="relative z-20 -mt-6">
      <div className="border-y border-pink-100 bg-gradient-to-r from-white via-pink-50/70 to-white shadow-sm">
        
        <div className="container mx-auto px-6 lg:px-10">
          
          {/* INI YANG UDAH DIPENDEKIN */}
          <div className="flex flex-col items-center justify-between gap-4 py-4 lg:flex-row lg:py-5">

            {/* CONTACT */}
            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              
              {contactBarData?.contactItems?.map((value, index) => {
                if (!value?.icon) return null;

                const isExternal =
                  value?.type === "website" ||
                  value?.link?.startsWith("http");

                return (
                  <Link
                    key={`${value?.label || "contact"}-${index}`}
                    href={value?.link || "#"}
                    target={isExternal ? "_blank" : undefined}
                    rel={
                      isExternal
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-3 rounded-full border border-pink-200 bg-white/80 px-5 py-2.5 text-sm md:text-base font-medium text-gray-700 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-pink-400 hover:bg-white hover:shadow-lg"
                  >
                    
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 transition duration-300 group-hover:bg-pink-500">
                      
                      <Image
                        src={getImgPath(value.icon)}
                        alt={
                          value?.label ||
                          value?.type ||
                          "contact-icon"
                        }
                        width={20}
                        height={20}
                        className="transition duration-300 group-hover:scale-110"
                      />
                    </div>

                    {value?.label && (
                      <span className="transition duration-300 group-hover:text-pink-500">
                        {value.label}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* SOCIAL */}
            <div className="flex items-center justify-center gap-3">
              
              {contactBarData?.socialItems?.map((value, index) => {
                if (!value?.icon) return null;

                return (
                  <Link
                    key={`${value?.platform || "social"}-${index}`}
                    href={value?.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={value?.platform || "social"}
                    className="group flex h-12 w-12 items-center justify-center rounded-full border border-pink-200 bg-white/80 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-pink-400 hover:bg-pink-500 hover:shadow-lg"
                  >
                    
                    <Image
                      src={getImgPath(value.icon)}
                      alt={
                        value?.platform || "social-icon"
                      }
                      width={22}
                      height={22}
                      className="transition duration-300 group-hover:scale-110"
                    />
                  </Link>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBar;