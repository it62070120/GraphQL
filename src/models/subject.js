import { composeWithMongoose } from 'graphql-compose-mongoose';
import { model, Schema } from 'mongoose';

const SubjectSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        default: 'www.google.com',
    },
    day: {
        type: String,
        required: true,
    },
    startAt: {
        type: String,
        required: true,
    },
    endAt: {
        type: String,
        required: true,
    }
})

export const SubjectModel = model('Subject', SubjectSchema);

export const SubjectTC = composeWithMongoose(SubjectModel);