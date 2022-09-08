import React from "react";
import notFound from "../../../assets/notfound.jpg";
import cantFind from "../../../assets/404.png";

const NotFound = () => {
  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{ backgroundColor: "#5865F2" }}
    >
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={cantFind}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Cant find"
        />
        <div>
          <img src={notFound} alt="Not found page" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
