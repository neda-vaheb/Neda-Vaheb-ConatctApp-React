import { useState } from "react";
import { v4 } from "uuid";
import styles from "../Styles/Form.module.css";
import Input from "./Input.jsx";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext.jsx";

function Form() {
  const { setShowForm,setContacts,alert,setAlert} = useContext(UserContext);
 
  const[contact ,setContact] = useState({
    id:"",
    name:"",
    lastName:"",
    email:"",
    phone:""
  })
  const submitHandler = (event) => {
    event.preventDefault();
    const emailPatern =/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please fill in the required fields");
      return;
    }

    if(!emailPatern.test(contact.email)) setAlert("please Enter the valid Email");
    
    setAlert("");
    const newContact = { ...contact, id: v4() };
    setContacts((contacts) => [...contacts, newContact]);
    setShowForm(false)
  };
  const closeHandler = () => {
    setShowForm(false)
  };

  return (
    <div className={styles.Container}>
      <form onSubmit={submitHandler}>
        <div className={styles.formHeader}>
          <h5>Add Contact</h5>
          <button onClick={closeHandler}>X</button>
        </div>
        <Input contact={contact} setContact={setContact}/>
     

        {alert && <p className={styles.alert}>{alert}</p>}
        <div className={styles.formButtons}>
          <button className={styles.cancel} onClick={closeHandler}>
            Cancel
          </button>
          <button className={styles.submit} type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
