import { useChatMessages } from "@/hooks/useChatMessages";
import type { User } from "@/services/auth-service";
import { useActiveChatStore } from "@/store";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ReceivedMessage from "./ReceivedMessage";
import SentMessage from "./SentMessage";
interface Props {
  chatId: string;
}
const ChatPanel = ({ chatId }: Props) => {
  const user = useQueryClient().getQueryData<User>(["user"]);
  const { setMessages } = useActiveChatStore();
  const messages = useChatMessages();
  const handleNewMessage = (message: string) => {
    const newMessage = {
      id: `${messages?.length! + 1}`,
      content: message,
      chatId,
      senderId: user?.id!,
      createdAt: new Date().toISOString(),
    };
    setMessages([...messages, newMessage]);
  };
  const messageEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div className="flex-1 flex flex-col   mx-auto bg-white shadow-lg">
      <ChatHeader />

      <div
        className="flex-1 overflow-y-auto px-4 py-4 bg-gray-50"
        style={{ scrollbarWidth: "thin" }}
      >
        <div className="space-y-3">
          {messages?.map((msg) =>
            msg.senderId === user?.id ? (
              <SentMessage content={msg.content} createdAt={msg.createdAt} />
            ) : (
              <ReceivedMessage
                content={msg.content}
                createdAt={msg.createdAt}
              />
            )
          )}
          <div ref={messageEndRef} />
        </div>
      </div>
      <ChatInput onSend={handleNewMessage} />
    </div>
  );
};

export default ChatPanel;
