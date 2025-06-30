import { useWsStore } from "@/store";

export const initializeWebSocketConnection = () => {
  const token = localStorage.getItem("xpressTalkAccessToken");
  const setSocket = useWsStore.getState().setSocket;
  const ws = new WebSocket(`ws://localhost:5000?token=${token}`);
  ws.onopen = (e) => {
    console.log("Connected..........");
    setSocket(ws);
  };
  ws.onerror = (e) => {
    alert("Cannot establish web socket connection");
  };
};
