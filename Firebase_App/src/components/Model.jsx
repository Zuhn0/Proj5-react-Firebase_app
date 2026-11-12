import {createPortal} from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Model=({isOpen,onClose,
   children})=>{
   return  createPortal(
    <>
     {isOpen && (
      <>
          < div className="m-auto  z-50 relative min-h-[200px] max-w-[80%] bg-white p-4">
      <div className="flex justify-end">
         <AiOutlineClose
          
         className="  text-2xl 
         self-end" 
         onClick={onClose}/>
      </div>
      {children}
      </div>
      <div onClick={onClose} className="absolute top-0 z-40  w-screen backdrop-blur h-screen"/>
      </>
     )}
    </>
  ,document.getElementById("model-root")) ;
}

export default Model