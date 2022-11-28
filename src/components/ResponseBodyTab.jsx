import React from "react";
import ReactCodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { dracula } from "@uiw/codemirror-theme-dracula";

const ResponseBodyTab = ({ data }) => {
  return (
    <div className="bg-base-300 p-2 rounded-md">
      <ReactCodeMirror
        value={JSON.stringify(data, null, 4)}
        className="font-mono"
        maxHeight="500px"
        extensions={[json()]}
        theme={dracula}
        readOnly
      />
    </div>
  );
};

export default ResponseBodyTab;
