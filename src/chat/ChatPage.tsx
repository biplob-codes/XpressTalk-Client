import ChatList from "./ChatList";
import ChatListHeading from "./ChatListHeading";
import ChatPanel from "./ChatPanel";

const ChatPage = () => {
  return (
    <div className="flex h-screen bg-gray-50 p-4 gap-4">
      <div className="w-96 bg-white rounded shadow-sm flex flex-col">
        <ChatListHeading />
        <ChatList />
      </div>
      <ChatPanel />
    </div>
  );
};

export default ChatPage;
