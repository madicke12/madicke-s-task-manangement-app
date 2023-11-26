const Task=({Board})=>{
    return(
        <main className="flex w-full h-full overflow-y-auto overflow-x-auto mt-3  p-3">
        {Board.columns.map((column, index) => (
          <div
            key={column.id}
            className="ml-3 flex flex-col flex-shrink-0 w-[280px] rounded-md  p-2"
          >
            <span
              className={`mb-4 rounded-xl w-fit px-1  ${
                column.name === "Done" ? "bg-green-400" : null
              } ${column.name === "To Do" ? "bg-sky-300" : null} ${
                column.name === "In Progress" ? "bg-yellow-300" : null
              }`}
            >{`${column.name} (${column.Tasks.length})`}</span>
            {column.Tasks.map((item) => (
              <Card
                className=" w-[270px] h-[100px] "
                key={item.id}
              >
                <CardHeader>
                  <span className="text-xl">{item.titre}</span>
                </CardHeader>
                <CardContent >
                  <p>0 of 3 task</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ))}
      </main>
    )
}

export default Task