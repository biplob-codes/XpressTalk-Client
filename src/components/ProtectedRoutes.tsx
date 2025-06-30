import { getUser } from "@/services/auth-service";
import { initializeWebSocketConnection } from "@/services/web-socket";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const result = await getUser();
      return result.data?.user;
    },
  });
  useEffect(() => {
    if (data?.id) {
      initializeWebSocketConnection();
    }
  }, [data?.id]);
  if (isLoading) return <div>Loading.....................</div>;
  return data?.id ? <Outlet /> : <Navigate to={"/home"} replace />;
};

export default ProtectedRoutes;
