import StudentData from "../models/student.js";

export const getStudent = async(req,res)=>{
   try {
     const allStudents=await StudentData.find()

     res.status(200).json(allStudents)
   } catch (error) {
      console.log(error) 
      res.status(404).json({message:error})
   }
}

export const createStudent = async(req,res)=>{
    const student=req.body
    // console.log(student.body)
    const newStudent=new StudentData(student)
  try {
    await newStudent.save()
    res.status(200).json(newStudent)

  } catch (error) {
    console.log(error)
    res.status(409).json({message:error})
  }
}

export const deleteStudent=async(req,res)=>{
   const id=req.params.id

   try {
     await StudentData.findByIdAndRemove(id)

     res.status(200).send('deleted')
   } catch (error) {
     console.log(error)
     res.status(404)
   }
}