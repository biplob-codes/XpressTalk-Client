import { Search } from "lucide-react";

const ChatPage = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <div className="p-4 bg-white border-b">
        <h2 className="text-xl font-semibold text-gray-800">Chats</h2>
        <div className="mt-3 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search chats..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-600">Your chat list will appear here</p>
      </div>
    </div>
  );
};

export default ChatPage;
