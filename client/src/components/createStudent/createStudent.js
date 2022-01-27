import React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { axiosCreateStudent } from '../../api';


export default function CreateStudent({ setStudentList }) {
  const [student,setStudent]=useState({regNo:'',studentName:'',grade:'',section:''})
  const createStudent= async ()=>{
    const createdStudent = await axiosCreateStudent(student)
    setStudentList(prev => [...prev, createdStudent])
    setStudent({regNo:'',studentName:'',grade:'',section:''})
  }
  return (
    <>
    <h2>Add a student</h2>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Registration Number" variant="outlined" value={student.regNo} onChange={(e)=>{
        setStudent({...student,regNo:e.target.value })
      }}/>
      <TextField id="outlined-basic" label="Name" variant="outlined" value={student.studentName} onChange={(e)=>{
        setStudent({...student,studentName:e.target.value})
      }}/>
      <TextField id="outlined-basic" label="Grade" variant="outlined" value={student.grade} onChange={(e)=>{
        setStudent({...student,grade:e.target.value})
      }}/>
      <TextField id="outlined-basic" label="Section" variant="outlined" value={student.section} onChange={(e)=>{
        setStudent({...student,section:e.target.value})
      }}/>
      <Button variant="contained" onClick={createStudent}>Submit</Button>

    </Box>
    </>
  );
}
