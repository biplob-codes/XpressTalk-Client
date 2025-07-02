import { useState } from "react";
import ChatList from "./ChatList";
import ChatListHeading from "./ChatListHeading";
import ChatPanel from "./ChatPanel";
import InitialChatPanel from "./InitialChatPanel";
import { useActiveChatStore } from "@/store";

const ChatPage = () => {
  const [selectedChat, setSelectedChat] = useState<string>();
  const setActiveChat = useActiveChatStore((s) => s.setActiveChat);
  return (
    <div className="flex h-screen bg-gray-50 p-4 gap-4">
      <div className="w-96 bg-white rounded shadow-sm flex flex-col">
        <ChatListHeading />
        <ChatList
          setActiveChat={(chat) => {
            setActiveChat(chat);
            setSelectedChat(chat.id);
          }}
        />
      </div>
      {selectedChat ? (
        <ChatPanel chatId={selectedChat} />
      ) : (
        <InitialChatPanel />
      )}
    </div>
  );
};

export default ChatPage;
