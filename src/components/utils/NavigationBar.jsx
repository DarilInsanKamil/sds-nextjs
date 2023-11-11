import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavigationBar = () => {
  return (
    <nav className="flex items-center justify-between md:px-10 px-5 py-3 fixed bg-white w-full z-10 top-0">
      <div className="flex gap-2 items-center">
        <Image src="/icons/logo.svg" width={33} height={34} />
        <h1 className="font-bold font-montserrat md:text-xl text-base">
          Sarana Dwi Sejahtera
        </h1>
      </div>
      <ul className="md:flex hidden gap-10 items-center ">
        <li className="hover:underline hover:underline-my-green hover:underline-offset-12 cursor-pointer hover:text-my-green">
          <Link href="/"> Home</Link>
        </li>
        <li className="hover:underline hover:underline-my-green hover:underline-offset-12 cursor-pointer hover:text-my-green">
          <Link href="/service">Service</Link>
        </li>
        <li className="hover:underline hover:underline-my-green hover:underline-offset-12 cursor-pointer hover:text-my-green">
          Career
        </li>
        <li className="hover:underline hover:underline-my-green hover:underline-offset-12 cursor-pointer hover:text-my-green">
          Contact
        </li>
        <li className="hover:underline hover:underline-my-green hover:underline-offset-12 cursor-pointer hover:text-my-green">
          About
        </li>
      </ul>
      <button className="px-4 py-2 bg-my-green border rounded-full text-white hover:bg-my-hover-green transition-all font-semibold">
        Login
      </button>
    </nav>
  );
};

export default NavigationBar;
