import React, { useContext } from "react";
import styles from "../Styles/Form.module.css";
import { UserContext } from "../Context/UserContext";

function Input({contact:{name ,lastName , email , phone ,id} ,setContact}) {
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };
  return (
    <>
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
    </>
  );
}

export default Input;
