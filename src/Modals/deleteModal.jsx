import React, { useState } from 'react'

function deleteModal() {
    const [checkDelete , setCheckDelete]=useState(false);
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
        <button>No</button>

      </div>
    </div>
  )
}

export default deleteModal
