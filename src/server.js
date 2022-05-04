const express = require('express');
require('dotenv').config();
const appointmentsRouter = require('./routers/appointmentsRouter');
const userRouter = require('./routers/usersRouter');

const app = express();
app.use(express.json());

app.use('/appointments', appointmentsRouter);
app.use('/users', userRouter);

app.listen(3001, () => {
  console.log('ouvindo na porta 3001');
});
