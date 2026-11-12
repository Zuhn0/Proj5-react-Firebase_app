import Model from "./Model";
import { Formik,Form, Field } from "formik";
import {addDoc,collection,doc,updateDoc} from "firebase/firestore";
import {db} from "../config/firebase";
const AddAndUpdateContact=({isOpen,onClose,isUpdate,contact})=>{

  const addContact= async (contact)=>{
    try{
       const contactRef=collection(db,"contacts");
       await addDoc(contactRef,contact);
       onClose();
    } catch (error) {
      console.error("Error adding contact: ", error);
    }
  }
  const updateContact= async (contact)=>{
    try{
       const contactRef=doc(db,"contacts",contact.id);
       await updateDoc(contactRef,contact);
       onClose();
    } catch (error) {
      console.error("Error updating contact: ", error);
    }
  }


  return (
    <div>
         <Model isOpen={isOpen}
    onClose={onClose}>
         <Formik
           initialValues={{ name: contact?.name || "", email: contact?.email || "" }}
           onSubmit={(values)=>{
            console.log(values);
            isUpdate ? updateContact({ id: contact.id, name: values.name, email: values.email }) :
            addContact({ name: values.name, email: values.email });
           }}  
         >
          <Form>
           <div className="flex flex-col gap 1">
            <label htmlFor="name">
                Name
              </label>
             <Field name="name" placeholder="Name"/>
           </div>
           <div className="flex flex-col gap 1">
            <label htmlFor="email">
                Email
              </label>
             <Field name="email" placeholder="Email"/>
           </div>

            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4" type="submit ">
              {isUpdate ? "Update" : "Add"} contact
            </button>
          </Form>
         </Formik>
    </Model>
    </div>
  )
}
export default AddAndUpdateContact;