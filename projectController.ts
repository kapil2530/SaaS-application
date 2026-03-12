import Project from "../models/Project"

export const getProjects = async (req:any,res:any) => {
 const projects = await Project.find()
 res.json(projects)
}

export const createProject = async (req:any,res:any) => {
 const project = new Project(req.body)
 await project.save()
 res.json(project)
}
