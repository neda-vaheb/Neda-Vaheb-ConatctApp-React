import React, { createContext, useReducer, useState } from 'react';

export const UserContext = createContext();
// const initialState = {
// check:false,
// checkContact:[]
// }
// const reducer =()=>{
// switch(GrAction.type){
//   case"SUCCES":
//   return {check:true ,checkContact:[...checkContact, payload] }
//   case"FAIL":
//   return{check:false , checkContact:checkContactcontact.filter((contact) => payload !== contact.payload)}
// }
// }

function UserProvider({children}) {
// const [state ,dispatch]=useReducer(reducer , initialState)
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
    setCheckContact(contact=>[...contact, id])
  //  dispatch({type:"SUCCESS",payload:id})
  } else {
  //  dispatch({type:"FAIL", payload:id})
  setCheckContact(conatcts => conatcts.filter((contact) => id !== contact.id) )
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
