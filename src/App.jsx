import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject:undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(taskData){
    setProjectsState(prevState => {
      const taskID = Math.random();
      const taskDataWithID = {id: taskID, text:taskData, projectId: prevState.selectedProject};
      const updatedTasks = [...prevState.tasks, taskDataWithID];
      return {...prevState, tasks: updatedTasks};
    });
  }

  function handleDeleteTask(taskId){
    setProjectsState(prevState => {
      const updatedTasks = prevState.tasks.filter(t => t.id !== taskId);
      return {...prevState, tasks: updatedTasks};
    });
  }
  function handleStartAddProject(){
    setProjectsState((prevState) => {
      return {...prevState, selectedProject: null};
    });
  }

  function handleAddProject(projectData){
    setProjectsState(prevState => {
      const projectID = Math.random();
      const newProject = {
        id: projectID,
        title: projectData.title,
        description: projectData.description,
        dueDate: projectData.dueDate
      }

      return {
        ...prevState,
        selectedProject: undefined,
        projects:[...prevState.projects, newProject]
      }
    });
  }

  function handleCancelProject() {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProject: undefined
    }));
  }

  function handleSelectProject(projectId){
    setProjectsState(prevState => ({
      ...prevState,
      selectedProject: projectId
    }));
  }

  function handleDeleteProject(){
    setProjectsState(prevState => ({
      projects: prevState.projects.filter(p => p.id !== prevState.selectedProject),
      selectedProject: undefined
    }));
  }

  let content;
  if(projectsState.selectedProject === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />;
  } else if(projectsState.selectedProject === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }else{
    content = <SelectedProject project={projectsState.projects.find(p => p.id === projectsState.selectedProject)} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} onDelete={handleDeleteProject} tasks={projectsState.tasks}/>;
  }

  console.log(projectsState.projects);
  return (
   <main className="flex h-screen gap-8 my-8">
   <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectProject} projectId={projectsState.selectedProject}/>
   {content}
   </main>
  );
}

export default App;
