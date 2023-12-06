const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// TODO : 모델 모듈 불러오기
const Player = require("./Player")(sequelize, Sequelize);
const Profile = require("./Profile")(sequelize, Sequelize);
const Team = require("./Team")(sequelize, Sequelize);

// TODO : 관계 형성

// 1) Player : Profile = 1 : 1
// 한 선수당 하나의 프로필을 가짐
Player.hasOne(Profile, {
  foreignKey: "player_id",
  sourceKey: "player_id", // 생략 가능
  // 연쇄 삭제, 수정
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Profile.belongsTo(Player, {
  foreignKey: "player_id",
  targetKey: "player_id", // 생략 가능 (테이블(profile)에 같은 이름(player_id)으로 만드는 거면 생략이 가능하나, 다른 이름으로 만들고 싶은 경우 테이블(profile)에 미리 정의를 해두어야 함) -> 기본키 사용시 생략가능
}); // -> Profile table에 player_id 칼럼이 하나 더 생김
// belongsTo에서의 foreignKey는 자신에게 속해있는 컬럼이고, targetKey는 foreignKey가 참조하는 상대 모델의 컬럼이다.

// 2) Team : Player = 1 : N
// 한 팀에는 여러 선수가 존재
Team.hasMany(Player, { foreignKey: "team_id", sourceKey: "team_id" });
Player.belongsTo(Team, {
  foreignKey: "team_id",
  targetKey: "team_id",
}); // -> Player table에 team_id 칼럼이 하나 더 생김

// TODO: 관계 정의한 모델들을 db 객체에 저장
db.Player = Player;
db.Profile = Profile;
db.Team = Team;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
