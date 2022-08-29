import React from "react";
import { Link } from "react-router-dom";
import bean from "../../../assets/man-vs-bee.jpg";

const Login = () => {
  return (
    <section
      style={{ backgroundColor: "#5865F2" }}
      className="flex items-center min-h-screen justify-center"
    >
      <div className="w-3/4">
        <div class="hero" style={{ backgroundColor: "#36393F" }}>
          <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
              <div>
                <img src={bean} alt="man-vs-bee" />
              </div>
              <h4 className="text-xl text-white my-2">Chat with bee-chat</h4>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm">
              <div class="card-body">
                <div className="text-center">
                  <h2 className="text-2xl text-white">Welcome back!</h2>
                  <p className="text-slate-300">
                    We're so exited to see you again!
                  </p>
                </div>
                <form>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text text-slate-300">Your Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      class="input input-bordered"
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text text-slate-300">
                        Your Password
                      </span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      class="input input-bordered"
                    />
                    <label className="my-2 hover:underline">
                      <Link to="/" className="text-cyan-400">
                        Forgot password?
                      </Link>
                    </label>
                  </div>
                  <div class="form-control mt-6">
                    <button class="btn btn-primary">Login</button>
                  </div>
                </form>
                <p className="hover:underline">
                  <Link to="/signup" className="text-cyan-400">
                    Need an account?
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
