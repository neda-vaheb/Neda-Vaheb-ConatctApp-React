import React, { createContext, useState } from 'react';
import mockContacts from "../db.json";

export const UserContext = createContext();

function UserProvider({children}) {

  const [contacts, setContacts] = useState([]);
const[showForm ,setShowForm] =useState(false);
  const[check ,setcheck] = useState(false);
 const[checkContact,setCheckContact]= useState([]);
 const[search,setSearch]= useState("");
 const[alert,setAlert]= useState("");
let newContact = []
 const checkHandler = (event, id) => {
  if (event.target.checked) {
    setcheck(true);
    setCheckContact((contact) => [...contact, id]);
  } else {
    setcheck(false);
    setCheckContact((contact) =>
      contact.filter((contact) => id !== contact.id)
    );
  }
};
const deleteHandler = () => {
 
  if (check) {
    const newList = contacts.filter((item) => item.id !== contacts.id);
    setCheckContact(newList);
   
  } else {
    setCheckContact((checkContact) =>
      checkContact.filter((item) => item !== checkContact)
    );
  }

  newContact = contacts.filter((item) => !checkContact.includes(item.id));
  setContacts(newContact);

};

  return (
    
    <UserContext.Provider value={{contacts,alert,setAlert,checkHandler,deleteHandler,setContacts,showForm,setShowForm,check,setcheck,checkContact,setCheckContact,search,setSearch}}>
      {children}
    </UserContext.Provider>
      
    
  )
}

export default UserProvider
