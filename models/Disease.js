import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";

const Disease = sequelize.define("Disease", {
  titleTm: {
    type: DataTypes.STRING,
    allowNull: false
  },
  titleEn: {
    type: DataTypes.STRING,
    allowNull: false
  },
  titleSn: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Post.associate = (models) => {
//     Post.belongsTo(models.User)
// }

export default Disease;