import { ScheduleTC } from "../../models/schedule";

export const createSchedule = ScheduleTC.getResolver('createOne');
export const deleteScheduleId = ScheduleTC.getResolver("removeById");