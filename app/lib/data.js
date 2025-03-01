import { User } from "./model";
import { connectToDB } from "./utils";

export const fetchusers=async(q)=>{
    console.log(q)
    const regex=new RegExp(q,'i');
    try{
        connectToDB();
const users= await User.find({username:{$regex:regex}});
return users;
    }catch(err){
        console.log(err)
        throw new Error("Failed to connect");
    }
}