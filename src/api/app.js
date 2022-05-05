const express = require('express');
const { AppointmentsController } = require('../controllers/AppointmentsController');

const app = express();
app.use(express.json());

const apiRoutes = express.Router();

apiRoutes.get('/appointments', AppointmentsController.listAppointments);

app.use(apiRoutes);

module.exports = app;
