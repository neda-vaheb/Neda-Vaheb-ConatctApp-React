import { useContext } from "react";
import { UserContext } from "../Context/UserContext.jsx";

import Form from "../Modals/Form.jsx";
import styles from "../Styles/Header.module.css";
import DeleteModal from "../Modals/deleteModal.jsx";

function Header() {
  const { checkDelete ,showForm, setShowForm,  deleteHandlerModal } = useContext(UserContext);

  const addHandler = () => {
    setShowForm(true);
  };

  return (
    <>
      <div className={styles.headerContainer}>
        <h3>Contacts</h3>
        <div className={styles.ButtonContainer}>
          <button className={styles.delete} onClick={deleteHandlerModal}>
            Delete
          </button>
          {checkDelete && <DeleteModal/>}
          {/* <button className={styles.add} onClick={allHandlere}>
            All
          </button> */}
          <button className={styles.add} onClick={addHandler}>
            Add Contact
          </button>
          {showForm && <Form />}
        </div>
      </div>
    </>
  );
}

export default Header;
