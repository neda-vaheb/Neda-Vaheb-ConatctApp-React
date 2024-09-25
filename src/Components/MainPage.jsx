import { useContext, useEffect} from "react";
import Header from "./Header.jsx";
import Search from "./Search.jsx";
import ContactList from "./ContactList.jsx";
import Form from "../Modals/Form.jsx";
import { UserContext } from "../Context/UserContext.jsx";
import UserProvider from "../Context/UserContext.jsx";
import axios from "axios";
import mockData from "../db.json";

function MainPage() {
  const { contacts, setContacts, showForm } = useContext(UserContext);
  useEffect(() => {
    const fetchcontact = () => {
      for (let i = 0; i < mockData.length; i++) {
        axios
          .get(`http://localhost:3000/${i}`)
          .then((res) => setContacts((contacts) => [...contacts, res.data]));
      }
    };
    fetchcontact();
  }, []);
  return (
    <UserProvider>
      <Search />
      <Header />
      {showForm && <Form />}
      {!!contacts.length ? (
        <ContactList />
      ) : (
        <p className="alertText"> No Contacts</p>
      )}
    </UserProvider>
  );
}

export default MainPage;
