import React from "react";

const Tab = ({ name, activeOptionTab, setActiveOptionTab }) => {
  return (
    <div
      className={`tab ${activeOptionTab === name && "tab-active"}`}
      onClick={() => setActiveOptionTab(name)}
    >
      {name}
    </div>
  );
};

export default Tab;
