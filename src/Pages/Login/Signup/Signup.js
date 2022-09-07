import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../../Shared/Loading/Loading";

const Signup = () => {
  const [isChecked, setIsChecked] = useState(true);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [user1, loading1, error1] = useAuthState(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };
  if (loading || loading1 || updating) {
    return <Loading />;
  }
  if (user) {
    navigate("/");
  }
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
        {/* Hola  */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <div className="form-control my-5">
            <label className="label">
              <span className="label-text text-slate-300">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered"
              {...register("name")}
            />
          </div>

          {/* include validation with required or other standard HTML validation rules */}
          <div className="form-control my-5">
            <label className="label">
              <span className="label-text text-slate-300">Your Email</span>
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
              <span className="label-text text-slate-300">Your Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input input-bordered"
              {...register("password")}
            />
          </div>
          {/* Terms and Conditions */}
          <div className="form-control w-2/5 my-5">
            <label className="label cursor-pointer">
              <span className="label-text text-slate-200">
                I accept the terms and condition.
              </span>
              <input
                type="checkbox"
                checked={isChecked}
                className="checkbox-accent cursor-pointer"
              />
            </label>
          </div>
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <div className="form-control my-5">
            <button type="submit" className="btn btn-primary">
              Sign up
            </button>
          </div>
        </form>
        {/* HOla  */}
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
