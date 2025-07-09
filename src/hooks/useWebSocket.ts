import { useChatList } from "./useChatList";
import { useChatMessages } from "./useChatMessages";
import { useEffect, useRef } from "react";

export const useWebSocket = (userId?: string) => {
  const token = localStorage.getItem("xpressTalkAccessToken");

  const wsRef = useRef<WebSocket | null>(null);
  const { addMessageToChatList } = useChatList();
  const { addMessageToChat } = useChatMessages();
  useEffect(() => {
    if (!userId) return;
    const ws = new WebSocket(`ws://localhost:5000?token=${token}`);
    ws.onopen = () => {
      console.log("Connected..........");

      wsRef.current = ws;
    };
    ws.onerror = () => {
      alert("Cannot establish web socket connection");
    };
    ws.onmessage = (e) => {
      const message = JSON.parse(e.data);
      if (message.type === "NEW_MESSAGE") {
        addMessageToChatList(message.data);
        addMessageToChat(message.data);
      }
    };
    return () => {
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
      }
    };
  }, [userId]);
};
