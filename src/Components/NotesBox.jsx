import React, {  useEffect, useState } from "react";
import Notesdisplay from "./Notesdisplay";

const NotesBox = ({ NoteName }) => {
  const [saveInputText, setsaveInputText] = useState("");
  
  const HandleSaveNotes = () => {
    const UniqueGrpData =  window.localStorage.getItem(NoteName.groupid);
    let newNotes =[]
    let time = []
    let date =[]
    let DateTime=new Date();
    const FormatCurrentDate= `${DateTime.toLocaleDateString('en-IN',{
      day:'numeric',
      month:'short',
      year:'numeric'
    })}`
    const FormatCurrentTime=`${DateTime.toLocaleTimeString('en-IN',{
      hour:'numeric',
      minute:'numeric',

    }).toUpperCase()}`

    if(UniqueGrpData){
      const parsedData=JSON.parse(UniqueGrpData)
      newNotes=[...parsedData.note, saveInputText]
      time =[...parsedData.Time, FormatCurrentTime]
      date =[...parsedData.Date, FormatCurrentDate]
    }else{
      newNotes=[saveInputText]
      time =[ FormatCurrentTime]
      date =[ FormatCurrentDate]

    }
    let saveNotes ={
      note:newNotes,
      Time:time,
      Date:date
    }
    
    window.localStorage.setItem(NoteName.groupid, JSON.stringify(saveNotes))
    setsaveInputText('')
    
  };

  return (
    <main className="noteBox-main">
      <nav style={{ backgroundColor: "#001F8B" }}>
        <div
          style={{ display: "flex", gap: "30px", padding: " 10px 0 10px 15px" }}
          className="nav-item"
        >
          <div
            style={{ backgroundColor: NoteName.color , width:'66px' }}
            className="note-circle"
          >
            <span> {NoteName.ShortName}</span>
          </div>
          <div className="note-name" style={{ color: "#FFF" }}>
            {NoteName.groupName}
          </div>
        </div>
      </nav>
      <Notesdisplay groupId={NoteName.groupid} saveInputText={saveInputText} />
      <div className="input-box">
        <div
          style={{
            background: "#FFF",
            margin: "20px",
            borderRadius: "9px",
            padding: "0 20px 20px 0",
            display: "flex",
            alignItems: "end",
          }}
        >
          <textarea
            name=""
            id=""
            rows="4"
            value={saveInputText}
            placeholder="Enter your text here..........."
            onChange={(e) => setsaveInputText(e.target.value)}
          ></textarea>
          <button style={{all:'unset', cursor:'pointer'}} onClick={() => HandleSaveNotes()} disabled={saveInputText===""}  >
            <svg
              width="35"
              height="29"
              viewBox="0 0 35 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              
            >
              <path
                d="M0 29V18.125L14.5 14.5L0 10.875V0L34.4375 14.5L0 29Z"
                fill= {saveInputText==="" ?"#ABABAB":"#001F8B"}
              />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotesBox;
