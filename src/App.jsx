import { useState } from "react";
import Header from "./Header.jsx";
import Search from "./Search.jsx";
import Form from "./Form.jsx";
import ContactList from "./ContactList.jsx";

function App() {
  let newContact = [];
  const [showForm, setShowForm] = useState(false);
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) || []
  );
  const [search, setSearch] = useState("");
  const [checkContact, setCheckContact] = useState([]);

  const deleteHandlerItem = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  const deleteHandler = () => {
    
  //  for(let i=0; i<=contacts.length;i++){
  //   for(let j=i ; j<=checkContact.length;j++){
  //     if(contacts[i].id !== checkContact[j]){
       
  //     newContact.push(contacts[i])
  //     console.log(contacts[i]);
  //     }else{
        
  //     }
  //     }
  //   }
  //  console.log(newContact)
  // };
 console.log(checkContact.length) ;
  for(let i=1 ; i<checkContact.length;i++){
    newContact =  contacts.filter(contact => contact.id !== checkContact[i])
    console.log(newContact);
  }
  
  };

  const allHandlere = () => {

    setContacts(JSON.parse(localStorage.getItem("contacts")));
  };

  return (
    <>
      <Search
        search={search}
        setSearch={setSearch}
        contacts={contacts}
        setContacts={setContacts}
      />
      <Header
        showForm={showForm}
        setShowForm={setShowForm}
        allHandlere={allHandlere}
        deleteHandler={deleteHandler}
      />
      {showForm && (
        <Form
          contacts={contacts}
          setContacts={setContacts}
          setShowForm={setShowForm}
        />
      )}
      {contacts.length ? (
        <ContactList
          contacts={contacts}
          deleteHandlerItem={deleteHandlerItem}
          setContacts={setContacts}
          checkContact={checkContact}
          setCheckContact={setCheckContact}
        />
      ) : (
        <p className="alertText"> No Contacts</p>
      )}
    </>
  );
}

export default App;
