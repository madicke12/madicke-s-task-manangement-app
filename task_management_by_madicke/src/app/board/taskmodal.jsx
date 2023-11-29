import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TrashIcon } from "@heroicons/react/24/solid";
import { Label } from "@/components/ui/label";

const TaskModal = ({ madicke }) => {
  //console.log(madicke.Subtasks)
  return (
    <Dialog>
      <DialogTrigger>
        <Card className=" w-[270px] h-fit ">
          <CardHeader className="text-left">
            <span className="text-xl ">{madicke.titre}</span>
          </CardHeader>
          <CardContent className="text-left">
            <p>0 of 3 task</p>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{madicke.titre}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col">
          <span>Subtask {" (1 of 3)"} </span>

          {madicke.Subtasks.map((cisse) => (
            <div className="hover:bg-slate-200 px-1 mt-2 flex items-center" key={cisse.taskId}>
             <Input className='w-[17px] mr-2' type='checkbox' id='task'/> <Label htmlFor='task'>{cisse.name}</Label>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TaskModal;
