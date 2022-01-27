import axios from "axios";

const url='https://goga-student-management-api.herokuapp.com/students'

export const axiosCreateStudent= async (student)=>{
  const { data } = await axios.post(url, student)
  return data
}

export const axiosGetStudents=()=>{
   return axios.get(url)
}
export const axiosDeleteStudent=(id)=>{
  return axios.delete(`${url}/${id}`)
}