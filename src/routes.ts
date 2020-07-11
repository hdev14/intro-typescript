import {Request, Response} from 'express';

import createUser from './create-user';

export function create(request: Request, resposne: Response) {
  const user = createUser({
    name: 'Hermerson',
    email: 'ne.hermerson@gmail.com',
    password: '123456',
    age: 23,
    techs: [
      'Javascript', 
      'NodeJs', 
      'React', 
      'React Native', 
      'TypeScript', 
      'PHP', 
      'Laravel',
      'Git',
      'HTML',
      'CSS'
    ],
    address: {city: 'Currais Novos', uf: 'RN'}
  })
  return resposne.json(user);
}