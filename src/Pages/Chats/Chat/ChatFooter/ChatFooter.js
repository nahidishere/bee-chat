import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineMeh, AiOutlineSend, AiOutlineAudio } from "react-icons/ai";
import auth, { db } from "../../../../firebase.init";

const ChatFooter = ({ chatId }) => {
  const [messageInput, setMessageInput] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const sendMessage = async (e) => {
    e.preventDefault();
    if (messageInput === "") {
      return alert("Please type your message");
    }
    try {
      const sendData = await addDoc(
        collection(db, "groups", chatId, "messages"),
        {
          name: user?.displayName,
          email: user?.email,
          message: messageInput,
          timestamp: serverTimestamp(),
        }
      );
      // console.log("Document written with ID: ", sendData.id);
    } catch (e) {
      // console.error("Error adding document: ", e);
    }
    setMessageInput("");
  };
  return (
    <form
      onSubmit={sendMessage}
      className="flex text-2xl items-center justify-between p-2 h-1/6"
    >
      <AiOutlineMeh style={{ fontSize: "35px" }} />
      <input
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
        type="text"
        placeholder="Type here"
        className="input input-bordered input-accent w-full mx-2"
      />
      <button type="submit">
        <AiOutlineSend />
      </button>
    </form>
  );
};

export default ChatFooter;
