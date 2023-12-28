'use client'
import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DynamicInput from "./dynamic-input";

import { useSession } from "next-auth/react";
import { submit } from "../actions/submit";

 export const AddBoardForm =  () => {
  const {data} = useSession()
  return (
    <form  method="post" action={submit}>
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
          <input className="hidden" value={data.user.id} name="userId"/>
         <input type="text" className="hidden" value={JSON.stringify(['To Do','Doing','Done'])} readOnly name="columns" />
        </div>
      </div>
      <DialogFooter>
        <Button className="w-full dark:hover:bg-white dark:hover:text-black" type="submit">
          Create new Board
        </Button>
      </DialogFooter>
    </form>
  );
};
