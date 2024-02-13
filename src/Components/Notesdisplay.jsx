import React, { useEffect, useState } from "react";

const Notesdisplay = ({ groupId, saveInputText }) => {
  const [getNotes, setNotes] = useState({
    note:[],
    Time:[],
    Date:[]
  });
  
 
  useEffect(() => {
    const Notesdata = JSON.parse(window.localStorage.getItem(groupId));
    if (Notesdata === null) {
      setNotes({
        note:[],
        Time:[],
        Date:[]
      });
    } else {
      setNotes((prev)=>{
        return {...prev , note:Notesdata.note, Time:Notesdata.Time, Date:Notesdata.Date}
      });
    }
    
   
  }, [groupId, saveInputText]);


  return (
   
    <main className="Notes-display-main"  >
      {getNotes.note.map((note, index)=>(
            <div  className="Notes-display"  key={index}>
            <div className="note-para"  >
              <p >
               {note}
              </p>
            </div>
            <div className="note-time" >
              <p>{getNotes.Date[index]} <span></span> {getNotes.Time[index]} </p>
            
            </div>
          </div>
        ))}
      
     
     </main>
  );
};

export default Notesdisplay;
