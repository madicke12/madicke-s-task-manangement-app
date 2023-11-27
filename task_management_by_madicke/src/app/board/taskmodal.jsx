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
import { Card,CardContent ,CardHeader } from "@/components/ui/card";
import {TrashIcon} from '@heroicons/react/24/solid'

const TaskModal = ({madicke}) => {
    console.log(madicke)
  return (
    <Dialog>
      <DialogTrigger>
        <Card className=" w-[270px] h-[100px] ">
          <CardHeader>
            <span className="text-xl">{madicke.titre}</span>
          </CardHeader>
          <CardContent>
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
          <form action="">
            {madicke.subtasks.map((item) => {
              <div className="p-2 bg-slate-600 text-white">
                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input type="checkbox" />
                    <Button asChild ><TrashIcon height={20}></TrashIcon></Button>
                </div>
              </div>;
            })}
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};


export default TaskModal