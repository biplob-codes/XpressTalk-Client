import { getChatList } from "@/services/chat-service";
import { useQuery } from "@tanstack/react-query";
import { getAvatarColor } from "./utils";
import type { ActiveChat } from "@/store";
import { Skeleton } from "@/components/ui/skeleton";
interface Props {
  setActiveChat: (chat: ActiveChat) => void;
}
const ChatList = ({ setActiveChat }: Props) => {
  const { data: chats, isLoading } = useQuery({
    queryKey: ["chat-list"],
    queryFn: getChatList,
  });
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
      <div className="p-2">
        {chats?.data?.map((chat) => (
          <div
            key={chat.id}
            className={`flex items-center p-3 rounded-lg cursor-pointer transition-all hover:bg-gray-50 `}
            onClick={() => setActiveChat(chat)}
          >
            <div className="relative flex-shrink-0">
              <div
                className={`w-12 h-12 rounded-full ${getAvatarColor(
                  chat.name
                )} flex items-center justify-center text-white font-medium text-sm`}
              ></div>
            </div>

            <div className="flex-1 ml-3 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium text-gray-900 truncate text-sm">
                  {chat.name}
                </h3>
                <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
                  10m
                </span>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600 truncate pr-2">
                  To all the subjects of Ymir
                </p>
                {9 > 0 && (
                  <span className="bg-green-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center flex-shrink-0">
                    11
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
        {isLoading &&
          skeletons.map((id) => (
            <div key={id} className="flex mb-2 items-center space-x-3">
              <Skeleton className="h-12 w-12 rounded-full flex-shrink-0" />
              <div className="space-y-2 w-full px-1">
                <Skeleton className="h-4" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChatList;
