const express = require('express');
const cors = require('cors');
const appointmentsRouter = require('./routers/appointmentsRouter');
const userRouter = require('./routers/usersRouter');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/appointments', appointmentsRouter);
app.use('/users', userRouter);

app.listen(3001, () => {
  console.log('ouvindo na porta 3001');
});
