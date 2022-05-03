import { schemaComposer } from "graphql-compose";

import { UserModel, UserTC } from "../../models/user";

export const createUser = UserTC.getResolver("createOne");

const LoginPayloadOTC = schemaComposer.createObjectTC({
    name: "LoginPayload",
    fields: {
        status: "String!",
        message: "String!",
        User: UserTC,
    },
});

export const login = schemaComposer.createResolver({
    name: "login",
    kind: "mutation",
    type: LoginPayloadOTC,
    args: {
        username: "String!",
        password: "String!",
    },
    resolve: async ({ args }) => {
        const { username, password } = args;
        const user = await UserModel.findOne({ username: username.toLowerCase() });
        const validPassword = await user.verifyPassword(password);
        
        if (!user || !validPassword) {
            return {
                status: "failed",
                message: "Username or Password is incorrect",
                User: null
            };
        }
        
        return {
            status: "success",
            message: "Login success",
            User: user
        };
    },
});

export const deleteUserId = UserTC.getResolver("removeById");
