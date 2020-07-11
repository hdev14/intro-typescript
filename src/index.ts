import express from 'express';

import {create} from './routes';

const app = express();

app.get('/', create);

app.listen(4444, () => {
  console.log('Server is running!');
});