import Input from "@/components/ui/input";
import { createUser } from "@/lib/createUser";
import { Facebook } from "lucide-react";
import { getSession, signIn, signOut, useSession } from "next-auth/react";

import { Fragment, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

function AuthPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [isLogin, setIsLogin] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { data: session, status } = useSession();

  useEffect(() => {
    getSession().then((gsession) => {
      if (gsession) {
        window.location.href = "/";
      } else {
        setIsLoading(false);
      }
    });
  }, [session]);

  if (isLoading) {
    return (
      <p className=" text-white ml-auto mr-auto mt-[100px] w-fit h-fit">
        Loading......
      </p>
    );
  }

  async function submitHandler() {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    setIsProcessing(true);
    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        callbackUrl: "/stream",
        email: email,
        password: password,
      });
      if (result.error === null && result.status === 200) {
        setIsProcessing(false);
        toast.success("Logged in", {
          duration: 4000,
          position: "bottom-right",
        });
      } else {
        setIsProcessing(false);
        toast.error(result.error, {
          duration: 4000,
          position: "bottom-right",
        });
      }
    } else {
      createUser(email, password)
        .then(async (response) => {
          if (response.ok) {
            await signIn("credentials", {
              redirect: false,
              callbackUrl: "/stream",
              email: email,
              password: password,
            });
            setIsProcessing(false);
          }
        })
        .catch((err) => {
          toast.error("Something went wrong");
          setIsProcessing(false);
        });
    }
  }

  return (
    <Fragment>
      {/* <NavigationBar /> */}
      <div className="bg-[#3c3e47] h-screen items-center flex">
        <div className="w-[430px] h-[480px] ml-auto mr-auto bg-[#13161E] rounded-lg py-8 text-white shadow-xl shadow-[#dedede0a]">
          <h1 className=" flex justify-center text-3xl">
            <h1 className=" text-white">H-</h1>
            <h1 className=" text-[#FF8B67]">STREAMER</h1>
          </h1>
          {/* 
          <h1 className="pt-14 pb-3 text-center">Login with</h1>
          <div className=" flex justify-center pt-3">
            <button
              onClick={switchModeHandler}
              className=" bg-[#42454B] w-[110px] h-[50px] rounded-xl hover:bg-[#27292e] border border-transparent hover:border-[#ffffff] m-1 flex justify-center items-center px-1"
            >
              <h1 className=" rounded-full mr-2 font-extrabold text-3xl text-[#4285F4]">
                G
              </h1>
              <h1>Google</h1>
            </button>
            <button
              onClick={switchModeHandler}
              className="bg-[#42454B] h-[50px] rounded-xl hover:bg-[#27292e] border border-transparent hover:border-[#ffffff] m-1 flex justify-center items-center px-1"
            >
              <Facebook
                height="30px"
                width="30px"
                className=" bg-[#1877F2] rounded-full mr-2"
              />
              <h1>Facebook</h1>
            </button>
          </div>
          <h1 className=" text-center mt-6 font-normal text-xl">OR</h1> */}
          <div className="pt-6 w-[300px] ml-auto mr-auto">
            <div>
              <h3 className=" text-sm">Email</h3>
              <Input
                ref={emailRef}
                className=" m-2 left-0 ml-0 bg-[#2b2d35]"
                placeholder="email address"
              />
            </div>
            <div>
              <h3 className=" text-sm">Password</h3>
              <Input
                ref={passwordRef}
                className=" m-2 ml-0 bg-[#2b2d35]"
                placeholder="password"
              />
              {isLogin && (
                <button className="text-xs float-right">Forgot password</button>
              )}
            </div>
          </div>
          <button
            onClick={submitHandler}
            className=" block ml-auto mr-auto bg-red-300 hover:bg-red-400 mt-14 py-3 px-3 w-40 rounded-lg border border-transparent hover:border-white"
          >
            {isLogin
              ? isProcessing
                ? "Loading.."
                : "Login"
              : isProcessing
              ? "Loading.."
              : "Create User"}
          </button>
          <h1 className=" text-center mt-6 font-normal text-xl">OR</h1>
          <div className=" bg-[#a7a7a7] h-[1px] w-[400px] ml-auto mr-auto mt-2" />
          <button
            onClick={() => setIsLogin(!isLogin)}
            className=" block mt-3 font-normal text-lg ml-auto mr-auto"
          >
            {isLogin
              ? "Signup to get started"
              : "Already have an account Login"}
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default AuthPage;
