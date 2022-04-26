import { UserTC } from "../../models/user"

export const createUser = UserTC.getResolver('createOne');
export const updateUserId = UserTC.getResolver('updateById');
export const deleteUserId = UserTC.getResolver('removeById');