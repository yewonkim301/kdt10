const PlayerModel = (sequelize, DataTypes) => {
  const Player = sequelize.define(
    "Player", // 모델명
    {
      player_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return Player;
};

module.exports = PlayerModel;
