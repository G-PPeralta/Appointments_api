module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    title: DataTypes.STRING,
    time: DataTypes.DATE,
    description: DataTypes.TEXT,
    updated: DataTypes.DATE,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
    underscored: true,
    sequelize: db,
    modelName: 'Appointment',
  });

  Appointment.associate = (model) => {
    Appointment.belongsTo(model.User, { foreignKey: 'userId', as: 'user' });
  };

  return Appointment;
};