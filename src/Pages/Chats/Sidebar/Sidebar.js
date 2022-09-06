import React, { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { signOut } from "firebase/auth";
import nahid from "../../../assets/nahid.jpg";
import {
  AiOutlineReload,
  AiOutlineMore,
  AiFillMessage,
  AiOutlineSearch,
} from "react-icons/ai";
import SidebarChat from "./SidebarChat/SidebarChat";
import auth, { db } from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../Shared/Loading/Loading";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [group, setGroup] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  // Get Groups
  const getGroups = () => {
    const getData = onSnapshot(collection(db, "groups"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        list.push({
          id: doc.id,
          ...doc.data(),
        });
        setGroup(list);
      });
    });
  };
  useEffect(() => {
    getGroups();
  }, []);
  // Logout
  const handleLogout = () => {
    signOut(auth);
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <section className="w-4/12">
      <div>
        {/* Sidebar Header  */}
        <div className="sidebar-header border-r-2 border-gray-300 flex justify-between p-2.5">
          <div className="flex items-center">
            <div className="avatar mr-2">
              <div className="w-14 rounded-full">
                <img src={nahid} alt="Nahid" />
              </div>
            </div>
            <h2 className="text-xl">{user?.displayName}</h2>
          </div>
          <div className="flex text-2xl p-2">
            <ul className="menu-horizontal items-center rounded-box bg">
              <li>
                <Link to="/" className="text-black">
                  <AiOutlineReload />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <AiOutlineMore />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <AiFillMessage />
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className="btn btn-outline ml-2">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* Sidebar Search  */}
        <div className="sidebar-search p-4">
          <div className="sidebar-search-container">
            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search contact"
                  className="input input-bordered w-full"
                />
                <button className="btn btn-square">
                  <AiOutlineSearch />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Messages  */}
        <div className="overflow-auto" style={{ maxHeight: "530px" }}>
          <SidebarChat addNewChat />
          {group.map((g) => (
            <SidebarChat key={g.id} id={g.id} group={g} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
