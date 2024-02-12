
import NewNotesGrp from './NewNotesGrp';
import PopupGroup from './PopupGroup'
import { useState } from 'react'
const NotesGrpList = ({SetOpenNoteBox, setNoteName , setSaveNotes}) => {
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
          <NewNotesGrp  IsNoteadd={IsNoteadd} SetOpenNoteBox={SetOpenNoteBox} setNoteName={setNoteName}   setSaveNotes={setSaveNotes}/>
        </div>
        <div className='addgrpbtn'onClick={openPopup} >
            <button  >+</button>
        </div>
           <PopupGroup  open ={IsOpenPopup} close={closePopup} Setisnoteadd={Setisnoteadd}  />
    </div>
  )
}

export default NotesGrpList