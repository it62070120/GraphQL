import { composeWithMongoose } from 'graphql-compose-mongoose';
import { model, Schema } from 'mongoose';

const ScheduleSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    // subject: {
    //     type: Array,
    //     default: []
    // },
    genCode: {
        type: String,
        required: true,
        unique: true,
    }

});

export const ScheduleModel = model('Schedule', ScheduleSchema);

export const ScheduleTC = composeWithMongoose(ScheduleModel);