import { useState } from "react";
import { v4 } from "uuid";
import styles from "./Form.module.css";
function Form({ contacts, setContacts, setShowForm }) {
  const [alert, setAlert] = useState("");
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
    check: false,
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };
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
        <div className={styles.nameIdentity}>
          <div>
            <label className={styles.requir}>Name</label>
            <input
              type="text"
              placeholder="Name"
              value={contact.name}
              name="name"
              onChange={changeHandler}
            />
          </div>
          <div>
            <label className={styles.requir}>Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              value={contact.lastName}
              name="lastName"
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className={styles.personalInfo}>
          <div>
            <label className={styles.requir}>Email</label>
            <input
              type="email"
              placeholder="Email"
              value={contact.email}
              name="email"
              onChange={changeHandler}
            />
          </div>
          <div>
            <label className={styles.requir}>Phone Number</label>
            <input
              type="number"
              placeholder="Phone"
              value={contact.phone}
              name="phone"
              onChange={changeHandler}
            />
          </div>
        </div>
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
