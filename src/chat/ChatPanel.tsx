import { useChatMessages } from "@/hooks/useChatMessages";
import type { User } from "@/services/auth-service";
import { useActiveChatStore } from "@/store";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ReceivedMessage from "./ReceivedMessage";
import SentMessage from "./SentMessage";
import type { Message } from "@/services/chat-service";
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
      status: "PENDING",
      createdAt: new Date().toISOString(),
    } as Message;
    setMessages([...messages, newMessage]);
  };
  const messageEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div className="flex-1 flex flex-col mx-auto ">
      <ChatHeader />

      <div
        className="flex-1 overflow-y-auto px-4 py-4  "
        style={{ scrollbarWidth: "thin" }}
      >
        <div className="space-y-3">
          {messages?.map((msg) =>
            msg.senderId === user?.id ? (
              <SentMessage message={msg} />
            ) : (
              <ReceivedMessage message={msg} />
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
