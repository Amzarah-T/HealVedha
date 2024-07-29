import Post from "./Post.js";
import Herb from "./Herb.js";
import Disease from "./Disease.js";
import DiseaseTreatment from "./DiseaseTreatment.js";
import DiseaseSymptoms from "./DiseaseSymptoms.js";
import ResearchPaper from "./ResearchPaper.js";
import User from "./User.js";

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
    Herb,
    ResearchPaper
}