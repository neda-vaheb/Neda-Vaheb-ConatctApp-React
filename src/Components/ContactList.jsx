import Edit from "../Modals/Edit";
import { useContext, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { GoTrash } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";

import styles from "../Styles/ContactList.module.css";
import { UserContext } from "../Context/UserContext";

function ContactList() {
  const {contacts ,setContacts,setcheck,setCheckContact} = useContext(UserContext);

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
  const deleteHandlerItem = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  const checkHandler = (event, id) => {
    if (event.target.checked) {
      setcheck(true);
      setCheckContact((contact) => [...contact, id]);
    } else {
      setcheck(false);
      setCheckContact((contact) =>
        contact.filter((contact) => id !== contact.id)
      );
    }
  };

  return (
    <div className={styles.ContactListContainer}>
      <ul className={styles.contactsList}>
        {contacts.map((contact) => (
          <li key={contact.id} className={styles.contactItem}>
            <input
              type="checkBox"
              onChange={() => checkHandler(event, contact.id)}
              name={contact.id}
              value={contact.id}
            />
            {/* <button onClick={(e)=>checkHandler(e)} value={contact.id}>
            <RiCheckboxBlankFill  color={check ? "blue" : "white"}/>
            </button> */}

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
              <MdOutlineEmail className={styles.marginRight} />
              {contact.email}
            </p>

            <p className={styles.phone}>
              <LuPhone className={styles.marginRight} />

              {contact.phone}
            </p>
            <div>
              <button
                className={styles.trash}
                onClick={() => deleteHandlerItem(contact.id)}
              >
                <GoTrash fontSize="17px" />
              </button>
              <button
                className={styles.edit}
                onClick={() => editHandler(contact.id)}
              >
                <FaRegEdit fontSize="17px" />
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
        />
      )}
    </div>
  );
}

export default ContactList;
