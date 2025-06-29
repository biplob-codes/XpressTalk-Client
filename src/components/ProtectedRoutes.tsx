import { getUser } from "@/services/auth-service";
import { useQuery } from "@tanstack/react-query";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  if (isLoading) return <div>Loading.....................</div>;
  return data?.success ? <Outlet /> : <Navigate to={"/"} replace />;
};

export default ProtectedRoutes;
