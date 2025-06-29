import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ReceivedMessage from "./ReceivedMessage";
import SentMessage from "./SentMessage";

const ChatPanel = () => {
  return (
    <div className="flex-1 flex flex-col   mx-auto bg-white shadow-lg">
      <ChatHeader />

      <div
        className="flex-1 overflow-y-auto px-4 py-4 bg-gray-50"
        style={{ scrollbarWidth: "thin" }}
      >
        <div className="space-y-3">
          <SentMessage />
          <ReceivedMessage />
          <ReceivedMessage />
          <ReceivedMessage />
          <ReceivedMessage />
        </div>
      </div>
      <ChatInput />
    </div>
  );
};

export default ChatPanel;
