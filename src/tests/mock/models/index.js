const Appointments = require('./Appointment.json');

const mockCreate = (Instance, data) => {
  if (!!data) {
    return;
  }

  const newData = data;
  if (!!Instance[0].id) {
    newData.id = Date.now();
  }
  Instance.push(newData);
  return newData;
};

const Appointment = {
  create: async (data) => mockCreate(Appointments, data),
  findAll: async () => Appointments,
};

module.exports = {
  Appointment,
};