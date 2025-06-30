import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { userSigninSchema, type UserSignInType } from "@/schema/auth-schema";
import { signinUser } from "@/services/auth-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Loader2Icon } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<UserSignInType>({ resolver: zodResolver(userSigninSchema) });
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: signinUser,
    onSuccess: (res) => {
      localStorage.setItem("xpressTalkAccessToken", res.data?.accessToken!);
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/chats");
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.code === "ERR_NETWORK") alert("Dattebayo");
        else if (err.response?.data) alert(err.response.data.message);
      }
    },
  });
  const onSignin: SubmitHandler<UserSignInType> = async (data) => {
    await mutate(data);
  };
  return (
    <div className="flex flex-col justify-center h-screen  w-3/4 mx-auto">
      <div className="mx-auto mb-5">
        <h2 className="text-gray-700 font-semibold text-3xl mb-2">
          Signin To Your Account
        </h2>
        <div className="flex justify-center items-center ">
          <p className="text-lg text-gray-500">Dont have an account?</p>

          <Link
            className="mx-2 text-gray-500   hover:text-gray-800 underline transition-colors"
            to="/auth/signup"
          >
            Signup
          </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSignin)}>
        <Input placeholder="Email" {...register("email")} className="mt-3" />
        {errors.email?.message && (
          <p className="text-red-500  text-sm ml-2 mt-1">
            {errors.email?.message}
          </p>
        )}
        <Input
          placeholder="Password"
          {...register("password")}
          className="mt-3"
        />
        {errors.password?.message && (
          <p className="text-red-500  text-sm ml-2 mt-1">
            {errors.password?.message}
          </p>
        )}
        <Button type="submit" disabled={isPending} className="w-full mt-5 ">
          {isPending && <Loader2Icon className="animate-spin" />}
          Sign in
        </Button>
      </form>
    </div>
  );
};

export default Signin;
