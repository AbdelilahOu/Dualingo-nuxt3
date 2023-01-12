import { prisma } from "../prisma";

export const createUser = () => {
  return prisma.user.create({
    data: {
      name: "",
    },
  });
};
