import mongoose from "mongoose";

const uri = 'mongodb+srv://cluster0.r4zzs.mongodb.net';
const options = {
    dbName: 'Project',
    user: 'Admin',
    pass: 'Password1'
}

export default mongoose.connect(uri, options);