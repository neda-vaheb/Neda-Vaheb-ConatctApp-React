import { useContext, useState } from "react";
import Header from "./Components/Header.jsx";
import Search from "./Components/Search.jsx";
import Form from "./Components/ContactList.jsx";
import ContactList from "./Modals/Form.jsx";
import { UserContext } from "./Context/UserContext.jsx";
import UserProvider from "./Context/UserContext.jsx";
import MainPage from "./Components/MainPage.jsx";

function App() {
  

  return (
    <UserProvider>
     <MainPage/>
    </UserProvider>
  );
}

export default App;
