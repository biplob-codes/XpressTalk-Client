import { Search } from "lucide-react";

const InitialChatPanel = () => {
  return (
    <div className="flex-1 bg-white rounded shadow-sm flex items-center justify-center">
      <div className="text-center">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Search className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Select a chat
        </h3>
        <p className="text-gray-500">
          Choose a conversation to start messaging
        </p>
      </div>
    </div>
  );
};

export default InitialChatPanel;
