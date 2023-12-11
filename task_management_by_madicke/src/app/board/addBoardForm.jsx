'use server'
import { addBoard } from "../utils/actions";
import DynamicInput from "./dynamic-input";

import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
export const AddBoardForm = async () => {
  return (
    <form  method="post">
      <DialogHeader>
        <DialogTitle>Add new Board</DialogTitle>
        <DialogDescription>
          Add a new board here click Create new Board when you're done
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-1 items-center gap-4">
          <Label htmlFor="Boardname" className="">
            Board Name
          </Label>
          <Input
            name="boardName"
            id="Boardname"
            placeholder="eg: Marketing Plan "
            className="col-span-3"
          />
        </div>
        <div className="flex flex-col   mt-4 gap-4">
          <span>Board columns</span>
          <DynamicInput type="columns" />
        </div>
      </div>
      <DialogFooter>
        <Button className="w-full" type="submit">
          Create new Board
        </Button>
      </DialogFooter>
    </form>
  );
};
