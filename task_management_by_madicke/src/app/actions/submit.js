"use server";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { authOption } from "../api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from 'next/cache'

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
            create: parsedData.Subtasks.map((item) => ({ name: item })),
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

export const deleteBoard =async (formdata) => {
  const boardId = formdata.get("id");
  const prisma = new PrismaClient();
  try{
    await prisma.board.delete({
      where:{id:boardId}
    })
  }
  catch(err){
    console.log(err)
  }
};
