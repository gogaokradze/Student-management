import mongoose from 'mongoose'

const studentSchema=mongoose.Schema({
   regNo:Number,
   studentName: String,
   grade: String,
   section:{
      type:String,
      default:'No grade'
   }
})

const StudentData= mongoose.model('StudentData',studentSchema)

export default StudentData
