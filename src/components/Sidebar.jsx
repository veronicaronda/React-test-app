
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";


export default function Sidebar({handleClick, projects, handleClickTitle}){
    const [open, setOpen] = useState(true);
    //    console.log(projects)
    return(
        
        <div className={`${open ? 'md:w-1/3 h-1/3 md:h-full' : 'md:w-20 h-20 md:h-full'} flex flex-col items-center md:block relative duration-300 bg-violet-950 h-screen  overflow-visible  rounded-tr-lg md:mt-8 px-10 py-5 z-50`}>
        {/* <div className="relative"> */}
            <div className="absolute -right-5  rounded-full bg-violet-300 p-2 z-50  hidden md:block">
                <FaChevronRight onClick={()=>setOpen(!open)} className={`${open ? 'rotate-0' : 'rotate-180'} text-2xl text-violet-900 cursor-pointer`}/>
                
            </div>
            <div className={`absolute block md:hidden self-center -bottom-4  rounded-full bg-violet-300 p-2 z-50`}>
                <FaChevronDown  onClick={()=>setOpen(!open)}  className={`${open ? 'rotate-0' : 'rotate-180'} cursor-pointer`} />
                
            </div>
            
            <div className={`${open ? 'block' : 'hidden'} duration-300  flex flex-col items-center md:block `}>
                <h2 className="text-2xl uppercase p text-violet-50 font-bold ">your projects</h2>
                <button onClick={handleClick} className="bg-violet-300 text-violet-900 rounded py-2 px-5 mt-8  flex gap-2 items-center">
                    <FaPlus  className="text-violet-900" /> Add Project
                </button>
            </div>   
            <ul className={`md:my-8 my-4 ${open ? 'block' : 'hidden'}`}>
                {projects.map((project, index) => (
                    <li key={index} className={"text-lg text-violet-50 font-bold translate-y-1 duration-200"}>
                        <button onClick={()=>handleClickTitle(index)} >{project.title || "Untitled Project"}</button> 
                    </li>
                ))}
            </ul>     
        {/* </div> */}
        </div>
    )
}