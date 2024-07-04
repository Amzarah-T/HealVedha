import Post from "./Post"
import User from "./User"
import Herb from "./Herb"
import Service from "./Service"
import ServiceTreatment from "./ServiceTreatment"

export const initSequelize = async () => {
    User.hasMany(Post);
    Post.belongsTo(User);
    
    Service.hasMany(ServiceTreatment);
    ServiceTreatment.belongsTo(Service);
}

initSequelize();

export const model = {
    User,
    Post,
    Service,
    ServiceTreatment,
    Herb
}