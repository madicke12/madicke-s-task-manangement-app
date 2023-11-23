import { PrismaClient } from "@prisma/client";

const boardPage = async ({ params: params }) => {
  const prisma = new PrismaClient();
  const id = params.id;
  console.log(id);
  const Board = await prisma.board.findUnique({
    where: { id },
    include: {
      columns: { include: { Tasks: { include: { Subtasks: true } } } },
    },
  });
//   console.log(
//     Board.columns.forEach((item) =>
//       item.Tasks.forEach((item) => console.log(item.Subtasks))
//     )
//   );
  const task = Board.columns.map(item => item.Tasks)
  const taskTodo = task.map(item => item.filter(item =>item.curentStatus === 'To Do' )).filter(item => item.length>0)
  const taskDoing = task.map(item => item.filter(item =>item.curentStatus === 'Doing' )).filter(item => item.length>0)
  const taskDone = task.map(item => item.filter(item =>item.curentStatus === 'Done' )).filter(item => item.length>0)

  console.log(taskDone)
  console.log(taskDoing)
  console.log(taskDone)
//   console.log(task)
  return (
    <main className="flex h-screen mb-2">
      <div className=" flex flex-col w-[280px] outline rounded-md h-full p-2">
        <span className="">{` To do (${taskTodo.length})`}</span>
      </div>
      <div className="ml-3 flex flex-col w-[280px] outline rounded-md h-full p-2">
        <span className="">{` Doing (${taskDoing.length})`}</span>
      </div>
      <div className="ml-3 flex flex-col w-[280px] outline rounded-md h-full p-2">
      <span className="">{` Done (${taskDone.length})`}</span>
      </div>
      <div>

      </div>
    </main>
  );
};

export default boardPage;
