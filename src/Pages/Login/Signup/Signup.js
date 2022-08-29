import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <section
      className="flex justify-center items-center min-h-screen"
      style={{ backgroundColor: "#5865F2" }}
    >
      <div
        className="w-10/12 md:w-1/2 shadow-xl p-5"
        style={{ backgroundColor: "#36393F" }}
      >
        <h2 className="text-2xl text-center text-white">Create an account</h2>
        <form>
          <div class="form-control my-5">
            <label class="label">
              <span class="label-text text-slate-300">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              class="input input-bordered"
            />
          </div>
          <div class="form-control my-5">
            <label class="label">
              <span class="label-text text-slate-200">Your Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              class="input input-bordered"
            />
          </div>
          <div class="form-control my-5">
            <label class="label">
              <span class="label-text text-slate-200">Your Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              class="input input-bordered"
            />
          </div>
          <div class="form-control w-2/5 my-5">
            <label class="label cursor-pointer" onClick={!isChecked}>
              <span class="label-text text-slate-200">
                I accept the terms and condition.
              </span>
              <input
                type="checkbox"
                checked="checked"
                class="checkbox-accent cursor-pointer"
              />
            </label>
          </div>
          <div class="form-control my-5">
            <button class="btn btn-primary">Signup</button>
          </div>
        </form>
        <p className="my-2 hover:underline">
          <Link to="/login" className="text-cyan-400">
            Already have an account?
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;
