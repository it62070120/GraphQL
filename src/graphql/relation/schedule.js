import { ScheduleTC } from '../../models/schedule';
import { UserTC } from '../../models/user';

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