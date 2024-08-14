import NavigationBar from "@/components/Navigation/NavigationBar";
import { getSession, useSession } from "next-auth/react";
import { Fragment, useEffect, useState } from "react";

function Settings() {
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
    <Fragment>
      <NavigationBar />
      <h1 className=" text-white pt-16">Settings Page</h1>
    </Fragment>
  );
}

export default Settings;
