import type { Message } from "@/services/chat-service";
import { useChatStore, useWsStore } from "@/store";
import { useEffect } from "react";
import { useChatList } from "./useChatList";
import { useChatMessages } from "./useChatMessages";

export const useWebSocket = () => {
  const token = localStorage.getItem("xpressTalkAccessToken");
  const { setSocket, socket, removeSocket } = useWsStore();
  const { addMessageToChatList } = useChatList();
  const { addMessageToChat, swapOutMessage, updateMessageStatus } =
    useChatMessages();

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
        const message = JSON.parse(e.data);
        if (message.type === "RCV_MSG") {
          addMessageToChatList(message.payload);
          addMessageToChat(message.payload);
          sendMessageAck(message.payload, ws);
        }
        if (message.type === "ACK_SEND") {
          swapOutMessage(message);
        }
        if (message.type === "ACK_MSG") {
          updateMessageStatus(message.payload);
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
  const sendMessageAck = (message: Message, ws: WebSocket) => {
    const activeChat = useChatStore.getState().activeChat;
    console.log("msgID:", message.chatId);
    console.log("activeID", activeChat.id);
    const ackObj = {
      type: "ACK_MSG",
      payload: {
        chatId: message.chatId,
        messageId: message.id,
        status: activeChat.id === message.chatId ? "READ" : "DELIVERED",
      },
    };
    const wsPayload = JSON.stringify(ackObj);
    ws.send(wsPayload);
  };
  return { initializeWsConnection, sendWsMessage };
};
``;
