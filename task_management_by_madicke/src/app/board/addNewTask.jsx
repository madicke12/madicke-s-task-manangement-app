
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlusIcon } from "@heroicons/react/24/solid";
import DynamicInput from "./dynamic-input";
import StatusSelect from "./select";

const AddNewTask = () => {  
  
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
        <form action="">
          <div className="mb-3">
            <Label htmlFor="name">Task Name</Label>
            <Input
              id="name"
              className="mt-2"
              placeholder="e.g Do my homework"
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="description" className="mb-2">
              Description
            </Label>
            <Textarea id="description" className="mt-2" placeholder="" />
          </div>
          <div className="flex flex-col">
            <Label className="mb-2">Subtasks</Label>
            <DynamicInput/>
            <div className="mt-2">
            <Label className='mb-2'>Current Status</Label>
            <StatusSelect/>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewTask;
