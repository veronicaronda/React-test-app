import { useRef, useState } from "react"

import Input from "./Input"
export default function NewProject({isNewProject,onSave, title, description, date, selectedProject}){
    const [isTextarea, setIsTextarea] = useState(true)
   
    console.log(isTextarea)
    
    return(
        <div className="w-full customHeight px-10 md:px-16 lg:px-28 pt-8  flex flex-col bg-violet-100">
        <h1 className="text-violet-900 text-center md:text-start   text-4xl font-bold mt-5">Create a New Project</h1>

        <div className="flex mt-5 md:mt-3  flex-grow  h-full">
        <form className="w-full  " >
            <Input ref={title} customLabel="Title"  />
            <Input ref={description} customLabel="Description" isTextarea={isTextarea}  />
            <Input ref={date} customLabel="Date" inputType="date"  />
            <div className="flex justify-end gap-4 mt-5">
            <button onClick={(e) => {
                e.preventDefault();
                isNewProject(false);
                selectedProject(null)
              }} className="bg-violet-700  rounded-md px-4 py-1 text-violet-50">Cancel</button>

                <button onClick={(e) => {
                e.preventDefault();
                onSave();
              }} className="bg-white border hover:bg-violet-200 border-1 border-violet-700 rounded-md px-4 py-1 text-violet-700 font-bold">Save</button>
            </div>
        </form>
        </div>
        </div>
    )
}