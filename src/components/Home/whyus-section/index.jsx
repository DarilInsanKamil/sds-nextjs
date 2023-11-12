import Image from "next/image";
import React from "react";

const WhyUsSectionHome = () => {
  return (
    <section className="p-5 md:p-0">
      <div className="grid md:grid-cols-12 grid-cols-6 items-center">
      <div className="md:col-start-7 col-start-1 col-span-6 md:hidden block md:mb-0 mb-3">
          <Image
            src={"/images/whyus-home.png"}
            width={770}
            height={384}
            alt="whyus"
            className="float-left"
          />
        </div>
        <div className=" col-start-1 col-span-6 md:pl-10">
          <h3 className="font-semibold text-my-black text-3xl">
            The Hundred of Completed works Still Counting in Any Industries
          </h3>
          <p className="text-gray-400 font-nunito my-3">
            Welcome to SDS, where success isn't just a goal; it's a track
            record. With a proud legacy of completing countless successful
            projects spanning various industries, we stand as a testament to
            expertise, reliability, and a commitment to excellence.
          </p>
          <div className="flex md:flex-row flex-col md:gap-10 gap-5">
            <div>
              <div className="flex gap-4 items-center">
                <Image
                  src="/icons/service.svg"
                  width={46}
                  height={46}
                  alt="icon-service"
                />
                <div className="text-2xl">
                  <h4>20+</h4>
                  <h4>Services</h4>
                </div>
              </div>
              <div className="flex gap-4 items-center mt-4">
                <Image
                  src="/icons/mining.svg"
                  width={46}
                  height={46}
                  alt="icon-service"
                />
                <div className="text-2xl">
                  <h4>20+ </h4>
                  <h4>Mining & Energy</h4>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-4 items-center">
                <Image
                  src="/icons/tech.svg"
                  width={46}
                  height={46}
                  alt="icon-service"
                />
                <div className="text-2xl">
                  <h4>20+</h4>
                  <h4>Technology</h4>
                </div>
              </div>
              <div className="flex gap-4 items-center mt-4">
                <Image
                  src="/icons/exp.svg"
                  width={46}
                  height={46}
                  alt="icon-service"
                />
                <div className="text-2xl">
                  <h4>15+</h4>
                  <h4>Experience</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-start-7 col-start-1 col-span-6 hidden md:block">
          <Image
            src={"/images/whyus-home.png"}
            width={770}
            height={384}
            alt="whyus"
            className="float-left"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUsSectionHome;
