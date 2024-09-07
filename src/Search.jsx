import { CiSearch } from "react-icons/ci";

import styles from "./Search.module.css";

function Search({ search, setSearch, contacts, setContacts }) {
  const searchHandler = () => {
    if (search) {
      const newContacts = contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(search) ||
          contact.lastName.toLowerCase().includes(search) ||
          contact.email.toLowerCase().includes(search) ||
          contact.phone.toLowerCase().includes(search)
      );
      setContacts(newContacts);
      setSearch("");
    } else {
      setContacts(JSON.parse(localStorage.get("contacts")));
    }
  };
  return (
    <div className={styles.serachContainer}>
      <button onClick={searchHandler}>
        Search
        <CiSearch />

        
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
