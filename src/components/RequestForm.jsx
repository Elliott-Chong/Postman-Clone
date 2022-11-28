import React from "react";
import axios from "axios";

const RequestForm = () => {
  const [verb, setVerb] = React.useState("GET");
  const [url, setUrl] = React.useState("");
  const sendRequest = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: verb.toLowerCase(),
        url,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={sendRequest} className="form-control">
      <label className="input-group">
        <select
          name="verb"
          value={verb}
          onChange={(e) => setVerb(e.target.value)}
          className="select select-bordered"
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="DELETE">DELETE</option>
          <option value="PUT">PUT</option>
        </select>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://www.example.com"
          className="input input-bordered placeholder:text-gray-600 w-full"
        />
        <button className="btn">Send</button>
      </label>
    </form>
  );
};

export default RequestForm;
