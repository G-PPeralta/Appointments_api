const { Appointment } = require('../database/models');

class AppointmentsService {
  static async createAppointment(title, time, description, userId) {
    const appointment = await Appointment.create({ title, time, description, userId });
    return appointment
  }

  static async listAppointments() {
    const appointments = await Appointment.findAll();
    if (!appointments) return res.status(404).json({ message: 'There are no appointments listed' });
    return appointments;
  }

  static async findAppointment(id) {
    const appointment = await Appointment.findByPk(id);
    return appointment;
  }

  static async editAppointment(id, title, time, description) {
    const editAppointment = await Appointment.update({
      title,
      time,
      description,
    }, {
      where: { id },
    });
    return editAppointment;
  } 

  static async deleteAppointment(id) {
    await Appointment.destroy({ where: { id } });
    return true;
  }
}

module.exports = { AppointmentsService }