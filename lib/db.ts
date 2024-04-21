import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined
}

const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

declare global {
  var prisma: PrismaClient | undefined;

};
export const db = globalThis.prisma || new PrismaClient();

export default prisma

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma