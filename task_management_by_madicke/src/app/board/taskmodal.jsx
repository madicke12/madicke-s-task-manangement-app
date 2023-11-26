
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import Task from "./task"
const TaskModal=(Board)=>{
    return(
        <Dialog>
            <DialogTrigger>
                <Task Board={Board}/>
            </DialogTrigger>

        </Dialog>
        
    )
}