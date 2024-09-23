import React, { useState } from 'react'

function DeleteModal({setCheckDelete ,checkDelete}) {
    const deleteModalHandler = ()=>{
setCheckDelete(false);
    }
  return (
    <div>
        <button onClick={deleteModalHandler}>X</button>
      <div>
        <p>
            Are you sure To Delet
        </p>
        <button >Yes</button>
        <button onClick={()=>setCheckDelete(false)}>No</button>

      </div>
    </div>
  )
}

export default DeleteModal
