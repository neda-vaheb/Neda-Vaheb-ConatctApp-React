
import React, { useContext } from 'react'

import styles from "../Styles/Form.module.css"
import { UserContext } from '../Context/UserContext';
function DeleteModal() {
  const{setCheckDelete,deleteHandler } = useContext(UserContext);
    const deleteModalHandler = ()=>{
setCheckDelete(false);
    }
  return (
    <div className={styles.Container}>
      <div className={styles.deleteModalContainer}>
       <div>
        <button className={styles.closeHandler} onClick={deleteModalHandler}>X</button>

       
     
        
        <p>
            Are you sure To Delet the contacts
        </p>
        </div>
        <div className={styles.deleteControler}>
        <button onClick={deleteHandler}>Yes</button>
        <button onClick={()=>setCheckDelete(false)}>No</button>
        </div>
    
      </div>
    </div>
  )
}

export default DeleteModal
