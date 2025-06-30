import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { userSignupSchema, type UserSignUpType } from "@/schema/auth-schema";
import { signupUser } from "@/services/auth-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Loader2Icon } from "lucide-react";
import { AxiosError } from "axios";

const Signup = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<UserSignUpType>({ resolver: zodResolver(userSignupSchema) });
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: signupUser,
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
  const onSignup: SubmitHandler<UserSignUpType> = async (data) => {
    await mutate(data);
  };

  return (
    <div className="flex flex-col justify-center h-screen  w-3/4 mx-auto">
      <div className="mx-auto mb-5 text-center">
        <h2 className="text-gray-700 font-semibold text-3xl mb-2">
          Create an Account
        </h2>
        <div className="flex items-center justify-center">
          <p className="text-lg text-gray-500">Already have an account? </p>

          <Link
            className="mx-2 text-gray-500 hover:text-gray-800 underline transition-colors"
            to="/auth/signin"
          >
            Signin
          </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSignup)}>
        <Input
          placeholder="Username"
          {...register("username")}
          className="mt-3"
        />
        {errors.username?.message && (
          <p className="text-red-500  text-sm ml-2 mt-1">
            {errors.username?.message}
          </p>
        )}
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
          Create Account
        </Button>
      </form>
    </div>
  );
};

export default Signup;
