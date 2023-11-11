import Image from "next/image";
import React from "react";

const ServiceHomeSection = () => {
  return (
    <section>
      <div className="grid md:grid-cols-12 grid-cols-6 bg-gray-100 items-center md:py-10 py-5 md:px-0 px-5">
        <h2 className="md:col-start-2 md:col-span-4 col-start-1 col-span-6 font-montserrat text-2xl font-semibold">
          Empowering Your Financial Success:{" "}
          <span className="text-my-green"> Expertise Beyond Boundaries</span>
        </h2>
        <p className="md:col-start-7 md:col-span-4 col-start-1 col-span-6 text-gray-400 font-nunito md:mt-0 mt-2">
          Experience financial empowerment without limits. Join us at SDS, where
          expertise knows no boundaries, and success becomes a shared story.
        </p>
      </div>
      <div className="grid md:grid-cols-12 grid-cols-6">
        <div className="mdcol-start-1 md:col-span-5 col-span-6">
          <Image
            src="/images/service-section-home.png"
            width={650}
            height={483}
            alt="service-section-home"
          />
        </div>
        <div className="md:col-start-6 md:col-span-7 col-start-1 col-span-6 grid grid-cols-2">
          <div className="border border-gray-200 relative flex flex-col justify-center p-5">
            <div className="md:pl-10 pl-0">
              <h4 className="font-semibold font-montserrat text-gray-200">
                Tax
              </h4>
              <p className="font-semibold font-nunito text-xl max-w-small text-my-black">
                Unlock Financial Success with Our Expert{" "}
                <span className="text-my-green"> Tax</span> Services
              </p>
            </div>
            <button className="md:block hidden absolute bottom-5 end-5 px-4 py-2 text-my-green border font-semibold border-my-green rounded-md hover:bg-my-green hover:text-white transition-all">
              Learn More
            </button>
          </div>
          <div className="border border-gray-200 relative flex flex-col justify-center p-5">
            <div className="md:pl-10 pl-0">
              <h4 className="font-semibold font-montserrat text-gray-200">
                Feasibility
              </h4>
              <p className="font-semibold font-nunito text-xl max-w-small text-my-black">
                Empowering Your Vision: Expert
                <span className="text-my-green"> Feasibility</span> Services at
                SDS
              </p>
            </div>
            <button className="md:block hidden absolute bottom-5 end-5 px-4 py-2 text-my-green border font-semibold border-my-green rounded-md hover:bg-my-green hover:text-white transition-all">
              Learn More
            </button>
          </div>
          <div className="border border-gray-200 relative flex flex-col justify-center p-5">
            <div className="md:pl-10 pl-0">
              <h4 className="font-semibold font-montserrat text-gray-200">
                Accounting
              </h4>
              <p className="font-semibold font-nunito text-xl max-w-small text-my-black">
                Precision
                Accounting Solutions
                Financial for Your
              </p>
            </div>
            <button className="md:block hidden absolute bottom-5 end-5 px-4 py-2 text-my-green border font-semibold border-my-green rounded-md hover:bg-my-green hover:text-white transition-all">
              Learn More
            </button>
          </div>
          <div className="border border-gray-200 relative flex flex-col justify-center p-5">
            <div className="md:pl-10 pl-0">
              <h4 className="font-semibold font-montserrat text-gray-200">
                Financial
              </h4>
              <p className="font-semibold font-nunito text-xl max-w-small text-my-black">
                Elevate Your Financial
                <span className="text-my-green"> Financial</span> Journey with
                US
              </p>
            </div>
            <button className="md:block hidden absolute bottom-5 end-5 px-4 py-2 text-my-green border font-semibold border-my-green rounded-md hover:bg-my-green hover:text-white transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHomeSection;
