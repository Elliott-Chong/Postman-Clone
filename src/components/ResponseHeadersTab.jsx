import React from "react";
import KeyValuePair from "./KeyValuePair";

const ResponseHeadersTab = ({ response }) => {
  return (
    <div className="p-6 bg-base-300 rounded-md">
      <div className="flex flex-col gap-4">
        {Object.entries(response.headers).map(([key, value], idx) => {
          return (
            <KeyValuePair key={idx} header={{ key, value }} readOnly={true} />
          );
        })}
      </div>
    </div>
  );
};

export default ResponseHeadersTab;
