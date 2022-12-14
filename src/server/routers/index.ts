import { trpc } from 'server/trpc';
import z from 'zod';
import sha256 from 'crypto-js/sha256';

import { userRouter } from './user';
import { projectRouter } from './project';
import { authRouter } from './auth';

import { prisma } from 'server/prisma';

export const appRouter = trpc.router({
  dummieProcedure: trpc.procedure
    .mutation(async () => {
      console.log('from router');
      const user = {
        data: {
          email: 'antonio@tec.mx',
          password: '123123123',
          username: 'antonieto',
          name: 'Antonio',
          lastName: 'Monroy',
          campus: 'Guadalajara',
          semester: 4,
          skills: ['react', 'python'],
          major: 'ITC',
        }
      }
    return user;
    }),
  user: userRouter,
  project: projectRouter,
  auth: authRouter
});

export type AppRouter = typeof appRouter;  
