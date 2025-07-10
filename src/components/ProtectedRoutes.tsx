import { useWebSocket } from "@/hooks/useWebSocket";
import { getUser } from "@/services/auth-service";
import { useQuery } from "@tanstack/react-query";

import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const result = await getUser();
      return result.data?.user;
    },
  });

  const { initializeWsConnection } = useWebSocket();
  initializeWsConnection(data?.id);

  if (isLoading) return <div>Loading.....................</div>;
  return data?.id ? <Outlet /> : <Navigate to={"/home"} replace />;
};

export default ProtectedRoutes;
