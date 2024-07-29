import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";

const ResearchPaper = sequelize.define("ResearchPaper", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// ResearchPaper.associate = (models) => {
//     ResearchPaper.belongsTo(models.User)
// }

export default ResearchPaper;