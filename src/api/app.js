const express = require('express');
const { AppointmentsController } = require('../controllers/AppointmentsController');

const app = express();
app.use(express.json());

const apiRoutes = express.Router();

apiRoutes.get('/appointments', AppointmentsController.listAppointments);
apiRoutes.post('/appointments', AppointmentsController.createAppointment);

app.use(apiRoutes);

module.exports = app;
