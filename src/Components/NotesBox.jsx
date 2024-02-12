import React, { useEffect, useState } from "react";
import Notesdisplay from "./Notesdisplay";

const NotesBox = ({ NoteName, setSaveNotes }) => {
  const [saveInputText, setsaveInputText] = useState("");
  const [count, setcount] = useState(1);

 
  const HandleSaveNotes = () => {
    const UniqueGrpData =  window.localStorage.getItem(NoteName.groupid);
    let newNotes =[]
    if(UniqueGrpData){
      const parsedData=JSON.parse(UniqueGrpData)
      newNotes=[...parsedData, saveInputText]
    }else{
      newNotes=[saveInputText]
    }
    setSaveNotes(newNotes)
    window.localStorage.setItem(NoteName.groupid, JSON.stringify(newNotes))
    setsaveInputText('')
    setcount(count+1)
  };
  return (
    <main className="noteBox-main">
      <nav style={{ backgroundColor: "#001F8B" }}>
        <div
          style={{ display: "flex", gap: "30px", padding: " 10px 0 10px 15px" }}
          className="nav-item"
        >
          <div
            style={{ backgroundColor: NoteName.color }}
            className="note-circle"
          >
            <span> {NoteName.ShortName}</span>
          </div>
          <div className="note-name" style={{ color: "#FFF" }}>
            {NoteName.groupName}
          </div>
        </div>
      </nav>
      <Notesdisplay groupId={NoteName.groupid} count={count} />
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
          <div onClick={() => HandleSaveNotes()}>
            <svg
              width="35"
              height="29"
              viewBox="0 0 35 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 29V18.125L14.5 14.5L0 10.875V0L34.4375 14.5L0 29Z"
                fill="#ABABAB"
              />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotesBox;
