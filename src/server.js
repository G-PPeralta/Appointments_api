const express = require('express');
require('dotenv').config();
// const appointmentsRouter = require('./routers/appointmentsRouter');

const app = express();
app.use(express.json());

app.use('/', (req, res) => {
  res.send('hello world');
});
// app.use('/appointments', appointmentsRouter);

app.listen(3001, () => {
  console.log('ouvindo na porta 3001');
});
