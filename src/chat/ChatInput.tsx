import { Mic, Paperclip, Smile } from "lucide-react";
import { useRef } from "react";
interface Props {
  onSend: (message: string) => void;
}
const ChatInput = ({ onSend }: Props) => {
  const messageRef = useRef<HTMLInputElement>(null);
  return (
    <div className="px-4 py-3 bg-white border-t border-gray-100">
      <div className="flex items-center space-x-3">
        <div className="flex-1 relative">
          <input
            type="text"
            ref={messageRef}
            placeholder="Enter message..."
            className="w-full px-4 py-2.5 pr-20 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
            <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
              <Smile className="w-4 h-4 text-gray-500" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
              <Paperclip className="w-4 h-4 text-gray-500" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
              <Mic className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
        <button
          onClick={() => {
            if (messageRef.current) {
              onSend(messageRef.current.value);
              messageRef.current.value = "";
            }
          }}
          className="px-4 py-2.5 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors text-sm font-medium"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
