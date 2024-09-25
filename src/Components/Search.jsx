import { CiSearch } from "react-icons/ci";

import styles from "../Styles/Search.module.css";
import { useContext, useEffect } from "react";
import { UserContext } from "../Context/UserContext";

import mockContacts from "../db.json";

function Search() {
  const { contacts, setContacts, search, setSearch } = useContext(UserContext);
  useEffect(() => {
    const searchHandler = () => {
      if (!search) {
        setContacts(mockContacts);
        return;
      }

      const newContacts = contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(search) ||
          contact.lastName.toLowerCase().includes(search) ||
          contact.email.toLowerCase().includes(search) ||
          contact.phone.toLowerCase().includes(search)
      );
      setContacts(newContacts);
    };
    searchHandler();
  }, [search]);

  return (
    <div className={styles.serachContainer}>
      <button>
        Search
        <CiSearch className={styles.SearchIcon} />
      </button>

      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
      />
    </div>
  );
}

export default Search;
