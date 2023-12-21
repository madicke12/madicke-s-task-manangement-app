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
import CheckTask from "./checktask";
import StatusSelect from "./select"


const TaskModal = ({ madicke }) => {
  //console.log(madicke.Subtasks)
  return (
    <Dialog>
      <DialogTrigger >
        <Card className=" w-[270px] h-fit ">
          <CardHeader className="text-left ">
            <span className="text-xl ">{madicke.titre}</span>
            <p className="mb-2 text-slate-400 text-ellipsis" >{madicke.description +"adjksnadoandakndakdnakdnakdnkdkdn"}</p>
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
            <CheckTask key={cisse.taskId} cisse={cisse}/>
          ))}
          <div className=" px-1 mt-2  items-center"   >
                <span>Current status</span>
                <StatusSelect/>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TaskModal;
