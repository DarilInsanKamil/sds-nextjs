import Image from "next/image";
import React from "react";

const HerosSectionHome = () => {
  return (
    <section className="py-10 mt-20 px-5">
      <div className="grid md:grid-cols-12 grid-cols-6 items-center">
      <div className="md:col-start-7 md:col-span-5 col-start-1 col-span-6 md:hidden block">
          <Image
            src="/images/image-hero-home.png"
            width={600}
            height={300}
            alt="Hero-image-home"
            draggable="false"
          />
        </div>
        <div className="col-start-1 md:col-start-2 md:col-span-4 col-span-6 flex flex-col gap-5">
          <h1 className="md:text-very-big text-6xl text-my-black font-bold leading-hero tracking-tight">
            Let's make it <span className="text-my-green">Happen</span>
          </h1>
          <p className="md:mt-4 text-gray-400 font-nunito">
            Welcome to SDS, where financial empowerment meets expert guidance.
            In the dynamic world of finance, we understand that every journey is
            unique.
          </p>
          <button className="px-4 py-2 w-fit text-my-green border font-semibold border-my-green rounded-md hover:bg-my-green hover:text-white">
            Let's Talk
          </button>
        </div>
        <div className="md:col-start-7 md:col-span-5 col-start-1 col-span-6 md:block hidden">
          <Image
            src="/images/image-hero-home.png"
            width={600}
            height={300}
            alt="Hero-image-home"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};

export default HerosSectionHome;
