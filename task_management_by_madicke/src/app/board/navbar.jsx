

import { Menubar } from '@/components/ui/menubar'
import { ModeToggle } from "./mode-toggle"
import AddNewTask from "./addNewTask"
import Profile from '@/components/profile'



export default function Navbar({boardName}) {
  console.log(boardName)
  return (
    <Menubar
      className="flex px-3 py-4 w-full rounded-lg h-20 "
      variant="outline"
    >
      <div className="flex-1">
        <span className="text-xl">{boardName}</span>
      </div>
      <div className="flex items-center gap-2">
        <AddNewTask/>
        <ModeToggle />
        <Profile/>
      </div>
    </Menubar>
  );
}
