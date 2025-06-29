import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Signup = () => {
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
      <form action="">
        <Input placeholder="Username" name="username" className="mb-3" />
        <Input placeholder="Email" name="email" className="mb-3" />
        <Input placeholder="Password" name="password" className="mb-3" />
        <Button type="submit" className="w-full  ">
          Create Account
        </Button>
      </form>
    </div>
  );
};

export default Signup;
