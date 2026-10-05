"use client";

import LoginButton from "./LoginButton";

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="mx-auto max-w-[1400px] flex items-center justify-between px-4 py-2">
        <div className="flex items-center pr-2">
          <img
            className="w-32 h-auto object-contain"
            width={120}
            height={70}
            src="https://t3.ftcdn.net/jpg/06/51/31/80/360_F_651318037_0ADWc1ONXuIPbohDLBlMIbfgdlozk45E.jpg"
            alt="logo"
          />

          <h1 className="text-4xl -ml-3">Tayo</h1>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/safety">Safety</a>
          <a href="/help">Help</a>
        </div>
        <a href="/login">
          <LoginButton />
        </a>
      </nav>
      ;
    </header>
  );
};

export default Navbar;
