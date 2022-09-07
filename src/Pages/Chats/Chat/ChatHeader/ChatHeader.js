import React from "react";
import {
  AiOutlineSearch,
  AiOutlinePaperClip,
  AiOutlineMore,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const ChatHeader = ({ groupData }) => {
  const gName = groupData?.name?.split(" ")[0];
  return (
    <div className="flex h-1/6 p-5 border-b border-gray-300">
      <div className="flex flex-1 items-center">
        <div className="avatar placeholder mr-2">
          <div className="w-14 rounded-full bg-neutral-focus text-neutral-content">
            <span class="text-3xl">{gName?.substring(0, 3)}</span>
          </div>
        </div>
        <div>
          <h3 className="text 2xl">{groupData?.name}</h3>
          <p>Last seen...</p>
        </div>
      </div>
      <div className="flex text-2xl p-2">
        <ul className="menu-horizontal items-center rounded-box bg">
          <li>
            <Link to="/" className="text-black">
              <AiOutlineSearch />
            </Link>
          </li>
          <li>
            <Link to="/">
              <AiOutlinePaperClip />
            </Link>
          </li>
          <li>
            <Link to="/">
              <AiOutlineMore />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChatHeader;
