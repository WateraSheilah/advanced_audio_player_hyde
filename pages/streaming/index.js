import StreamingPage from "@/components/Home/StreamingPage";
import NavigationBar from "@/components/Navigation/NavigationBar";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useSWR from "swr";
import {
  addTargetMutation,
  addTargetMutationOptions,
  deleteTargetMutation,
  deleteTargetMutationOptions,
  updateTargetHelper,
} from "@/helpers/targetsMutation";

async function fetcher() {
  const response = await fetch("/api/v1/targets");
  const data = await response.json();
  return data;
}

function Streaming() {
  const [isSessionLoading, setisSessionLoading] = useState(true);
  const {
    data: targets,
    error,
    isLoading,
    mutate,
  } = useSWR("/api/v1/targets", fetcher, {
    refreshInterval: 0,
    onSuccess: (data) => data.sort((a, b) => a.created_at - b.created_at),
  });

  const toastSuccess = (data) =>
    toast.success(data, { duration: 4000, position: "bottom-right" });
  const toasterror = (data) =>
    toast.error(data, { duration: 4000, position: "bottom-right" });

  useEffect(() => {
    getSession().then((gsession) => {
      if (!gsession) {
        window.location.href = "/auth";
      } else {
        setisSessionLoading(false);
      }
    });
  }, []);

  if (isSessionLoading) {
    return (
      <p className=" text-white ml-auto mr-auto mt-[100px] w-fit h-fit">
        Loading......
      </p>
    );
  }

  if (isLoading) return <div>Loading</div>;
  if (error) return <div>Error loading data</div>;

  async function addTargetHAndler({ title, url, key }) {
    const newTarget = {
      created_at: Date.now().toFixed(),
      title: title,
      url: url,
      streamKey: key,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      description: " A new streaming solution",
      status: "running",
      disabled: true,
    };

    await mutate(
      addTargetMutation(newTarget, targets, toastSuccess, toasterror),
      addTargetMutationOptions(newTarget, targets)
    );
  }
  async function deleteItem(id) {
    await mutate(
      deleteTargetMutation(targets, id, toastSuccess, toasterror),
      deleteTargetMutationOptions(id, targets)
    );
  }
  async function updateItem(id, title, disabled) {
    await updateTargetHelper(id, disabled).then((response) => {
      if (response.ok) {
        toastSuccess(
          `${title} has been ${
            disabled ? "disabled successfuly" : "enabled successfully"
          }`
        );
        mutate();
      } else {
        toasterror("something went wrong");
      }
    });
  }

  return (
    <div className=" pt-16">
      <NavigationBar isStreaming />
      <StreamingPage
        targets={targets}
        addTarget={addTargetHAndler}
        deleteItem={deleteItem}
        updateItem={updateItem}
      />
    </div>
  );
}
export default Streaming;
