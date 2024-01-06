import { PrismaClient } from "@prisma/client";

export const getRemainingUsers = async (email: any) => {
  const prisma = new PrismaClient();
  const currentUser = await prisma.users.findUnique({
    where: {
      email: email,
    },
  });

  const remainingUsers = await prisma.users.findMany({
    select: {
      username: true,
    },
    where: {
      NOT: {
        id: currentUser?.id,
      },
    },
  });

  return remainingUsers;
};

export const getdbUsers = async () => {
  const prisma = new PrismaClient();
  const users = await prisma.users.findMany({});
  return users;
};
