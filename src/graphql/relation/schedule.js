import { ScheduleTC } from '../../models/schedule';
import { UserTC } from '../../models/user';
import { SubjectTC } from "../../models/subject";

ScheduleTC.addRelation(
    'user',
    {
        resolver: UserTC.getResolver('findById'),
        projection: {
            userId: 1
        },
        prepareArgs: {
            _id: (schedule) => schedule.userId,
        }
    }
)



ScheduleTC.addRelation(
    'subjects',
    {
        resolver: SubjectTC.getResolver('findById'),
        projection: {
            scheduleId: 1
        },
        prepareArgs: {
            _id: (subject) => subject.scheduleId,
        }
    }
)