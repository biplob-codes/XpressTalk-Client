import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mic, Paperclip, Smile } from "lucide-react";
import { useRef, useState } from "react";
interface Props {
  onSend: (message: string) => void;
}
const ChatInput = ({ onSend }: Props) => {
  const [message, setMessage] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="px-4 py-3  ">
      <div className="flex items-center space-x-3">
        <div className="flex-1 relative">
          <Textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            draggable={false}
            ref={textareaRef}
            placeholder="Enter message..."
            rows={1}
            className="w-full px-4 py-2 pr-20 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 resize-none leading-5 min-h-[2.5rem] max-h-[5rem] overflow-y-auto"
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = "auto";
              target.style.height = Math.min(target.scrollHeight, 80) + "px";
            }}
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

        <Button
          onClick={() => {
            if (message.length > 1) {
              onSend(message);
              setMessage("");
              textareaRef.current!.style.height = "2.5rem";
            }
          }}
          disabled={message.length === 0}
          className="cursor-pointer rounded"
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
