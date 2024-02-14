import React, { useEffect, useState } from 'react'
import {HandleSendDatatoNoteBox} from './HandleExport'


const NewNotesGrp = ({IsNoteadd,SetOpenNoteBox ,setNoteName }) => {
    
    const [noteGroup, SetnoteGroup] =useState([]);
   
    useEffect(()=>{
        const UpdateNewnotes=()=>{
        const groupFilter = Object.keys(localStorage).filter(key=>
            key.startsWith("groupData_")
        );
        const groupMap = groupFilter.map((key)=>(
            JSON.parse(localStorage.getItem(key))
            ));
             
            SetnoteGroup(groupMap)
        }
        UpdateNewnotes()
       
    },[IsNoteadd]);
   
   
   
  return (
    <div className='new-notegrp' >
    <section style={{ display:'flex', gap:'10px', flexDirection:'column' , }} > 
        {noteGroup.map((group, index)=>(
            <main  key={index} className='newnotegrp-container' onClick={ ()=>HandleSendDatatoNoteBox(group,SetOpenNoteBox,setNoteName) } >
               
            <div style={{   display: 'flex',
                            gap: '15px' ,
                            padding:" 10px 0 10px 15px"
                            }}     >
            <div style={{   backgroundColor:group.color, }} className='note-circle' >
               <span> {group.ShortName}</span>
                </div>
            <div className='note-name' ><p>{group.groupName}</p></div>
            </div>
            </main>
        ))}
  </section>
  </div>
  )
}

export default NewNotesGrp

