import Edit from "./Edit";
import { useState } from "react";

import styles from "./ContactList.module.css";
import emailIcon from "./assets/image/email.svg";
import phoneIcon from "./assets/image/phone.svg";
import trashIcon from "./assets/image/trash.svg";
import edit from "./assets/image/edit.svg";

function ContactList({
  check,
  setCheck,
  contacts,
  deleteHandlerItem,
  setContacts,
  checkContact,
  setCheckContact,
}) {
  const [isEdit, setIsEdit] = useState(false);

  const [editContact, seteditContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const editHandler = (id) => {
    setIsEdit(true);
    const editContact = contacts.find((contact) => id === contact.id);
    seteditContact(editContact);
  };
  const checkHandler = (id) => {
    setCheck((check) => !check);
    if (check) {
      const checkContacts = contacts.filter((contact) => contact.id !== id);
      setCheckContact(checkContacts);
    } else return;
  };
  return (
    <div className={styles.ContactListContainer}>
      <ul className={styles.contactsList}>
        {contacts.map((contact) => (
          <li key={contact.id} className={styles.contactItem}>
            <input
              checked={check}
              type="checkBox"
              onChange={() => checkHandler(contact.id)}
              name={contact.id}
              value={contact.id}
            />
            <div className={styles.abbreviated}>
              <span>
                {contact.name.split("")[0]}
                {contact.lastName.split("")[0]}
              </span>
            </div>
            <p className={styles.name}>
              {contact.name} {contact.lastName}
            </p>

            <p className={styles.userEmail}>
              <img src={emailIcon} />
              {contact.email}
            </p>

            <p className={styles.phone}>
              <img src={phoneIcon} />
              {contact.phone}
            </p>
            <div>
              <button
                className={styles.trash}
                onClick={() => deleteHandlerItem(contact.id)}
              >
                <img src={trashIcon} />
              </button>
              <button
                className={styles.edit}
                onClick={() => editHandler(contact.id)}
              >
                <img src={edit} />
              </button>
            </div>
          </li>
        ))}
      </ul>
      {isEdit && (
        <Edit
          editContact={editContact}
          seteditContact={seteditContact}
          setIsEdit={setIsEdit}
          contacts={contacts}
          setContacts={setContacts}
        />
      )}
    </div>
  );
}

export default ContactList;
