import React from "react";
import { Link } from "react-router-dom";
import bean from "../../../assets/man-vs-bee.jpg";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section
      style={{ backgroundColor: "#5865F2" }}
      className="flex items-center min-h-screen justify-center"
    >
      <div className="w-3/4">
        <div className="hero" style={{ backgroundColor: "#36393F" }}>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <div>
                <img src={bean} alt="man-vs-bee" />
              </div>
              <h4 className="text-xl text-white my-2">Chat with bee-chat</h4>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm">
              <div className="card-body">
                <div className="text-center">
                  <h2 className="text-2xl text-white">Welcome back!</h2>
                  <p className="text-slate-300">
                    We're so exited to see you again!
                  </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* include validation with required or other standard HTML validation rules */}
                  <div className="form-control my-5">
                    <label className="label">
                      <span className="label-text text-slate-300">
                        Your Email
                      </span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      className="input input-bordered"
                      {...register("name")}
                    />
                  </div>
                  {/* Password  */}
                  <div className="form-control my-5">
                    <label className="label">
                      <span className="label-text text-slate-300">
                        Your Password
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Password"
                      name="password"
                      className="input input-bordered"
                      {...register("password")}
                    />
                  </div>
                  {/* errors will return when field validation fails  */}
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}

                  <div className="form-control my-5">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
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
