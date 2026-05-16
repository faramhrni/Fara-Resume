"use client";

import Logo from "../logo";

const Header = () => {
  return (
<header className="absolute top-0 left-0 z-[999] w-full">
  <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 pt-8 lg:px-10">

    <Logo />

    <a
      href="/file/resume.pdf"
      download
      className="group flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-pink-500 backdrop-blur-xl transition-all duration-300 hover:bg-pink-500 hover:text-white"
    >
      Download CV

      <span className="transition-transform duration-300 group-hover:translate-y-1">
        ↓
      </span>
    </a>
  </div>
</header>
  );
};

export default Header;