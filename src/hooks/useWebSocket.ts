import type { Message } from "@/services/chat-service";
import { useWsStore } from "@/store";
import { useEffect } from "react";
import { useChatList } from "./useChatList";
import { useChatMessages } from "./useChatMessages";

export const useWebSocket = () => {
  const token = localStorage.getItem("xpressTalkAccessToken");
  const { setSocket, socket, removeSocket } = useWsStore();
  const { addMessageToChatList } = useChatList();
  const { addMessageToChat } = useChatMessages();
  const initializeWsConnection = (userId?: string) => {
    useEffect(() => {
      if (!userId) return;
      const ws = new WebSocket(`ws://localhost:5000?token=${token}`);
      ws.onopen = () => {
        console.log("Connected..........");
        setSocket(ws);
      };
      ws.onerror = () => {
        alert("Cannot establish web socket connection");
      };
      ws.onmessage = (e) => {
        console.log("Called:", e.data);

        const message = JSON.parse(e.data);
        if (message.type === "RCV_MSG") {
          addMessageToChatList(message.payload);
          addMessageToChat(message.payload);
        }
      };
      return () => {
        if (ws) {
          ws.close();
          removeSocket();
        }
      };
    }, [userId]);
  };
  const sendWsMessage = (message: Message) => {
    const newMessage = {
      type: "SEND_MSG",
      payload: {
        chatId: message.chatId,
        content: message.content,
      },
      metadata: {
        tempId: message.id,
      },
    };
    const wsPayload = JSON.stringify(newMessage);
    if (socket?.readyState === WebSocket.OPEN) {
      console.log("Sending message...");
      console.log(wsPayload);
      socket.send(wsPayload);
    } else {
      console.log("WebSocket not ready. State:", socket);
    }
  };
  return { initializeWsConnection, sendWsMessage };
};
``;
