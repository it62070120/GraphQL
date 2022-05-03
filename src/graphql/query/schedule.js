import { ScheduleTC } from "../../models/schedule";

export const schedules = ScheduleTC.getResolver('findMany');
export const schedule = ScheduleTC.getResolver('findById');