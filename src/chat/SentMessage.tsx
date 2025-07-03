import { MoreHorizontal } from "lucide-react";
import { formatToTime } from "./utils";
import { Check } from "lucide-react";
import { CheckCheck } from "lucide-react";
import { Clock } from "lucide-react";
import type { Message, MessageStatus } from "@/services/chat-service";
import type { JSX } from "react";
interface Props {
  message: Message;
}

const SentMessage = ({ message }: Props) => {
  const iconMap: { [key in MessageStatus]: JSX.Element } = {
    PENDING: <Clock className="w-3.5 h-3.5 text-slate-200" />,
    RECEIVED: <Check className="w-3.5 h-3.5 text-blue-400" />,
    DELIVERED: <CheckCheck className="w-3.5 h-3.5 text-blue-400" />,
    READ: <CheckCheck className="w-4 h-4 text-green-500" />,
  };
  return (
    <div className="flex justify-end group">
      <div className="flex items-start space-x-2 max-w-xs">
        <button className="opacity-0 group-hover:opacity-100 transition-opacity mt-1 p-1">
          <MoreHorizontal className="w-4 h-4 text-gray-400" />
        </button>
        <div className="bg-slate-700 text-white px-4 py-2 rounded-2xl rounded-br-md relative">
          <p className="text-sm">{message.content}</p>
          <div className="flex items-center justify-end mt-1 space-x-1">
            <span className="text-xs text-blue-100">
              {formatToTime(message.createdAt)}
            </span>
            {iconMap[message.status]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentMessage;
