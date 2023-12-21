"use server";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { authOption } from "../api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";

const BoardSchema = z.object({
  name: z.string(),
  userId: z.string(),
  columns: z.array(z.unknown()),
});

export const submit = async (formdata) => {
  const prisma = new PrismaClient();

  const columns = JSON.parse(formdata.get("columns")).map((item) => item.value);
  const name = formdata.get("boardName");
  const userId = formdata.get("userId");

  console.log(columns);

  const data = {
    name,
    userId,
    columns,
  };
  console.log(data.columns);
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
