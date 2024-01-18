import { handleChat } from "../../../lib/chat";

const ChatPage = () => {
  return (
    <div className="bg-white rounded-2xl px-3 py-3 my-8 w-4/6">
      <h1 className="text-black font-black my-2">Chat System</h1>
      <div className=" border-2 shadow-sm h-[370px] my-2 flex justify-center py-2">
        <h1 className="text-black"> Hello world </h1>
      </div>
        <form action={handleChat}>
            <input type="text" className="w-full  border-2 py-2 px-1 text-black" />
        </form>
    </div>
  )
}

export default ChatPage
