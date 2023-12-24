
const PrismaClient = require('@prisma/client')
const prisma = new PrismaClient.PrismaClient;


async function seed() {
  try {
    // Create a board with columns 'ownerproof-3480749-1701464923-361ca95b6572'
    const board = await prisma.board.create({
      data: {
        name: 'Sample Board',
        columns: {
          create: [
            { name: 'To Do' },
            { name: 'In Progress' },
            { name: 'Done' },
          ],
        },
      },
      include: {
         columns: true,
      },
    });

    // if (!board.columns || board.columns.length === 0) {
    //   console.error('Error: Board columns are undefined or empty.');
    //   return;
    // }

   
    // const tasks = await prisma.task.createMany({
    //   data: [
    //     {  description: 'Task 1', curentStatus: 'To Do', titre: 'Task Title 1', columnId: '655e32ba9964a4aa3af3c733'},
    //     {  description: 'Task 2', curentStatus: 'Doing', titre: 'Task Title 2', columnId: '655e32ba9964a4aa3af3c734' },
    //     {  description: 'Task 3', curentStatus: 'Done', titre: 'Task Title 3', columnId:  '655e32bb9964a4aa3af3c735' },   
    //   ],
    // });

    // if (!tasks || tasks.length === 0) {
    //   console.error('Error: Tasks are undefined or empty.');
    //   return;
    // }

    // Create subtasks for each task
          const subtasks = await prisma.subtask.createMany({
            data: [
              { name: 'Subtask 1', taskId: '655e9b14aa9523a3f15f85da' },
              { name: 'Subtask 2', taskId: '655e9b14aa9523a3f15f85d9' },
              { name: 'Subtask 3', taskId: '655e9b14aa9523a3f15f85d8' },
            ],
          });

    console.log('Dummy data seeded successfully!');
  } catch (error) {
    console.error('Error during seeding:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();