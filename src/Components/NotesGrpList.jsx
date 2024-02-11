
import NewNotes from './NewNotes';
import PopupGroup from './PopupGroup'
import { useState } from 'react'
const NotesGrpList = () => {
 const [IsOpenPopup , setIsOpenPopup] = useState(false)
 const [IsNoteadd, Setisnoteadd] = useState(false)
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
        <div>
          <NewNotes  IsNoteadd={IsNoteadd} />
        </div>
        <div className='addgrpbtn' >
            <button onClick={openPopup} >+</button>
        </div>
           <PopupGroup  open ={IsOpenPopup} close={closePopup} Setisnoteadd={Setisnoteadd}  />
    </div>
  )
}

export default NotesGrpList