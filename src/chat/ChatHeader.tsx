import { useActiveChatStore, useUIStore } from "@/store";
import { MoreHorizontal, Phone, ArrowLeft } from "lucide-react";

const ChatHeader = () => {
  const activeChat = useActiveChatStore((s) => s.activeChat);
  const { isChatOpenOnMobile, setSelectedChat, setIsChatPanelOpenOnMobile } =
    useUIStore();

  return (
    <div className="flex items-center justify-between px-4 py-3  ">
      <div className="flex items-center space-x-3">
        {isChatOpenOnMobile && (
          <ArrowLeft
            onClick={() => {
              setSelectedChat("");
              setIsChatPanelOpenOnMobile(false);
            }}
            className="text-gray-600"
          />
        )}

        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">👤</span>
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 text-base">
            {activeChat.name}
          </h3>
          <p className="text-sm text-green-500 font-medium">Online</p>
        </div>
      </div>
      <div className="flex items-center space-x-1">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Phone className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <MoreHorizontal className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
