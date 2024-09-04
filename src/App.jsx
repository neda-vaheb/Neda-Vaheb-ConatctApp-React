import { useState } from "react";
import Header from "./Header.jsx";
import Search from "./Search.jsx";
import Form from "./Form.jsx";


import ContactList from "./ContactList.jsx";
import Input from "./input.jsx";

function App() {
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
    setContacts(checkContact);
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
        check={check}
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
