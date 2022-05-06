const { AppointmentsService } = require('../services/AppointmentsService');

class AppointmentsController {
  static async createAppointment(req, res) {
    try {
      const {
        title, time, description, userId,
      } = req.body;
      const appointment = await AppointmentsService
        .createAppointment(title, time, description, userId);
      return res.status(201).json(appointment);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  static async listAppointments(_req, res) {
    try {
      const appointments = await AppointmentsService.listAppointments();
      if (!appointments) return res.status(404).json({ message: 'There are no appointments listed' });
      return res.status(200).json(appointments);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  static async findAppointment(req, res) {
    try {
      const { id } = req.params;
      const appointment = await AppointmentsService.findAppointment(id);
      if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
      return res.status(200).json(appointment);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  static async editAppointment(req, res) {
    try {
      const { id } = req.params;
      const { title, time, description } = req.body;
      await AppointmentsService.editAppointment(id, title, time, description);
      return res.status(200).json({ message: 'Appointment updated' });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  static async deleteAppointment(req, res) {
    try {
      const { id } = req.params;
      await AppointmentsService.deleteAppointment(id);
      return res.status(204).json({ message: 'Appointment deleted' });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
}

module.exports = { AppointmentsController };
