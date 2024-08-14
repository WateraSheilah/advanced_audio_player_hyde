import StreamTargetListView from "../StreamTargets/TargetsListView";
import PreviewSection from "../Preview/PreviewSection";
import LinkButton from "../Buttons/LinkButton";
import { Separator } from "@/components/ui/separator";

function StreamingPage(props) {
  return (
    <div className=" text-white mx-auto min-w-max">
      <div className=" h-4" />
      <LinkButton href="/" title="Back" isBack />
      <div className="flex flex-row justify-center">
        <PreviewSection people={props.targets} />
        <Separator orientation="vertical" className=" h-[70vh]" />
        <StreamTargetListView
          deleteItem={props.deleteItem}
          updateItem={props.updateItem}
          people={props.targets}
          addTarget={props.addTarget}
        />
      </div>
    </div>
  );
}

export default StreamingPage;
