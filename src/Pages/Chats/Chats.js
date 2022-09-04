import React from "react";
import Chat from "./Chat/Chat";
import Sidebar from "./Sidebar/Sidebar";

const Chats = () => {
  return (
    <div className="flex bg-gray-200 min-h-screen">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default Chats;
