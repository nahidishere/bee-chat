import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const menu = (
    <>
      <Link to="/">Support</Link>
      <Link to="/">Blog</Link>
      <Link to="/">Careers</Link>
    </>
  );
  return (
    <header style={{ backgroundColor: "#404EED" }}>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="menu">{menu}</li>
            </ul>
          </div>
          <Link to="/" className="btn logo btn-ghost normal-case text-xl">
            BEWITH
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li className="menu">{menu}</li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/login"
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
