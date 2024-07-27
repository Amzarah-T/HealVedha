import Post from "./Post"
import User from "./User"
import Herb from "./Herb"
import Disease from "./Disease"
import DiseaseTreatment from "./DiseaseTreatment"
import DiseaseSymptoms from "./DiseaseSymptoms"

export const initSequelize = async () => {
    User.hasMany(Post);
    Post.belongsTo(User);
    
    Disease.hasMany(DiseaseTreatment);
    DiseaseTreatment.belongsTo(Disease);
    
    Disease.hasMany(DiseaseSymptoms);
    DiseaseSymptoms.belongsTo(Disease);
}

initSequelize();

export const model = {
    User,
    Post,
    Disease,
    DiseaseTreatment,
    DiseaseSymptoms,
    Herb
}