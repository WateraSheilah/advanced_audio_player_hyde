import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import NavigationButton from "../Buttons/NavigationButton";
import Input from "../ui/input";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { DialogClose, DialogTrigger } from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Plus } from "lucide-react";

function AddTargetModal(props) {
  const titleRef = useRef(null);
  const urlRef = useRef(null);
  const keyRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  function handleSubmit(data) {
    data.preventDefault();
    if (
      !titleRef.current.value ||
      !urlRef.current.value ||
      !keyRef.current.value
    ) {
      toast.error("All fields should be added", {
        duration: 4000,
        position: "bottom-right",
      });
      return;
    } else {
      props.onSubmit({
        title: titleRef.current.value,
        url: urlRef.current.value,
        key: keyRef.current.value,
      });
      setIsOpen(false);
    }
  }
  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <NavigationButton
          onClick={() => !setIsOpen(!isOpen)}
          title="Add Destination"
          withIcon
          icon={<Plus />}
          className=" border border-[#ffffff36] hover:border-white px-4 py-1 rounded-md"
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100 data-[state=open]:text-gray-500 dark:ring-offset-gray-950 dark:focus:ring-gray-300 dark:data-[state=open]:bg-gray-800 dark:data-[state=open]:text-gray-400"
        >
          <Cross2Icon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        <DialogHeader>
          <DialogTitle>Add Destination</DialogTitle>
          <DialogDescription>
            You can add a target by adding a stream key and url using RTP to
            Facebook, Youtube, etc
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input id="title" className="col-span-3" ref={titleRef} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="url" className="text-right">
              Url
            </Label>
            <Input id="url" className="col-span-3" ref={urlRef} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="key" className="text-right">
              Key
            </Label>
            <Input id="key" className="col-span-3" ref={keyRef} />
          </div>
        </form>
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={handleSubmit}>Submit changes</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddTargetModal;
