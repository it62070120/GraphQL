import { schemaComposer } from "graphql-compose";
import { ScheduleTC, ScheduleModel} from "../../models/schedule";
import { SubjectTC, SubjectModel } from "../../models/subject";



export const createSchedule = ScheduleTC.getResolver('createOne');
export const updateSchedule = ScheduleTC.getResolver("updateById");
export const deleteScheduleId = ScheduleTC.getResolver("removeById");

const AddSchedulePayloadOTC = schemaComposer.createObjectTC({
    name: 'AddSchedulePayload',
    fields: {
      status: 'String!',
      message: 'String',
    },
  })

export const addSchedule = schemaComposer.createResolver({
  name: 'login',
  kind: 'mutation',
  type: AddSchedulePayloadOTC,
  args: {
      code: 'String!'
  },
  resolve: async ({args}) => {
    const { code } = args
    const schedule = await ScheduleModel.findOne( { code : code } )
    if(!schedule){
        return {
            status: "fail",
            message: "code can't use"

        }
    }
    console.log(schedule)
    const subjects = await ScheduleModel.f
    // const createSchedule = await ScheduleModel.create({title: schedule.title})
    return {
        status: "success",
        message: "schedule add complete"
    }
  }
})


