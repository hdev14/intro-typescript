import {Request, Response} from 'express';

export function introTS(request: Request, resposne: Response) {
  return resposne.json({message: 'Intro TypeScript'});
}