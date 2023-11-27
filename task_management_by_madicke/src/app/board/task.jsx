import { Card,CardContent ,CardHeader } from "@/components/ui/card";

const Task=(item)=>{

    return (
      <Card className=" w-[270px] h-[100px] " key={item.id}>
        <CardHeader>
          <span className="text-xl">{item.titre}</span>
        </CardHeader>
        <CardContent>
          <p>0 of 3 task</p>
        </CardContent>
      </Card>
    );
}

export default Task