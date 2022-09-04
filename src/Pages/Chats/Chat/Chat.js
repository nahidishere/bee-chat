import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebase.init";
import ChatBody from "./ChatBody/ChatBody";
import ChatFooter from "./ChatFooter/ChatFooter";
import ChatHeader from "./ChatHeader/ChatHeader";

const Chat = () => {
  const { chatId } = useParams();
  const [groupData, setGroupData] = useState([]);
  useEffect(() => {
    if (chatId) {
      const getGroup = onSnapshot(doc(db, "groups", chatId), (doc) => {
        const data = doc.data();
        setGroupData(data);
      });
    }
  }, [chatId]);
  return (
    <div className="w-8/12 flex flex-col">
      <ChatHeader groupData={groupData} />
      <ChatBody chatId={chatId} />
      <ChatFooter chatId={chatId} />
    </div>
  );
};

export default Chat;
