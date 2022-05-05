require('dotenv').config();
const express = require('express');
const cors = require('cors');
const appointmentsRouter = require('./routers/appointmentsRouter');
const userRouter = require('./routers/usersRouter');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());

app.use('/appointments', appointmentsRouter);
app.use('/users', userRouter);

app.listen(PORT);
