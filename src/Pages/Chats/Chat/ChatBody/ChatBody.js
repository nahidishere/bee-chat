import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../../firebase.init";
import Messages from "./Messages/Messages";

const ChatBody = ({ chatId }) => {
  const [messages, setMessages] = useState([]);
  // Messages
  useEffect(() => {
    if (chatId) {
      const q = query(
        collection(db, "groups", chatId, "messages"),
        orderBy("timestamp", "asc")
      );
      const getMessages = onSnapshot(q, (snapshot) => {
        const msgList = [];
        snapshot.docs.forEach((doc) => {
          msgList.push(doc.data());
        });
        setMessages(msgList);
      });
    }
  }, [chatId]);
  return (
    <div style={{ height: "500px" }} className="overflow-scroll">
      {messages?.map((message) => (
        <Messages message={message} />
      ))}
    </div>
  );
};

export default ChatBody;
