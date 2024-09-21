import { useContext, useState } from "react";
import Header from "./Components/Header.jsx";
import Search from "./Components/Search.jsx";
import Form from "./Components/ContactList.jsx";
import ContactList from "./Modals/Form.jsx";
import { UserContext } from "./Context/UserContext.jsx";
import UserProvider from "./Context/UserContext.jsx";

function App() {
  const {contacts ,setContacts} = useContext(UserContext);

  let newContact = [];
  const [showForm, setShowForm] = useState(false);

  const [check, setcheck] = useState(false);
  const [search, setSearch] = useState("");
  const [checkContact, setCheckContact] = useState([]);

  const deleteHandlerItem = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
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
    localStorage.setItem("contacts", JSON.stringify(newContact));
  };

  const allHandlere = () => {
    setContacts(JSON.parse(localStorage.getItem("contacts")));
  };

  return (
    <UserProvider>
      <Search
        search={search}
        setSearch={setSearch}
      />
      <Header
        showForm={showForm}
        setShowForm={setShowForm}
        allHandlere={allHandlere}
        deleteHandler={deleteHandler}
      />
      {showForm && (
        <Form
          setShowForm={setShowForm}
        />
      )}
      {contacts.length ? (
        <ContactList
          deleteHandlerItem={deleteHandlerItem}
          setCheckContact={setCheckContact}
          setcheck={setcheck}
        />
      ) : (
        <p className="alertText"> No Contacts</p>
      )}
    </UserProvider>
  );
}

export default App;
