import Navbar from "./components/Navbar";
import Model from "./components/Model";
import {FiSearch} from "react-icons/fi"
import {FaPlusCircle } from "react-icons/fa"
import { useEffect,useState } from "react";
import {db} from "./config/firebase"
import { getDocs,collection, onSnapshot } from "firebase/firestore";
import useDisclouse from "./hooks/useDisclouse";

import ContactCard from "./components/ContactCard";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
const App=()=> {

  const [contacts,setContacts]=useState([]);

const {isOpen,onOpen,onClose}=useDisclouse();

  useEffect(()=>{
    const getContacts=async()=>{
     try
      {const contactRef=collection(db,"contacts");
    onSnapshot(contactRef,(snapshot)=>{
          const contactLists=snapshot.docs.map((doc)=>{
       return {
        id:doc.id,
        ...doc.data(),
       };
    });
    setContacts(contactLists);
    return contactLists;
  });
} catch(error){
         console.log(error);
    }
    };
     getContacts();
  },[]);

  
  return (
<>
    <div className="max-w-[370px] mx-auto px-4">
        <Navbar/>
        <div className="flex gap-2">
      <div className="flex relative
       items-center flex-grow">
        <FiSearch className="absolute ml-1 text-3xl text-white"/>
         <input type="text" 
         className="h-10
         flex-grow
         border 
         rounded-md
         bg-transparent
         border-white
         text-white pl-9"
          />
        </div>
         <FaPlusCircle 
         onClick={onOpen}
         className=" text-5xl cursor-pointer  text-white "/> 
      </div>
      <div className="mt-4 gap-3 flex-col">
        {contacts.map((contact) => 
          (
           <ContactCard key={contact.id} contact={contact}></ContactCard>
        ))}
        
      </div>
    </div>
  <AddAndUpdateContact isOpen={isOpen}  onClose={onClose}/>
</>
  );
}

export default App;