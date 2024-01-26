"use client";
import { handleChat } from "@/lib/chat";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const ChatPage =  () => {
  const [socket, setSocket] = useState(undefined);
  const [inbox, setInbox] = useState([]);
  const [message, setMessage] = useState("");
  const [transactionSession, setTransactionSession] = useState("");

  const handleSendMessage = () => {
    socket.emit("message", message, transactionSession);
  }

  const handleJoinSession = () => {
    socket.emit("joinSession", transactionSession);
  }
  useEffect(() => {
    const socket = io("http://localhost:3001");
    socket.on('message', (message) => {
        setInbox((inbox) => [...inbox, message]);
    });
    setSocket(socket);
  }, [])
  return (
    <>
        <div className="bg-white rounded-2xl px-3 py-3 my-8 w-3/6">
        <h1 className="text-black font-black my-2">Chat System</h1>
        <div className=" border-2 shadow-sm h-[370px] my-2 w-full py-2">
            {inbox.map((message, index) => (
               <div key={index} className="text-gray-500 font-bold w-5/6 my-1">{message}</div>     
            ))}
        </div>
            <input type="text" onChange={(e) => setTransactionSession(e.target.value)} name="transactionSession" className="w-5/6  border-2 py-2 px-1 text-black my-2" placeholder="RoomId" />
            <button className="bg-black text-white  w-1/6 py-2.5" onClick={handleJoinSession}>Join Session</button>
            <input type="text" onChange={(e) => setMessage(e.target.value)} name="message" className="w-5/6  border-2 py-2 px-1 text-black" placeholder="Message" />
            <button className="bg-black text-white  w-1/6 py-2.5" onClick={handleSendMessage}>send</button>
           
        </div>
    </>
    
  )
}

export default ChatPage
