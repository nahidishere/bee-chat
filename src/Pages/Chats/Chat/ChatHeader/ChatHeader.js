import React, { useEffect, useState } from "react";
import nahid from "../../../../assets/nahid.jpg";
import {
  AiOutlineSearch,
  AiOutlinePaperClip,
  AiOutlineMore,
} from "react-icons/ai";

const ChatHeader = ({ groupData }) => {
  return (
    <div className="flex p-5 border-b border-gray-300">
      <div className="flex flex-1 items-center">
        <div className="avatar mr-2">
          <div className="w-14 rounded-full">
            <img src={nahid} alt="Nahid" />
          </div>
        </div>
        <div>
          <h3 className="text 2xl">{groupData?.name}</h3>
          <p>Last seen...</p>
        </div>
      </div>
      <div className="flex text-2xl p-2">
        <AiOutlineSearch />
        <AiOutlinePaperClip />
        <AiOutlineMore />
      </div>
    </div>
  );
};

export default ChatHeader;
