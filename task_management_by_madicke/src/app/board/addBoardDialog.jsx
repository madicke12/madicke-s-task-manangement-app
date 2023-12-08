
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PlusIcon } from "@heroicons/react/24/solid";
import { AddBoardForm } from "./addBoardForm";

export async function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <PlusIcon height={20} /> Add new Board
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <AddBoardForm/>
      </DialogContent>
    </Dialog>
  );
}
