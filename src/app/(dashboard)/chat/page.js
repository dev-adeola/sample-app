"use client";
import { handleChat } from "@/lib/chat";
import  { echoTest }  from '@/lib/echo';
import { useEffect} from 'react';

const ChatPage =  () => {
    useEffect(  ()   => { 
        echoTest();  
        const channel = window.echo.join('presence.onlinechat.fdsgsdgfewyffhsfgywsjfjsfhjsfhj');

        channel.here((user) => {
            console.log('you subscribed' + user);
        })
        .joining((user) => {
            console.log('you subscribed');
        })
        .leaving((users) => {
            console.log('you subscribed');
        })
        .listen('.onlinechat', (event) => {
                    console.log(event);
                });

    }, []);
  return (
    <>
        <div className="bg-white rounded-2xl px-3 py-3 my-8 w-3/6">
        <h1 className="text-black font-black my-2">Chat System</h1>
        <div className=" border-2 shadow-sm h-[370px] my-2 flex justify-center py-2">
            <h1 className="text-black"> Hello world </h1>
        </div>
            <form action={handleChat}>
                <input type="text" className="w-full  border-2 py-2 px-1 text-black" />
            </form>
        </div>
    </>
    
  )
}

export default ChatPage
