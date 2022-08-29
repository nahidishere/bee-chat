import React from "react";
import stayClose from "../../../assets/stay-close.svg";

const StayClose = () => {
  return (
    <section className="py-5">
      <div className="lg:w-3/5 mx-auto text-center">
        <h2 className="text-4xl font-bold my-4">
          RELIABLE TECH FOR STAYING CLOSE
        </h2>
        <p className="text-lg">
          Low-latency voice and video feels like you’re in the same room. Wave
          hello over video, watch friends stream their games, or gather up and
          have a drawing session with screen share.
        </p>
      </div>
      <div className="lg:w-4/5 mx-auto">
        <img src={stayClose} alt="Stay close" />
      </div>
    </section>
  );
};

export default StayClose;
