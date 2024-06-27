import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";

const Service = sequelize.define("Service", {
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
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Post.associate = (models) => {
//     Post.belongsTo(models.User)
// }

export default Service;