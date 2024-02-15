import React, {  useState } from "react";
import Notesdisplay from "./Notesdisplay";

const NotesBox = ({ NoteName,SetOpenNoteBox }) => {
  const [saveInputText, setsaveInputText] = useState("");

  const HandleSaveNotes = () => {
    const UniqueGrpData = window.localStorage.getItem(NoteName.groupid);
    let newNotes = [];
    let time = [];
    let date = [];
    let DateTime = new Date();
    const FormatCurrentDate = `${DateTime.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })}`;
    const FormatCurrentTime = `${DateTime.toLocaleTimeString("en-IN", {
      hour: "numeric",
      minute: "numeric",
    }).toUpperCase()}`;

    if (UniqueGrpData) {
      const parsedData = JSON.parse(UniqueGrpData);
      newNotes = [...parsedData.note, saveInputText];
      time = [...parsedData.Time, FormatCurrentTime];
      date = [...parsedData.Date, FormatCurrentDate];
    } else {
      newNotes = [saveInputText];
      time = [FormatCurrentTime];
      date = [FormatCurrentDate];
    }
    let saveNotes = {
      note: newNotes,
      Time: time,
      Date: date,
    };

    window.localStorage.setItem(NoteName.groupid, JSON.stringify(saveNotes));
    setsaveInputText("");
  };

  return (
    <main className="noteBox-main">
      <nav style={{ backgroundColor: "#001F8B" }}>
        <div
          style={{ display: "flex", gap: "30px", padding: " 10px 0 10px 15px" }}
          className="nav-item"
        >
          <div className="backbtn"  onClick={()=>{SetOpenNoteBox(false)}} >
            <svg
              width="40"
              height="20"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.27495 10.85C6.47495 10.65 6.57095 10.4083 6.56295 10.125C6.55495 9.84167 6.45061 9.6 6.24995 9.4L3.42495 6.575H14.5749C14.8583 6.575 15.0959 6.479 15.2879 6.287C15.4799 6.095 15.5756 5.85767 15.5749 5.575C15.5749 5.29167 15.4789 5.054 15.2869 4.862C15.0949 4.67 14.8576 4.57433 14.5749 4.575H3.42495L6.27495 1.725C6.47495 1.525 6.57495 1.28733 6.57495 1.012C6.57495 0.736666 6.47495 0.499333 6.27495 0.3C6.07495 0.0999997 5.83728 0 5.56195 0C5.28661 0 5.04928 0.0999997 4.84995 0.3L0.274948 4.875C0.174948 4.975 0.103947 5.08333 0.0619469 5.2C0.0199471 5.31667 -0.000720024 5.44167 -5.34058e-05 5.575C-5.34058e-05 5.70833 0.0209484 5.83333 0.0629482 5.95C0.104948 6.06667 0.175614 6.175 0.274948 6.275L4.87495 10.875C5.05828 11.0583 5.28728 11.15 5.56195 11.15C5.83661 11.15 6.07428 11.05 6.27495 10.85Z"
                fill="white"
              />
            </svg>
          </div>
          <div
            style={{ backgroundColor: NoteName.color, width: "63px" , height:"63px" }}
            className="note-circle"
          >
            <span> {NoteName.ShortName}</span>
          </div>
          <div className="note-name" >
           <p style={{ color: "#FFF" }}> {NoteName.groupName}</p>
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
          rows="4"
            type="text"
            value={saveInputText}
            placeholder="Enter your text here..........."
            onChange={(e) => setsaveInputText(e.target.value)}
          ></textarea>
          <button
            style={{ all: "unset", cursor: "pointer" }}
            onClick={() => HandleSaveNotes()}
            disabled={saveInputText === ""}
          >
            <svg
              width="35"
              height="29"
              viewBox="0 0 35 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 29V18.125L14.5 14.5L0 10.875V0L34.4375 14.5L0 29Z"
                fill={saveInputText === "" ? "#ABABAB" : "#001F8B"}
              />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotesBox;
