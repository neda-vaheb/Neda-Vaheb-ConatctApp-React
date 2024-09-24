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
  const {contacts ,setContacts,setAlert,alert} = useContext(UserContext);
 
  const submitHandler = (event) => {

    event.preventDefault();
    setAlert("")
    const emailPatern =/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
console.log(editContact)
    if (
      !editContact.name ||
      !editContact.lastName ||
      !editContact.email ||
      !editContact.phone
    ) {
      setAlert("Please fill in the required fields");
      return;
    }

    if(!emailPatern.test(editContact.email)) setAlert("please Enter the valid Email");
    
    const newContact = { ...editContact, id };
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts([...newContacts, newContact]);
    setIsEdit(false);
  };
  const closeHandler = () => {
    setIsEdit(false);
  };
  return (
    <div className={styles.Container}>
      <form onSubmit={submitHandler}>
        <div className={styles.formHeader}>
          <h5>Edit Contact</h5>
          <button onClick={closeHandler}>X</button>
        </div>
        {/* <div className={styles.nameIdentity}>
        <div>
          <label className={styles.requir}>Name</label>
          <input
            type="text"
            placeholder="Name"
            value={editContact.name}
            name="name"
            onChange={changeHandler}
          />
        </div>
        <div>
          <label className={styles.requir}>Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            value={editContact.lastName}
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
            value={editContact.email}
            name="email"
            onChange={changeHandler}
          />
        </div>
        <div>
          <label className={styles.requir}>Phone Number</label>
          <input
            type="number"
            placeholder="Phone"
            value={editContact.phone}
            name="phone"
            onChange={changeHandler}
          />
        </div>
      </div> */}
<Input contact={editContact} setContact={seteditContact}/>
{alert && <p className={styles.alert}>{alert}</p>}
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
