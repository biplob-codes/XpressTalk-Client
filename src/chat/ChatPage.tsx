import { useChatStore, useUIStore } from "@/store";
import ChatList from "./ChatList";
import ChatListHeading from "./ChatListHeading";
import ChatPanel from "./ChatPanel";
import InitialChatPanel from "./InitialChatPanel";

const ChatPage = () => {
  const { selectedChat, setSelectedChat, setIsChatPanelOpenOnMobile } =
    useUIStore();
  const setActiveChat = useChatStore((s) => s.setActiveChat);

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:h-screen lg:bg-slate-50 lg:p-4 lg:gap-4 w-full">
        <div className="lg:w-80 xl:w-96 bg-white rounded shadow-xl flex flex-col">
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

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden flex flex-col h-screen w-full">
        {/* Chat List - Hidden when chat is selected */}
        <div
          className={`${
            selectedChat ? "hidden" : "flex"
          } flex-col h-full bg-white`}
        >
          <ChatListHeading />
          <ChatList
            setActiveChat={(chat) => {
              setActiveChat(chat);
              setSelectedChat(chat.id);
              setIsChatPanelOpenOnMobile(true);
            }}
          />
        </div>

        {/* Chat Panel - Shown when chat is selected */}
        <div className={`${selectedChat ? "flex" : "hidden"} flex-col h-full`}>
          {selectedChat ? (
            <ChatPanel chatId={selectedChat} />
          ) : (
            <InitialChatPanel />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
