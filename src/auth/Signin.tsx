import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Signin = () => {
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
      <form action="">
        <Input placeholder="Email" name="email" className="mb-3" />
        <Input placeholder="Password" name="password" className="mb-3" />
        <Button type="submit" className="w-full  ">
          Sign in
        </Button>
      </form>
    </div>
  );
};

export default Signin;
