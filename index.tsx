import React,{useEffect,useState} from "react"
import { api } from "../../services/api"

const Dashboard = () => {

 const [projects,setProjects] = useState([])

 useEffect(()=>{
  api.get("/projects").then(res=>{
   setProjects(res.data)
  })
 },[])

 return(
  <div>
   <h1>Dashboard</h1>

   {projects.map((p:any)=>(
    <div key={p._id}>{p.name}</div>
   ))}

  </div>
 )
}

export default Dashboard
