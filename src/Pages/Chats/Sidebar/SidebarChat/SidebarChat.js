import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import nahid from "../../../../assets/nahid.jpg";
import { db } from "../../../../firebase.init";
const SidebarChat = ({ addNewChat, group, id }) => {
  const [message, setMessage] = useState("");
  // New Chat
  const newChat = async () => {
    const group = prompt("Enter your group name");
    try {
      const docRef = await addDoc(collection(db, "groups"), {
        name: group,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  // New Mesage
  useEffect(() => {
    if (id) {
      const q = query(
        collection(db, "groups", id, "messages"),
        orderBy("timestamp", "asc")
      );
      const getMessage = onSnapshot(q, (snapshot) => {
        snapshot.docs.forEach((doc) => {
          setMessage(doc.data());
        });
      });
    }
  }, [id]);
  const gName = group?.name.split(" ")[0];
  return !addNewChat ? (
    <Link to={`/chat/${group?.id}`}>
      <div className="flex items-center p-4 border-b border-gray-300 cursor-pointer hover:bg-gray-300">
        <div class="avatar placeholder mr-2">
          <div class="bg-neutral-focus text-neutral-content rounded-full w-14">
            <span class="text-3xl">{gName.substring(0, 3)}</span>
          </div>
        </div>
        <div>
          <h3 className="text-2xl">{group?.name}</h3>
          <p>{message?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div
      onClick={newChat}
      className="flex items-center p-4 border-b border-gray-300 cursor-pointer bg-emerald-50 hover:bg-emerald-100"
    >
      <h3 className="text-2xl font-bold">Add New Chat</h3>
    </div>
  );
};

export default SidebarChat;
