import express from 'express';

import {introTS} from './routes';

const app = express();

app.get('/', introTS);

app.listen(4444, () => {
  console.log('Server is running!');
});