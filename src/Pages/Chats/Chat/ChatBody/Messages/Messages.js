import React from "react";

const Messages = ({ message }) => {
  return (
    <div className="flex-1 overflow-auto flex flex-col">
      <div
        className={`chat-message ml-2 p-2 ${
          message?.name === "kiran" ? "ml-auto" : ""
        }`}
      >
        <span className="username font-bold">{message?.name}</span>
        <div
          className={`message flex items-center ${
            message?.name === "kiran" ? "bg-green-300" : "bg-white"
          } w-fit p-2 rounded-lg`}
        >
          <span className="mr-4">{message?.message}</span>
          <h4 className="timestamp text-sm">
            {new Date(message?.timestamp?.toDate()).toUTCString()}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Messages;
