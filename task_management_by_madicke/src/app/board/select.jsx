import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const StatusSelect = () => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="chose the status" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="To Do">To Do</SelectItem>
        <SelectItem value="Doing">Doing</SelectItem>
        <SelectItem value="Done">Done</SelectItem>
      </SelectContent>
    </Select>
  );
};


export default StatusSelect