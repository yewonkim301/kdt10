// TODO: User 모델 정의
const User = (Sequelize, Datatypes) => {
  return Sequelize.define(
    "user",
    {
      id: {
        type: Datatypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      pw: {
        type: Datatypes.STRING(255),
        allowNull: false,
      },
      name: {
        type: Datatypes.STRING(15),
        allowNull: false,
      },
      userid: {
        type: Datatypes.STRING(15),
        allowNull: false,
      },
    },
    {
      tableName: "user",
      freezeTableName: true,
      timestamp: false,
    }
  );
};

module.exports = User;
