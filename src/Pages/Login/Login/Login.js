import React from "react";
import { Link, useNavigate } from "react-router-dom";
import bean from "../../../assets/man-vs-bee.jpg";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";

const Login = () => {
  const navigate = useNavigate();
  // Sign in with firebase
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [user1, loading1, error1] = useAuthState(auth);
  // Form submit
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
    reset();
  };
  if (loading) {
    return <Loading />;
  }
  if (user1) {
    navigate("/");
  }
  if (user) {
    console.log(user);
  }
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
                      {...register("email")}
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
                      type="password"
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
