import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {PlusIcon} from "@heroicons/react/24/solid"
import DynamicInput from "./dynamic-input"

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" ><PlusIcon height={20}/> Add new Board</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action="">
        <DialogHeader>
          <DialogTitle>Add new Board</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="Boardname" className="">
              Board Name
            </Label>
            <Input
              id="Boardname"
              placeholder="eg: Marketing Plan "
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col   mt-4 gap-4">
           <span>Board columns</span>
           <DynamicInput type='columns'/>
          </div>
        </div>
        <DialogFooter>
          <Button className="w-full" type="submit">Create new Board</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
