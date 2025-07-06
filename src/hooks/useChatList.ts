import { getChatList } from "@/services/chat-service";
import { useChatStore } from "@/store";
import { useQuery } from "@tanstack/react-query";

export const useChatList = () => {
  const { chatlist, setChatList } = useChatStore();
  const { isLoading } = useQuery({
    queryKey: ["chat-list"],
    queryFn: async () => {
      const result = await getChatList();
      setChatList(result.data);
      return result.data;
    },
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
  return { chatlist, isLoading };
};
