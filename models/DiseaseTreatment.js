import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";

const DiseaseTreatment = sequelize.define("DiseaseTreatment", {
  descTm: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  descEn: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  descSn: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

// Post.associate = (models) => {
//     Post.belongsTo(models.User)
// }

export default DiseaseTreatment;