import { useState } from "react";
import { v4 } from "uuid";
import styles from "./Form.module.css";
import Input from "./input";
function Form({ contacts, setContacts, setShowForm }) {
  const [alert, setAlert] = useState("");
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please fill in the required fields");
      return;
    }
    setAlert("");
    const newContact = { ...contact, id: v4() };
    setContacts((contacts) => [...contacts, newContact]);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    setShowForm(false);
  };
  const closeHandler = () => {
    setShowForm(false);
  };
  return (
    <div className={styles.Container}>
      <form onSubmit={submitHandler}>
        <div className={styles.formHeader}>
          <h5>Add Contact</h5>
          <button onClick={closeHandler}>X</button>
        </div>
        <Input contact={contact} setContact={setContact} />

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
