import React from "react";
import bee from "../../../assets/man-vs-bee.jpg";
import hero from "../../../assets/hero-1.svg";

const Hero = () => {
  return (
    <section>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div className="lg:w-3/5">
            <img src={hero} alt="Hero 1" />
          </div>
          <div className="lg:w-2/5">
            <h1 class="text-5xl font-bold">Where hanging out is easy</h1>
            <p class="py-6">
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
