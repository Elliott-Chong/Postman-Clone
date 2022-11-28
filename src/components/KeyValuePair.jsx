import React from "react";
import { TrashIcon } from "@heroicons/react/20/solid";

const KeyValuePair = ({
  header,
  removeHeader,
  updateHeader,
  readOnly = false,
}) => {
  const handleChange = (e) => {
    updateHeader(header.id, e.target.name, e.target.value);
  };

  return (
    <form className="flex gap-4 justify-center">
      <input
        type="text"
        readOnly={readOnly}
        onChange={handleChange}
        value={header.key}
        name="key"
        placeholder="Key"
        className="input rounded-none placeholder:text-gray-600 w-full input-bordered"
      />
      <input
        type="text"
        readOnly={readOnly}
        onChange={handleChange}
        value={header.value}
        name="value"
        placeholder="Value"
        className="input rounded-none placeholder:text-gray-600 w-full input-bordered"
      />
      {!readOnly && (
        <button
          onClick={() => removeHeader(header.id)}
          className="btn rounded-none btn-error"
        >
          <TrashIcon className="w-6 h-6" />
        </button>
      )}
    </form>
  );
};

export default KeyValuePair;
