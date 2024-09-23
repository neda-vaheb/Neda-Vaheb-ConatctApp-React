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


  return (
    
    <UserContext.Provider value={{contacts,alert,setAlert , setContacts,showForm,setShowForm,check,setcheck,checkContact,setCheckContact,search,setSearch}}>
      {children}
    </UserContext.Provider>
      
    
  )
}

export default UserProvider
