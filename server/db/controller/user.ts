import { prisma } from "../prisma";

export const createUser = () => {
  return prisma.user.create({
    data: {
      name: "",
      username: "",
      email: "",
      status: "",
      xp: {
        create: {
          xp: 0,
        },
      },
      league: "",
    },
  });
};
