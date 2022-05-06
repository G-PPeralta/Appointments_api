module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      underscored: true,
      modelName: 'users',
      timestamps: false,
    },
  );

  User.associate = (models) => {
    User.hasMany(models.Appointment, { foreignKey: 'userId', as: 'Appointments' });
  };

  return User;
};
