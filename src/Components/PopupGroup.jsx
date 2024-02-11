import React, { useState, useEffect } from "react";

const PopupGroup = ({ open, close, Setisnoteadd }) => {
 
  const [GroupData, SetgroupData] = useState({
    groupName: "",
    color: "",
    NoteName: "",
  });
  const [error, Seterror] = useState({
    groupName: null,
    color: null,
  });

  const [NoteName, SetNoteName] = useState("");
  const [count, SetCount] = useState(1);

  useEffect(() => {
    const createProfileName = () => {
      const words = GroupData.groupName.trim().split(" ");
      let Notename = "";
      if (words.length < 2) {
        Notename = words[0]?.charAt(0);
      } else {
        let firstWord = words[0];
        let lastWord = words[words.length - 1];
        Notename =
          firstWord.charAt(0).toUpperCase() + lastWord.charAt(0).toUpperCase();
      }
      SetNoteName(Notename);
    };
    createProfileName();
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".popup-group")) {
        Seterror((prev) => {
          return { ...prev, groupName: null, color: null };
        });
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
      window.localStorage.setItem(
        `groupData_${localCount}`,
        JSON.stringify(GroupData)
      );

      SetCount(localCount);
      SetgroupData({ groupName: "", color: "", NoteName: "" });
      Setisnoteadd((prev) => !prev);
      close();
    }
  };

  return (
    <main className="popup-group">
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
                        NoteName: NoteName,
                      };
                    });
                  }}
                ></span>
              ))}
            </div>
          </div>
          <p style={{ color: "red", fontSize: "20px" }}>{error.color}</p>
        </section>
        <div style={{ display: 'flex',
                    justifyContent: 'end' }}   >
        <button onClick={HandleCreateGroup}>create</button>
        </div>
      </div>
    </main>
  );
};

export default PopupGroup;
