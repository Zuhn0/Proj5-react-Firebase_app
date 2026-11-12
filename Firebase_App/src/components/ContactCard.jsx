import {HiOutlineUserCircle } from 'react-icons/hi';
import {RiEditCircleLine} from 'react-icons/ri'
import {IoMdTrash} from 'react-icons/io'
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
import AddAndUpdateContact from './AddAndUpdateContact';
import useDisclouse from '../hooks/useDisclouse';

const ContactCard=({contact}) =>{
  const{isOpen,onOpen,onClose}=useDisclouse();

  const deleteContact= async (id)=>{
    try{
      await deleteDoc(doc(db,"contacts",id));
    } catch (error) {
      console.error("Error deleting contact: ", error);
    }
  };

  return(
    <>
    <div key={contact.id} className="bg-amber-300 flex items-center justify-between rounded-lg p-2">
            <HiOutlineUserCircle  />
            <div className="">
              <h2 className="font-medium">{contact.name}</h2>
              <p className="dont-sm">{contact.email}</p>
              </div>
              <div> 
                <RiEditCircleLine
                onClick={onOpen}
                />
                <IoMdTrash onClick={() => deleteContact(contact.id)} className="text-orange"/>
              </div>
          </div>
          <AddAndUpdateContact contact ={contact} isUpdate={true}  isOpen={isOpen} onClose={onClose} />
          </>
  );
}
export default ContactCard