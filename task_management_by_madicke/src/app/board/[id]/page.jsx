import { PrismaClient } from "@prisma/client";
import Navbar from "../navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TaskModal from "../taskmodal";

const boardPage = async ({ params: params }) => {
  const prisma = new PrismaClient();
  const id = params.id;
 // console.log(id);
  const Board = await prisma.board.findUnique({
    where: { id },
    include: {
      columns: { include: { Tasks: { include: { Subtasks: true } } } },
    },
  });

  return (
    <>
      <Navbar boardName={Board.name} id={id} />
      <main className="flex w-full h-full overflow-y-scroll overflow-x-auto mt-3  p-3">
        {Board.columns.map((column, index) => (
          <div
            key={column.id}
            className="ml-3 flex flex-col flex-shrink-0 w-[280px] rounded-md  p-2"
          >
            <span
              className={`mb-4 rounded-xl w-fit px-1 font-bold ${
                column.name === "Done" ? "bg-green-800" : null
              } ${column.name === "To Do" ? "bg-sky-800" : null} ${
                column.name === "Doing" ? "bg-yellow-800" : null
              }`}
            >{`${column.name} (${column.Tasks.length})`}</span>

            {column.Tasks.map((item) => (
            <TaskModal key={item.id} madicke={item}/>
            ))}
          </div>
        ))}
      </main>
      
    </>
  );
};

export default boardPage;
