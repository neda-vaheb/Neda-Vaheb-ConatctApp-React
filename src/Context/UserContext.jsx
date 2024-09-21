import React, { createContext, useState } from 'react'

export const UserContext = createContext();

function UserProvider({children}) {
  const [contacts, setContacts] = useState([]);
  return (
    
    <UserContext.Provider value={{contacts , setContacts}}>
      {children}
    </UserContext.Provider>
      
    
  )
}

export default UserProvider
