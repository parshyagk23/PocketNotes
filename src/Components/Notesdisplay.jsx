import React, { useEffect, useState } from 'react'

const Notesdisplay = ({groupId,count}) => {
    const [getNotes ,setNotes] = useState([])
    useEffect(()=>{
        
       const Notesdata= JSON.parse(window.localStorage.getItem(groupId))
       if(Notesdata === null){
           setNotes([])
       }else{
        setNotes(Notesdata)
       }
    },[groupId,count])


  return (
    <div>
        {getNotes.map((note, index)=>(
            <div key={index} >
                {note}
            </div>
        ))}
    </div>
  )
}

export default Notesdisplay