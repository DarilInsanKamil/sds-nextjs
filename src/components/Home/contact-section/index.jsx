import React from "react";

const ContactSectionHome = () => {
  return (
    <section className="bg-contact-home bg-no-repeat bg-cover bg-center p-10 text-white text-center w-full">
      <div>
        <h3 className="font-montserrat text-2xl">Contact US to Secure your Management Services Needs</h3>
        <p className="font-nunito text-gray-400 my-3">
          Let’s collaborate and make an impact with our approach to manages.
        </p>
        <button className="px-4 py-2 w-fit bg-my-green rounded-full font-medium hover:bg-my-hover-green transition-all font-montserrat">Let's work together</button>
      </div>
    </section>
  );
};

export default ContactSectionHome;
