import Image from "next/image";
import React from "react";

const PartnerSectionHome = () => {
  return (
    <section className="py-10 px-5 bg-gray-100">
      <div className="text-center">
        <h3 className="font-montserrat text-2xl font-semibold">Has been trusted by</h3>
      </div>
      <div className="flex md:gap-10 gap-5 flex-wrap items-center justify-center mt-5 ">
        <Image
          src={"/images/google.png"}
          width={160}
          height={70}
          alt="partner-1"
        />
        <Image src={"/images/xl.png"} width={160} height={70} alt="partner-2" />
        <Image src={"/images/al.png"} width={160} height={70} alt="partner-3" />
        <Image
          src={"/images/lenovo.png"}
          width={160}
          height={70}
          alt="partner-4"
        />
        <Image
          src={"/images/indosat.png"}
          width={160}
          height={70}
          alt="partner-5"
        />
      </div>
    </section>
  );
};

export default PartnerSectionHome;
