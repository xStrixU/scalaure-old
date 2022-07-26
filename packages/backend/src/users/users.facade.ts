import { prisma } from '../shared/lib/prisma';

export const findByEmail = async (email: string) => {
  return prisma.user.findFirst({
    where: {
      OR: [{ email }],
    },
    include: {
      details: true,
      roles: true,
    },
  });
};
