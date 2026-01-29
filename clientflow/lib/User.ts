import mongoose ,{Schema,models,model} from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
    {
        name:{
            type:String,required:true,trim:true
        },
        email:{
            type:String,required:true,trim:true
        },
        password:{
            type:String,required:true,trim:true,minlenght:8,select:false
        },
        role:{
            type:String,enum:['user','admin'],default:'user'
        },
    },{timestamps:true}
);

userSchema.pre("save",async function (){
    if(!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 12);

})


export default models.User || model("User",userSchema)
