import React from "react";
import bee from "../../../assets/man-vs-bee.jpg";
import hero from "../../../assets/hero-1.svg";

const Hero = () => {
  return (
    <section>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="lg:w-3/5">
            <img src={hero} alt="Hero 1" />
          </div>
          <div className="lg:w-2/5">
            <h1 className="text-5xl font-bold">Where hanging out is easy</h1>
            <p className="py-6">
              Grab a seat in a voice channel when you’re free. Friends in your
              server can see you’re around and instantly pop in to talk without
              having to call.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
