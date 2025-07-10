export const formatToTime = (dateTimeString: string) => {
  const date = new Date(dateTimeString);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};
export const getAvatarColor = (name: string) => {
  const colors = [
    "bg-slate-200 text-slate-800",
    "bg-gray-200 text-gray-800",
    "bg-zinc-200 text-zinc-800",
    "bg-stone-200 text-stone-800",
    "bg-blue-200 text-blue-800",
    "bg-indigo-200 text-indigo-800",
    "bg-violet-200 text-violet-800",
    "bg-emerald-200 text-emerald-800",
    "bg-teal-200 text-teal-800",
    "bg-rose-200 text-rose-800",
    "bg-amber-200 text-amber-800",
    "bg-orange-200 text-orange-800",
  ];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};
export const formatChatTime = (timestamp: string): string => {
  const messageTime = new Date(timestamp);
  const now = new Date();

  const diffInMs = now.getTime() - messageTime.getTime();
  const diffInHours = diffInMs / (1000 * 60 * 60);
  const diffInDays = diffInHours / 24;

  // Less than 24 hours - show time (10:22 AM/PM)
  if (diffInHours < 24) {
    return messageTime.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  }

  // Between 24-48 hours - show "Yesterday"
  if (diffInDays >= 1 && diffInDays < 2) {
    return "Yesterday";
  }

  // Between 2-7 days - show day name (Monday, Tuesday, etc.)
  if (diffInDays >= 2 && diffInDays < 7) {
    return messageTime.toLocaleDateString("en-US", {
      weekday: "long",
    });
  }

  // More than 7 days - show date (May 4, 2025)
  return messageTime.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
export const formatNewMessage = () => {};
