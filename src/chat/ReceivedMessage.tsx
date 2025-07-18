import { MoreHorizontal } from "lucide-react";
import { formatToTime } from "./utils";
import type { Message } from "@/services/chat-service";
interface Props {
  message: Message;
}

const ReceivedMessage = ({ message }: Props) => {
  return (
    <div className="flex justify-start group">
      <div className="flex items-start space-x-2 max-w-xs">
        <div className="bg-gray-100 border border-gray-200 text-gray-800 px-4 py-2 rounded-2xl rounded-bl-md">
          <p className="text-sm leading-relaxed">{message.content}</p>
          <div className="mt-1">
            <span className="text-xs text-gray-500">
              {formatToTime(message.createdAt)}
            </span>
          </div>
        </div>
        <button className="opacity-0 group-hover:opacity-100 transition-opacity mt-1 p-1">
          <MoreHorizontal className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default ReceivedMessage;
