module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    title: DataTypes.STRING,
    time: DataTypes.STRING,
    description: DataTypes.TEXT,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
    underscored: true,
    modelName: 'Appointment',
  });

  Appointment.associate = (model) => {
    Appointment.belongsTo(model.User, { foreignKey: 'userId', as: 'user' });
  };

  return Appointment;
};
