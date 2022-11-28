import React from "react";

const JSONTab = ({ activeOptionTab }) => {
  return (
    <div
      className={`bg-base-300 mt-6 space-y-4 rounded-md p-6 ${
        activeOptionTab === "JSON" ? "block" : "hidden"
      }`}
    >
      <textarea className="w-full" />
    </div>
  );
};

export default JSONTab;
