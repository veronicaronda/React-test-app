import { useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import Project from "./components/Project";

function App() {
  const [isNewProject, setIsNewProject] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState('');
  const [clickInput, setClickInput] = useState(false);
  
  
  
  const title = useRef()
  const description = useRef()
  const date = useRef()
  
  
  function handleSave(){
    
    setProjects((prevProjects)=>{
      return [
        ...prevProjects,
        {
          title: title.current.value,
          description: description.current.value,
          date: new Date(date.current.value),
        }
      ]
    })
    
    // Clear the form fields
    //  title.current.value = "";
    //  description.current.value = "";
    //  date.current.value = "";
    
    // Close the new project form
    setIsNewProject(false);
    //  console.log(projects)
    
  }
  function handleClick(){
    setIsNewProject(true)
  }
  
  
  
  function handleClickTitle(index){ 
    
    setSelectedProject(projects[index])
    
  }
  function handleClearProjects(index){
    setProjects((prevProjects) => prevProjects.filter((_, i) => i !== index));
    if (selectedProject === projects[index]) {
      setSelectedProject(null); // Deselect if deleted project was selected
    }
  }
  
  let content;
  if (isNewProject) {    
    content = <NewProject title={title} description={description} date={date} onSave={()=>handleSave()} isNewProject={setIsNewProject} selectedProject={setSelectedProject}/>
  } else if (selectedProject){    
    content = <Project clearProject={()=>handleClearProjects(projects.indexOf(selectedProject))} isInput={clickInput} openTaskInput={setClickInput} title={selectedProject.title} description={selectedProject.description} handleClickTitle={()=>handleClickTitle(index)} date={selectedProject.date}/>
  } else {
    content = <div className=" h-full w-full flex flex-col justify-center items-center relative z-0">
      <p className="text-violet-700"><em>Select a project or create a new one</em></p>
      <button onClick={handleClick} className="border-2 border-violet-700 mt-5 font-bold text-violet-700 px-5 py-2 text-xl bg-violet-100 border-dashed rounded-md">Create project</button>
    </div>
  }
  return (
    <div className="flex md:flex-row flex-col h-screen">    
      <Sidebar handleClickTitle={handleClickTitle} projects={projects} handleClick={handleClick} />
      <div className="flex-grow h-full overflow-y-auto relative z-0">
        {content}      
      </div>
    </div>
  );
}

export default App;
