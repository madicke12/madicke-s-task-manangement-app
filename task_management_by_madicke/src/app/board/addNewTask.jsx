
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlusIcon } from "@heroicons/react/24/solid";
import { getServerSession } from "next-auth";
import { authOption } from "../api/auth/[...nextauth]/route";
import DynamicInput from "./dynamic-input";
import StatusSelect from "./select";
import { PrismaClient } from "@prisma/client";
import { createTask } from "../actions/submit";

const AddNewTask = async({id}) => {
  const prisma = new PrismaClient()  
  const session= await getServerSession(authOption)
  const board = await prisma.board.findUnique({
    where: { id },
    include: {
      columns: true,
    },
  });
  return (
    <Dialog  >
      <DialogTrigger>
        <Button className="hover:bg-slate-400">
          <PlusIcon height={20} />
          Add new Task
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
        </DialogHeader>
        <form action={createTask}>
          <div className="mb-3">
            <Label htmlFor="name">Task Name</Label>
            <Input
              id="name"
              className="mt-2"
              placeholder="e.g Do my homework"
              name="taskName"
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="description" className="mb-2">
              Description
            </Label>
            <Textarea id="description" className="mt-2" placeholder="" name="description" />
          </div>
          <div className="flex flex-col">
            <Label className="mb-2">Subtasks</Label>
            <DynamicInput/>
            <div className="mt-2">
            <Label className='mb-2'>Current Status</Label>
            <StatusSelect/>
            </div>
          </div>
          <input type="text" value={session.user.id} className="hidden" name="userId" />
          <input type="text" value={JSON.stringify(board.columns)} className="hidden" name="columns" />
      <DialogFooter>
        <Button className="w-full mt-2 dark:hover:bg-white dark:hover:text-zinc-950" type="submit">
          Create new Task
        </Button>
      </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewTask;
