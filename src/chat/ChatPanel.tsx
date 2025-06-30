import { useQuery, useQueryClient } from "@tanstack/react-query";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ReceivedMessage from "./ReceivedMessage";
import SentMessage from "./SentMessage";
import type { User } from "@/services/auth-service";
import { getChatMessages, type Message } from "@/services/chat-service";
import { useEffect, useRef, useState } from "react";
interface Props {
  chatId: string;
}
const ChatPanel = ({ chatId }: Props) => {
  const user = useQueryClient().getQueryData<User>(["user"]);
  useQuery({
    queryKey: [`chat:${chatId}`],
    queryFn: async () => {
      const result = await getChatMessages(chatId);
      setMessages(result.data);
      return result.data;
    },
  });
  const [messages, setMessages] = useState<Message[]>([]);
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
