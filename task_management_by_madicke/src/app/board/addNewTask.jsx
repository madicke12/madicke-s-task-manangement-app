import Dialog from "@/components/modal";
import { Button } from "@/components/ui/button";
import {
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusIcon } from '@heroicons/react/24/solid';

const AddNewTask=()=>{
    return(
        <Dialog>
            <DialogTrigger>
                <Button variant="outline"><PlusIcon height={20}/>Add new Task</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Add New Task</DialogTitle>
                </DialogHeader>
                <form action="">
                    <div>
                        <Label htmlFor='name'>Task Name</Label>
                        <Input id='name' placeholder='e.g Do my homework' />
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default AddNewTask