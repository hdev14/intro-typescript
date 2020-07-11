import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({message: 'Intro TypeScript'});
})
app.listen(4444, () => {
  console.log('Server is running!');
})