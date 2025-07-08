import { useChatList } from "@/hooks/useChatList";
import { useChatMessages } from "@/hooks/useChatMessages";
import type { User } from "@/services/auth-service";
import type { Message } from "@/services/chat-service";
import { useQueryClient } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { useEffect, useRef } from "react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ReceivedMessage from "./ReceivedMessage";
import SentMessage from "./SentMessage";

interface Props {
  chatId: string;
  onBack?: () => void;
}

const ChatPanel = ({ chatId, onBack }: Props) => {
  const user = useQueryClient().getQueryData<User>(["user"]);
  const { messages, addMessageToChat } = useChatMessages();
  const { addMessageToChatList } = useChatList();
  const handleNewMessage = (message: string) => {
    const newMessage = {
      id: `${messages?.length! + 1}`,
      content: message,
      chatId,
      senderId: user?.id!,
      status: "PENDING",
      createdAt: new Date().toISOString(),
    } as Message;
    addMessageToChatList(newMessage);
    addMessageToChat(newMessage);
  };

  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 flex flex-col h-full bg-white lg:bg-transparent lg:mx-auto   ">
      {/* Mobile Back Button */}
      {onBack && (
        <div className="lg:hidden flex items-center p-3 border-b border-gray-200 bg-white">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <span className="ml-2 text-gray-600 font-medium">Back</span>
        </div>
      )}

      <ChatHeader />

      <div
        className="flex-1 overflow-y-auto px-4 py-4 bg-gray-50 lg:bg-transparent"
        style={{ scrollbarWidth: "thin" }}
      >
        <div className="space-y-3">
          {messages?.map((msg) =>
            msg.senderId === user?.id ? (
              <SentMessage key={msg.id} message={msg} />
            ) : (
              <ReceivedMessage key={msg.id} message={msg} />
            )
          )}
          <div ref={messageEndRef} />
        </div>
      </div>

      {/* Chat Input with mobile spacing */}
      <div className="pb-safe-area-inset-bottom lg:pb-0">
        <ChatInput onSend={handleNewMessage} />
      </div>
    </div>
  );
};

export default ChatPanel;
