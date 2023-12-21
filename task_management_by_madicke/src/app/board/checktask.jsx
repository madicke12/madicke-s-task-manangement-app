import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

const CheckTask =({cisse})=>{
    return(
        <form action="">
            <div className="hover:bg-slate-800 bg-zinc-600 rounded-sm px-1 mt-2 flex items-center"   >
             <Input className='w-[17px] mr-2' type='checkbox' id='task'/> <Label htmlFor='task'>{cisse.name}</Label>
            </div>
            
        </form>
    )
}

export default CheckTask