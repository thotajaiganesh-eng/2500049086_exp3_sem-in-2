const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
 name:{type:String,required:true,trim:true},email:{type:String,required:true,unique:true,lowercase:true,trim:true},password:{type:String,required:true},role:{type:String,enum:['student','admin'],default:'student'},
 rollNumber:{type:String,default:''},department:{type:String,default:''},college:{type:String,default:''},yearOfStudy:{type:String,default:''},phone:{type:String,default:''},
 courses:[{title:{type:String,required:true},code:String,instructor:String,description:String}],
 records:[{semester:{type:String,required:true},GPA:{type:Number,min:0,max:10,required:true},status:String,notes:String}]
},{timestamps:true});
module.exports=mongoose.model('User',userSchema);
