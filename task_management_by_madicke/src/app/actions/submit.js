"use server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const BoardSchema = z.object({
  name: z.string(),
  userId: z.string(),
  columns: z.array(z.unknown()),
});

const TaskSchema = z.object({
  description: z.string(),
  titre: z.string(),
  columnId: z.string(),
  Subtasks: z.array(z.unknown()),
});

export const submit = async (formdata) => {
  const prisma = new PrismaClient();

  const columns = JSON.parse(formdata.get("columns")).map((item) => item.value);
  const name = formdata.get("boardName");
  const userId = formdata.get("userId");
  const data = {
    name,
    userId,
    columns,
  };
  // console.log(data.columns);
  try {
    const parsedData = BoardSchema.parse(data);
    parsedData &&
      (await prisma.board.create({
        data: {
          ...parsedData,
          columns: {
            create: data.columns.map((item) => ({ name: item })),
          },
        },
        include: {
          columns: true,
        },
      }));
  } catch (err) {
    console.log(err);
  }
};

export const createTask = async (formdata) => {
  let columnId;
  const prisma = new PrismaClient();
  const Subtasks = JSON.parse(formdata.get("subtasks")).map(
    (item) => item.value
  );
  const titre = formdata.get("taskName");
  const currentStatus = formdata.get("status");
  const description = formdata.get("description");
  const userId = formdata.get("userId");
  const boardColumns = JSON.parse(formdata.get("columns"));

  boardColumns.forEach((element) => {
    if (element.name === currentStatus) columnId = element.id;
  });

  const data = {
    description,
    titre,
    currentStatus,
    Subtasks,
    columnId,
  };
  console.log(data);
  try {
    const parsedData = TaskSchema.parse(data);
    parsedData &&
      (await prisma.task.create({
        data: {
          ...parsedData,
          currentStatus,
          Subtasks: {
            create: parsedData.Subtasks.map((item) => ({
              name: item,
              isDone: false,
            })),
          },
        },
      }));
  } catch (err) {
    console.log(err);
  }
};

export const checkSubtask = async (formdata) => {
  const prisma = new PrismaClient();
  const subtaskId = formdata.get("subtaskId");
  console.log(subtaskId);
  try {
    await prisma.subtask.update({
      where: { id: subtaskId },
      data: { isDone: true },
    });
  } catch (err) {
    console.log(err);
  }
};
export const deleteBoard = async (formdata) => {
  const boardId = formdata.get("id");
  const prisma = new PrismaClient();

  try {
    const boardToDelete = await prisma.board.findUnique({
      where: { id: boardId },
      include: {
        columns: {
          include: {
            Tasks: {
              include: {
                Subtasks: true,
              },
            },
          },
        },
      },
    });

    if (!boardToDelete) {
      console.error(`Board with ID ${boardId} not found.`);
      return;
    }

    await Promise.all(
      boardToDelete.columns.map(async (column) =>
        column.Tasks.map(async (task) => {
          await Promise.all(
            task.Subtasks.map(async (subtask) => {
              await prisma.subtask.delete({
                where: { id: subtask.id },
              });
            })
          );
          await prisma.task.delete({
            where: { id: task.id },
          });
        })
      )
    );
    await Promise.all(
      boardToDelete.columns.map(async (column) => {
        await prisma.column.delete({ where: { id: column.id } });
      })
    );
    await prisma.board.delete({
      where: { id: boardId },
    });
    // revalidatePath('/board', 'layout');
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect();
  }
};

export const changeTaskStatus = async (FormData) => {
  const prisma = new PrismaClient();
  const taskid = FormData.get("taskId");
  const statusName = FormData.get("status");

  try {
    await prisma.task.update({
      where: { id: taskid },
      data: {
        currentStatus: statusName,
      },
    });
  } catch (err) {
    console.log(err);
  }
  console.log(taskid, statusName);
};
