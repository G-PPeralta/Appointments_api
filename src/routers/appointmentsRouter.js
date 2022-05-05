const express = require('express');
const { AppointmentsController } = require('../controllers/AppointmentsController');
const { Validations } = require('../middlewares/appointmentsValidations')

const appointmentsRouter = express.Router();

appointmentsRouter.post('/', AppointmentsController.createAppointment);
appointmentsRouter.get('/', AppointmentsController.listAppointments);
appointmentsRouter.get('/:id', AppointmentsController.findAppointment);
appointmentsRouter.put('/:id', AppointmentsController.editAppointment);
appointmentsRouter.delete('/:id', AppointmentsController.deleteAppointment);

module.exports = appointmentsRouter;
