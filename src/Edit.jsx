import styles from "./Form.module.css";
function Edit({
  editContact: { id, name, lastName, email, phone },
  seteditContact,
  editContact,
  contacts,
  setContacts,
  setIsEdit,
}) {
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
        <div className={styles.nameIdentity}>
          <div>
            <label className={styles.requir}>Name</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              name="name"
              onChange={changeHandler}
            />
          </div>
          <div>
            <label className={styles.requir}>Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
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
              value={email}
              name="email"
              onChange={changeHandler}
            />
          </div>
          <div>
            <label className={styles.requir}>Phone Number</label>
            <input
              type="number"
              placeholder="Phone"
              value={phone}
              name="phone"
              onChange={changeHandler}
            />
          </div>
        </div>

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
