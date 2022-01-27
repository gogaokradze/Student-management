import  React,{useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { axiosGetStudents } from '../../api';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { axiosDeleteStudent } from '../../api';



export default function ShowStudent({ studentsList, setStudentList }) {
  const deleteStudent=(id)=>{
     axiosDeleteStudent(id).then(()=>{
       setStudentList(prev => prev.filter(student => student._id !== id))
    })
  }
  useEffect(()=>{
      axiosGetStudents().then((students)=>{
        setStudentList(students.data)
      })
  },[setStudentList])

  return (
    <>
    <h2>All students</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Registration Number</TableCell>
            <TableCell align="right">grade</TableCell>
            <TableCell align="right">section</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentsList.map((student,key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.studentName}
              </TableCell>
              <TableCell align="right">{student.regNo}</TableCell>
              <TableCell align="right">{student.grade}</TableCell>
              <TableCell align="right">{student.section}</TableCell>
              <TableCell align="right">
              <Button onClick={()=>deleteStudent(student._id)}><DeleteIcon /></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
