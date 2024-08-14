// import { Divider } from "@mui/joy";
import { Separator } from "@radix-ui/react-dropdown-menu";
import NavigationButton from "../Buttons/NavigationButton";
import TextViewField from "../TextViewField/TextViewField";
import { useState } from "react";

function ConfigView(props) {
  const [isRTMP, setRTMP] = useState(false);
  const [isSRT, setSRT] = useState(true);
  const [isOBS, setOBS] = useState(false);
  const [isVMIX, setVMIX] = useState(true);

  function srtHandler() {
    if (isSRT) return;
    setSRT(true);
    setRTMP(false);
  }
  function rtmptHandler() {
    if (isRTMP) return;
    setRTMP(true);
    setSRT(false);
  }
  function vmixtHandler() {
    if (isVMIX) return;
    setVMIX(true);
    setOBS(false);
  }
  function obstHandler() {
    if (isOBS) return;
    setOBS(true);
    setVMIX(false);
  }

  return (
    <div className=" h-[329px] w-[652px]">
      <div className="flex justify-start h-[100px] border border-transparent border-b-[#ffffff23] ">
        <div className=" mt-auto mb-auto">
          <h1>Choose protocol</h1>
          <div className=" py-2 flex justify-between w-[140px]">
            <NavigationButton
              className=" px-3 w-[60px]"
              title="SRT"
              isEnabled={isSRT}
              onClick={srtHandler}
            />
            <NavigationButton
              className=" px-3 w-[60px]"
              title="RTMP"
              isEnabled={isRTMP}
              onClick={rtmptHandler}
            />
          </div>
        </div>
        <div className=" bg-[#ffffff23]  w-[0.5px] ml-4 mr-4" />
        <div className="mt-auto mb-auto">
          <h1>Choose encoder</h1>
          <div className=" py-2 flex justify-between w-[140px]">
            <NavigationButton
              className=" px-3 w-[60px]"
              title="VMIX"
              isEnabled={isVMIX}
              onClick={vmixtHandler}
            />
            <NavigationButton
              className=" px-3 w-[60px]"
              title="OBS"
              isEnabled={isOBS}
              onClick={obstHandler}
            />
          </div>
        </div>
      </div>
      {isSRT && isVMIX ? (
        <div>
          <TextViewField
            onClick={async () => {
              await navigator.clipboard.writeText(process.env.flussonic_domain);
            }}
            title="Hostname"
            url={process.env.flussonic_domain}
          />
          <TextViewField
            onClick={async () => {
              await navigator.clipboard.writeText("1180");
            }}
            title="Stream port"
            url={process.env.flussonic_srt_port}
          />
          <TextViewField
            onClick={async () => {
              await navigator.clipboard.writeText(
                `#!::r=${props.uid},m=publish`
              );
            }}
            title="Stream ID"
            url={`#!::r=${props.uid},m=publish`}
          />
        </div>
      ) : (
        ""
      )}
      {isSRT && isOBS ? (
        <div>
          <TextViewField
            onClick={async () => {
              await navigator.clipboard.writeText(
                `srt://${process.env.flussonic_domain}:${process.env.flussonic_srt_port}?streamid=#!::r=${props.uid},m=publish`
              );
            }}
            title="Server"
            url={`srt://${process.env.flussonic_domain}:${process.env.flussonic_srt_port}?streamid=#!::r=${props.uid},m=publish`}
          />
        </div>
      ) : (
        ""
      )}
      {isRTMP && isVMIX ? (
        <div>
          <TextViewField
            onClick={async () => {
              await navigator.clipboard.writeText(
                `rtmp://${process.env.flussonic_domain}:${process.env.flussonic_rtmp_port}/static/`
              );
            }}
            title="Url"
            url={`rtmp://${process.env.flussonic_domain}:${process.env.flussonic_rtmp_port}/static/`}
          />
          <TextViewField
            onClick={async () => {
              await navigator.clipboard.writeText(props.uid);
            }}
            title="Stream name or key"
            url={props.uid}
          />
        </div>
      ) : (
        ""
      )}
      {isRTMP && isOBS ? (
        <div>
          <TextViewField
            title="Server"
            onClick={async () => {
              await navigator.clipboard.writeText(
                `rtmp://${process.env.flussonic_domain}:${process.env.flussonic_rtmp_port}/static/`
              );
            }}
            url={`rtmp://${process.env.flussonic_domain}:${process.env.flussonic_rtmp_port}/static/`}
          />
          <TextViewField
            onClick={async () => {
              await navigator.clipboard.writeText(props.uid);
            }}
            title="Stream key"
            url={props.uid}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ConfigView;
