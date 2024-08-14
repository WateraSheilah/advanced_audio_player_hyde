import useSWR from "swr";
import ConfigView from "./ConfigView";
import PlayerView from "./PlayerView";

async function dbFencher() {
  const response = await fetch("/api/v1/user/info", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = response.json();
  return data;
}
async function fluFencher() {
  const response = await fetch("/api/v1/streaminfo", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = response.json();
  return data;
}
function PreviewSection(props) {
  const { data, error, isLoading, mutate } = useSWR(
    "/api/v1/user/info",
    dbFencher
  );
  const {
    data: fluData,
    error: fluError,
    isLoading: fluLoading,
    mutate: fluMutate,
  } = useSWR("/api/v1/streaminfo", fluFencher, { refreshInterval: 3 });

  if (isLoading || fluLoading)
    return <div className=" text-white">Loading</div>;
  if (error || fluError)
    return <div className=" text-white">Error occured</div>;

  return (
    <div className=" mx-10 px-1 w-[48%]">
      <PlayerView
        isLoaded={fluData.stats.status === "running"}
        uid={data._id}
      />
      <ConfigView uid={data._id} />
    </div>
  );
}

export default PreviewSection;
