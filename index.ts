import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // create soldier
  const firstUser = await prisma.user.findFirst();

  if (firstUser === null) {
    console.log("no user");
    return;
  }

  // const newSoldier = await createSoldier(firstUser.id);
  // const newSoldier = await createSoldierV2(firstUser.id);
  const soldier = await findSoldiers(firstUser.id);
  const soldiers = await findSoldierByUserSoldier(firstUser.id);

  // console.dir(newSoldier, { depth: null });
  console.dir(soldier, { depth: null });
  console.dir(soldiers, { depth: null });
};

const findSoldiers = async (userId: number) => {
  return prisma.soldier.findMany({
    where: { userId: userId },
  });
};

const findSoldierByUserSoldier = async (userId: number) => {
  return prisma.userSolder.findMany({
    where: { userId: userId },
    select: { soldier: true },
  });
};

const createSoldier = async (userId: number) => {
  return prisma.soldier.create({
    data: {
      userId: userId,
      name: "hello world",
    },
  });
};

const createSoldierV2 = async (userId: number) => {
  return prisma.soldier.create({
    data: {
      userId: userId,
      name: "hello world2",
      userSoldier: {
        create: {
          userId: userId,
        },
      },
    },
    include: {
      userSoldier: {
        include: {
          user: true,
        },
      },
    },
  });
};

main().catch((e) => console.log(e));
