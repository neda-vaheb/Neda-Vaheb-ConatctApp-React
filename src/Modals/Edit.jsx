import { useContext } from "react";
import styles from "../Styles/Form.module.css";
import Input from "./Input.jsx";
import { UserContext } from "../Context/UserContext.jsx";

function Edit({
  editContact: { id },
  seteditContact,
  editContact,
  setIsEdit,
}) {
  const {contacts ,setContacts} = useContext(UserContext);

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    seteditContact((contact) => ({ ...contact, [name]: value, id }));
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const newContact = { ...editContact, id };
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts([...newContacts, newContact]);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    setIsEdit(false);
  };
  const closeHandler = () => {
    setIsEdit(false);
  };
  return (
    <div className={styles.Container}>
      <form onSubmit={submitHandler}>
        <div className={styles.formHeader}>
          <h5>Add Contact</h5>
          <button onClick={closeHandler}>X</button>
        </div>

        <Input contact={editContact} setContact={seteditContact} />

        <div className={styles.formButtons}>
          <button className={styles.cancel} onClick={closeHandler}>
            Cancel
          </button>
          <button className={styles.submit} type="submit">
            update
          </button>
        </div>
      </form>
    </div>
  );
}

export default Edit;
