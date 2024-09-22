import { useContext, useEffect, useState } from "react";
import Header from "./Header.jsx";
import Search from "./Search.jsx";
import ContactList  from "./ContactList.jsx"
import Form from "../Modals/Form.jsx";
import { UserContext } from "../Context/UserContext.jsx";
import UserProvider from "../Context/UserContext.jsx";
import axios from "axios";

function MainPage() {
  const {
    contacts,
    setContacts,
    showForm,
    check,
    checkContact,
    setCheckContact,
  } = useContext(UserContext);
// useEffect(()=>{
// axios.get("localhost:3000").then()
// },[])
  let newContact = [];
  const [checkDelete, setCheckDelete] = useState(false);

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
      <Search />
      <Header allHandlere={allHandlere} deleteHandler={deleteHandler} />
      {showForm && <Form />}
      {!! contacts.length ? (
        <ContactList deleteHandlerItem={deleteHandlerItem} />
      ) : (
        <p className="alertText"> No Contacts</p>
      )}
    </UserProvider>
  );
}

export default MainPage;
