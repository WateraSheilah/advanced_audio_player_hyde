import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export function DeleteTargetModal(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover
      open={isOpen}
      modal={true}
      onInteractOutside={() => setIsOpen(false)}
    >
      <PopoverTrigger asChild>
        <Button
          onClick={() => setIsOpen(true)}
          variant="ghost"
          size="icon"
          className=" p-0 h-6 w-6 mb-3"
        >
          <XMarkIcon className=" text-red-400 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
          <h1 className="text-lg font-semibold">
            Are you sure you want to delete target?
          </h1>
          <h2 className="text-sm text-gray-500 dark:text-gray-400 pb-2">
            This action cannot be undone. To be able to push to the destination,
            you will have to recreate the target
          </h2>
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <Button
            onClick={() => setIsOpen(false)}
            variant="outline"
            className="mt-2 sm:mt-0"
          >
            Cancel
          </Button>
          <Button
            onClick={() => props.onClick().then(() => setIsOpen(false))}
            variant="outline"
            className="mt-2 sm:mt-0 bg-[#FF6565] text-white hover:bg-[#dd5656] hover:text-white "
          >
            Delete
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
