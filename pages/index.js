import HomePage from "@/components/Home/HomePage";
import NavigationBar from "@/components/Navigation/NavigationBar";
import { getSession, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

function HomeScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const { data: session, status } = useSession();

  useEffect(() => {
    getSession().then((gsession) => {
      if (!gsession) {
        window.location.href = "/auth";
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
  return (
    <div className=" pt-16">
      <NavigationBar />
      <HomePage />
    </div>
  );
}
export default HomeScreen;
