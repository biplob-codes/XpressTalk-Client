import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { userSignupSchema, type UserSignUpType } from "@/schema/auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<UserSignUpType>({ resolver: zodResolver(userSignupSchema) });
  const onSignup: SubmitHandler<UserSignUpType> = (data) => {
    console.log(data);
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
        <Button type="submit" className="w-full mt-5 ">
          Create Account
        </Button>
      </form>
    </div>
  );
};

export default Signup;
