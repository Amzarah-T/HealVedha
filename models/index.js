import Post from "./Post"
import User from "./User"

export const initSequelize = () => {
    User.hasMany(Post);
    Post.belongsTo(User);
}

initSequelize();

export const model = {
    User,
    Post
}