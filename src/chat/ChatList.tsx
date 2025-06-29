import { getChatList } from "@/services/chat-service";
import { useQuery } from "@tanstack/react-query";

const ChatList = () => {
  const getAvatarColor = (name: string) => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-red-500",
      "bg-yellow-500",
      "bg-indigo-500",
      "bg-pink-500",
      "bg-teal-500",
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };
  const { data } = useQuery({
    queryKey: ["chat-list"],
    queryFn: getChatList,
  });

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
      <div className="p-2">
        {data?.data?.map((chat) => (
          <div
            key={chat.id}
            className={`flex items-center p-3 rounded-lg cursor-pointer transition-all hover:bg-gray-50 `}
          >
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div
                className={`w-12 h-12 rounded-full ${getAvatarColor(
                  chat.name
                )} flex items-center justify-center text-white font-medium text-sm`}
              >
                {/* {chat.avatar} */}
              </div>
              {/* {chat.isOnline && (
                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
              )} */}
            </div>

            {/* Chat Info */}
            <div className="flex-1 ml-3 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium text-gray-900 truncate text-sm">
                  {chat.name}
                </h3>
                <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
                  {/* {chat.time} */} 10m
                </span>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600 truncate pr-2">
                  {/* {chat.message} */} To all the subjects of Ymir
                </p>
                {9 > 0 && (
                  <span className="bg-green-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center flex-shrink-0">
                    {/* {chat.unreadCount} */} 11
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
