import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // create soldier
  const firstUser = await prisma.user.findFirst();

  if (firstUser === null) {
    console.log("no user");
    return;
  }

  const newSoldier = await prisma.soldier.create({
    data: {
      userId: firstUser.id,
      name: "hello world",
    },
  });

  console.log(newSoldier);
};

main().catch((e) => console.log(e));
