import React from "react";
import KeyValuePair from "./KeyValuePair";
import { PlusIcon } from "@heroicons/react/20/solid";
import produce from "immer";

const HeaderTab = ({ headers, setHeaders, generateUUID, activeOptionTab }) => {
  const addHeader = () => {
    setHeaders(
      produce(headers, (draft) => {
        draft.push({ key: "", value: "", id: generateUUID() });
      })
    );
  };

  const removeHeader = (id) => {
    setHeaders(
      produce(headers, (draft) => {
        return draft.filter((header) => header.id !== id);
      })
    );
  };

  const updateHeader = (id, name, value) => {
    setHeaders(
      produce(headers, (draft) => {
        let header = draft.find((f) => f.id === id);
        header[name] = value;
      })
    );
  };
  return (
    <div
      className={`bg-base-300 mt-6 space-y-4 rounded-md p-6 ${
        activeOptionTab === "Headers" ? "block" : "hidden"
      }`}
    >
      {headers.map((header) => {
        return (
          <KeyValuePair
            removeHeader={removeHeader}
            updateHeader={updateHeader}
            key={header.id}
            header={header}
          />
        );
      })}
      <button onClick={addHeader} className="btn btn-success">
        <PlusIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default HeaderTab;
