import { VideoCameraIcon } from "@heroicons/react/24/solid";
import { Fragment, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

function PlayerView(props) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <Fragment>
      {!props.isLoaded ? (
        <div className="border border-[#3B3D43] bg-[#272931] rounded-none aspect-video">
          <div className=" mt-[11%]">
            <h1 className=" text-4xl text-center">No Preview</h1>
            <VideoCameraIcon className=" pt-5 w-24 text-yellow-100 content-center block ml-auto mr-auto " />
            <h1 className=" text-center w-[70%] ml-auto mr-auto pt-6">
              Copy and paste streaming settings into your streaming software to
              start
            </h1>
          </div>
        </div>
      ) : (
        <div className="border border-[#3B3D43] bg-[#000000] rounded-none aspect-video p-0">
          {isLoaded && (
            <iframe
              width="100%"
              height="100%"
              src={`${process.env.flussonic_url}/${props.uid}/embed.html?autoplay=1&mute=0?realtime=true`}
              // rc={`https://s.hydeug.com/65228373008566efab9bf451/embed.html?autoplay=1&mute=0?realtime=true`}
              allowFullScreen
            />
          )}
        </div>
      )}
    </Fragment>
  );
}

export default PlayerView;
