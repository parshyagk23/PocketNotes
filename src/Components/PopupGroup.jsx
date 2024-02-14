import React, { useState, useEffect } from "react";

const PopupGroup = ({ open, close, Setisnoteadd }) => {
  
 
  const [GroupData, SetgroupData] = useState({
    groupid:'',
    groupName: "",
    color: "",
    ShortName: "",
  });
  const [error, Seterror] = useState({
    groupName: null,
    color: null,
  });

  const [ShortName, SetShortName] = useState("");
  const [count, SetCount] = useState(0);

  useEffect(() => {
    const createProfileName = () => {
      const words = GroupData.groupName.trim().split(" ");
      let shortName = "";
      if (words.length < 2) {
        shortName = words[0]?.charAt(0).toUpperCase();
      } else {
        let firstWord = words[0];
        let lastWord = words[words.length - 1];
        shortName =
          firstWord.charAt(0).toUpperCase() + lastWord.charAt(0).toUpperCase();
      }
      SetShortName(shortName);
     
    };
    createProfileName();
  },);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".popup-group")) {
        Seterror((prev) => {
          return { ...prev, groupName: null, color: null };
        });
        SetgroupData({groupid:'', groupName: "", color: "", ShortName: "" });
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [close]);

  if (!open) return null;

  const ChooseColorArr = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];

  const HandleCreateGroup = () => {
    let isError = false;
    if (GroupData.groupName.trim().length == 0) {
      Seterror((prev) => {
        return { ...prev, groupName: "Name field is required" };
      });
      isError = true;
    } else {
      Seterror((prev) => {
        return { ...prev, groupName: null };
      });
    }
    if (GroupData.color.trim().length == 0) {
      Seterror((prev) => {
        return { ...prev, color: "Choose the color" };
      });
      isError = true;
    } else {
      Seterror((prev) => {
        return { ...prev, color: null };
      });
    }

    if (isError) {
      return;
    } else {
      const localCount = parseInt(window.localStorage.getItem("count") || 0) + 1;
      window.localStorage.setItem("count", localCount);
      window.localStorage.setItem(`groupData_${localCount}`,JSON.stringify(GroupData));

      SetCount(localCount);
      SetgroupData({groupid:'', groupName: "", color: "", ShortName: "" });
      Setisnoteadd((prev) => !prev);
      close();
    }
  };

  return (
    <main  className="popup-bg-blur" >
    <section className="popup-group">
      <div className="group">
        <h2>Create New group</h2>
        <section>
          <div className="group-name">
            <label htmlFor="grp_name">Group Name</label>
            <input
              type="text"
              id="grp_name"
              placeholder="Enter group Name"
              onChange={(e) => {
                SetgroupData((prev) => {
                  return { ...prev, groupName: e.target.value };
                });
              }}
            />
          </div>
          <p style={{ color: "red", fontSize: "20px" }}>{error.groupName}</p>
          <div className="color-choose">
            <h3>Choose colour</h3>
            <div>
              {ChooseColorArr.map((bgcolor, index) => (
                <span
                  key={index}
                  style={{
                    background: bgcolor,
                    border: GroupData.color === bgcolor ? "2px solid blue" : "",
                  }}
                  onClick={() => {
                    SetgroupData((prev) => {
                      return {
                        ...prev,
                        color: bgcolor,
                        ShortName:ShortName,
                        groupid:`${ShortName}Note_${count+1}`
                      };
                    });
                  }}
                ></span>
              ))}
            </div>
          </div>
          <p style={{ color: "red", fontSize: "20px" }}>{error.color}</p>
        </section>
        <div className="popupgrp-btn"   >
        <button onClick={HandleCreateGroup}>create</button>
        </div>
      </div>
    </section>
    </main>
  );
};

export default PopupGroup;
