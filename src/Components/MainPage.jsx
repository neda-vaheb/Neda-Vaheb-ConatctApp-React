import { useContext, useEffect, useState } from "react";
import Header from "./Header.jsx";
import Search from "./Search.jsx";
import ContactList  from "./ContactList.jsx"
import Form from "../Modals/Form.jsx";
import { UserContext } from "../Context/UserContext.jsx";
import UserProvider from "../Context/UserContext.jsx";
import axios from "axios";
import mockData from"../db.json"
import DeleteModal from "../Modals/deleteModal.jsx";

function MainPage() {
  const {
    contacts,
    setContacts,
    showForm,
    check,
    checkContact,
    setCheckContact
  } = useContext(UserContext);
  useEffect(()=>{
    const fetchcontact = ()=>{
      for(let i=0 ; i<mockData.length ; i++){
        axios.get(`http://localhost:3000/${i}`).then(res=>setContacts(contacts=>[...contacts , res.data]));
      }
      console.log(contacts);
    }
    fetchcontact();

  },[])
  let newContact = [];
  const [checkDelete, setCheckDelete] = useState(false);


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

  

  return (
    <UserProvider>
      <Search />
      <Header deleteHandler={deleteHandler} />
      {showForm && <Form  />}
      {!!contacts.length ? (
        <ContactList/>
      ) : (
        <p className="alertText"> No Contacts</p>
      )}
    </UserProvider>
  );
}

export default MainPage;
