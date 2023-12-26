import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import CheckTask from "./checktask";
import { TaskStatusSelect } from "./taskStatusSelect";

const TaskModal = ({ madicke }) => {
  //console.log(madicke.Subtasks)
  return (
    <Dialog>
      <DialogTrigger>
        <Card className=" w-[270px] h-fit overflow-hidden">
          <CardHeader className="text-left p-2 overflow-ellipsis">
            <span className="text-xl ">{madicke.titre}</span>
          </CardHeader>
          <CardContent className="text-left p-2">
            <p className="mb-2 text-slate-400 text-ellipsis">
              {madicke.description + "adjksnadoandakndakdnakdnakdnkdkdn"}
            </p>
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
            <CheckTask key={cisse.id} cisse={cisse} />
          ))}
          <div className=" px-1 mt-2  items-center">
            <span>Current status</span>
           <TaskStatusSelect/>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TaskModal;
