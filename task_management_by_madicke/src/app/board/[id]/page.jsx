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
  const task = Board.columns.map((item) => item.Tasks);
  const taskTodo = task
    .map((item) => item.filter((item) => item.curentStatus === "To Do"))
    .filter((item) => item.length > 0);
  const taskDoing = task
    .map((item) => item.filter((item) => item.curentStatus === "Doing"))
    .filter((item) => item.length > 0);
  const taskDone = task
    .map((item) => item.filter((item) => item.curentStatus === "Done"))
    .filter((item) => item.length > 0);

  console.log(taskDone);
  console.log(taskDoing);
  console.log(taskDone);
  //   console.log(task)
  return (
    <main className="flex h-screen mb-2 bg-base-200 overscroll-x-scroll ">
      {Board.columns.map((column, index) => (
        <div
          key={index}
          className="ml-3 flex flex-col flex-shrink-0 w-[280px rounded-md  px-2"
        >
          <span className="ml-2">{`${column.name} (${column.Tasks.length})`}</span>
          {column.Tasks.map((item) => (
            <div className="card w-[270px] bg-base-100 shadow-xl" key={item.id}>
              <div className="card-body">
                <h2 className="card-title">{item.titre}</h2>
                <p>0 of 3 task</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </main>
  );
};

export default boardPage;
