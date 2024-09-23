import { useContext } from "react";
import Form from "../Modals/Form.jsx";
import styles from "../Styles/Header.module.css";
import { UserContext } from "../Context/UserContext.jsx";

function Header({  deleteHandler, allHandlere }) {
  const {showForm,setShowForm} = useContext(UserContext);
 
  const addHandler = () => {
    setShowForm(true);
  };

  return (
    <>
      <div className={styles.headerContainer}>
        <h3>Contacts</h3>
        <div className={styles.ButtonContainer}>
          <button className={styles.delete} onClick={deleteHandler}>
            Delete
          </button>
          <button className={styles.add} onClick={allHandlere}>
            All
          </button>
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
