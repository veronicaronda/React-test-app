import { forwardRef, useState } from "react"

 const Input =forwardRef(
    function Input({customLabel, isTextarea, inputType}, ref){
        let inputKind;
    
        if (isTextarea){
            inputKind = <textarea ref={ref} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1  ring-violet-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6" name="" id=""></textarea>
        }else{
            inputKind = <input ref={ref} className="form-input shadow-sm rounded-md border-violet-400 focus:ring-violet-600 " type={inputType} />
        }
           
        return(
            <div className="flex flex-col">
                {customLabel ? <label className="text-lg font-serif text-violet-900 uppercase my-2" htmlFor="">{customLabel}</label> : ''}
            
            {inputKind}
            </div>
        )
    }
)
export default Input;
