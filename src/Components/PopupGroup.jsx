import React from "react";
import { useEffect } from "react";
const PopupGroup = ({ open, close }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".popup-group")) {
        close();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [close]);
  if (!open) return null;
  const ChooseColorArr =['#B38BFA','#FF79F2','#43E6FC','#F19576','#0047FF','#6691FF']
  return (
    <main className="popup-group">
    <div className="group" >
      <h2>Create New group</h2>
      <section>
        <div  className="group-name" >
          <label htmlFor="grp_name">Group Name</label>
          <input
            type="text"
            name=""
            id="grp_name"
            placeholder="Enter group Name"
          />
        </div>
        <div className="color-choose">
          <h3>Choose colour</h3>
          <div>
            {ChooseColorArr.map((bgcolor,index)=>(
              <span key={index} style={{ background: bgcolor }}></span>

            ))}
            {/* <span style={{ background: "#FF79F2" }}></span>
            <span style={{ background: "#43E6FC" }}></span>
            <span style={{ background: "#F19576" }}></span>
            <span style={{ background: "#0047FF" }}></span>
            <span style={{ background: "#6691FF" }}></span> */}
          </div>
        </div>
      </section>
      <button>create</button>
    </div>
    </main>
  );
};

export default PopupGroup;
