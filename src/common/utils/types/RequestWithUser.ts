import { Request } from 'express';

export type RequestWithUser = Request & {
  user: { id: string; refreshToken: string };
};
