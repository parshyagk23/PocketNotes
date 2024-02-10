
import PopupGroup from './PopupGroup'
import { useState } from 'react'
const NotesGrpList = () => {
 const [IsOpenPopup , setIsOpenPopup] = useState(false)
 const openPopup = () => {
    setIsOpenPopup(true);
  };

  const closePopup = () => {
    setIsOpenPopup(false);
  };
  return (
    <div className='notesgrp' >
        <div  className='notetitle'  >
            <h1>Pocket Notes</h1>
        </div>
        <div className='addgrpbtn' >
            <button onClick={openPopup} >+</button>
        </div>
           <PopupGroup  open ={IsOpenPopup} close={closePopup} />
    </div>
  )
}

export default NotesGrpList