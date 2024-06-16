import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";

const Post = sequelize.define("Post", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Post.associations = (models) => {
    Post.belongsTo(models.User)
}

export default Post;