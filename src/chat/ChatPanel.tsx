import { useQuery, useQueryClient } from "@tanstack/react-query";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ReceivedMessage from "./ReceivedMessage";
import SentMessage from "./SentMessage";
import type { User } from "@/services/auth-service";
import { getChatMessages } from "@/services/chat-service";
interface Props {
  chatId: string;
}
const ChatPanel = ({ chatId }: Props) => {
  console.log(chatId);
  const user = useQueryClient().getQueryData<User>(["user"]);
  const { data } = useQuery({
    queryKey: [`chat:${chatId}`],
    queryFn: async () => {
      const result = await getChatMessages(chatId);
      return result.data;
    },
  });

  return (
    <div className="flex-1 flex flex-col   mx-auto bg-white shadow-lg">
      <ChatHeader />

      <div
        className="flex-1 overflow-y-auto px-4 py-4 bg-gray-50"
        style={{ scrollbarWidth: "thin" }}
      >
        <div className="space-y-3">
          {data?.map((msg) =>
            msg.senderId === user?.id ? (
              <SentMessage content={msg.content} createdAt={msg.createdAt} />
            ) : (
              <ReceivedMessage
                content={msg.content}
                createdAt={msg.createdAt}
              />
            )
          )}
        </div>
      </div>
      <ChatInput />
    </div>
  );
};

export default ChatPanel;
