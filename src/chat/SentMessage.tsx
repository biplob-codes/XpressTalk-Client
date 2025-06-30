import { MoreHorizontal } from "lucide-react";
interface Props {
  content: string;
  createdAt: string;
}
function formatToTime(dateTimeString: string) {
  const date = new Date(dateTimeString);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}
const SentMessage = ({ content, createdAt }: Props) => {
  return (
    <div className="flex justify-end group">
      <div className="flex items-start space-x-2 max-w-xs">
        <button className="opacity-0 group-hover:opacity-100 transition-opacity mt-1 p-1">
          <MoreHorizontal className="w-4 h-4 text-gray-400" />
        </button>
        <div className="bg-blue-500 text-white px-4 py-2 rounded-2xl rounded-br-md relative">
          <p className="text-sm">{content}</p>
          <div className="flex items-center justify-end mt-1 space-x-1">
            <span className="text-xs text-blue-100">
              {formatToTime(createdAt)}
            </span>
            <div className="flex">
              <svg
                className="w-4 h-4 text-blue-200"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
              <svg
                className="w-4 h-4 text-blue-200 -ml-2"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentMessage;
