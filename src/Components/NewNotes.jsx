import React, { useEffect, useState } from 'react'

const NewNotes = ({IsNoteadd}) => {
    const [group, Setgroup] =useState([]);
   
    useEffect(()=>{
        const UpdateNewnotes=()=>{
        const groupFilter = Object.keys(localStorage).filter(key=>
            key.startsWith("groupData_")
        );
        const groupMap = groupFilter.map((key)=>(
            JSON.parse(localStorage.getItem(key))
            ));
          
                
        Setgroup(groupMap)
        }
        UpdateNewnotes()
        
       
    },[IsNoteadd]);
  
   
   
  return (
    <div style={{ overflowY: 'scroll', height:'85vh' }} >
    <section style={{ display:'flex', gap:'10px', flexDirection:'column' , }} > 
        {group.map((group, index)=>(
            <main  key={index} className='note-container' >
               
            <div style={{   display: 'flex',
                            gap: '30px' ,
                            padding:" 10px 0 10px 15px"
                            }}     >
            <div style={{   backgroundColor:group.color, }} className='note-circle' >
               <span> {group.NoteName}</span>
                </div>
            <div className='note-name' >{group.groupName}</div>
            </div>
            </main>
        ))}
  </section>
  </div>
  )


}

export default NewNotes
