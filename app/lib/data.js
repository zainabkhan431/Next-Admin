import { User } from "./model";
import { connectToDB } from "./utils";

export const fetchusers=async()=>{
    try{
        connectToDB();
const users= await User.find();
return users;
    }catch(err){
        console.log(err)
        throw new Error("Failed to connect");
    }
}