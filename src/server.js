require('dotenv').config();
const express = require('express');
const { default: appointmentsRouter } = require('./routers/appointmentsRouter');

const app = express();

app.use('/appointments', appointmentsRouter);

app.listen(3001, () => {
  console.log('ouvindo na porta 3000');
});
