import React from "react";
import Tab from "./components/Tab";
import HeaderTab from "./components/HeaderTab";
import RequestForm from "./components/RequestForm";
import JSONTab from "./components/JSONTab";

function generateUUID() {
  // Public Domain/MIT
  var d = new Date().getTime(); //Timestamp
  var d2 =
    (typeof performance !== "undefined" &&
      performance.now &&
      performance.now() * 1000) ||
    0; //Time in microseconds since page-load or 0 if unsupported
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16; //random number between 0 and 16
    if (d > 0) {
      //Use timestamp until depleted
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      //Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

function App() {
  const [activeOptionTab, setActiveOptionTab] = React.useState("Headers");

  return (
    <main className="mx-auto py-10 max-w-xl">
      <RequestForm />

      <div className="tabs mt-6 w-fit tabs-boxed">
        <Tab
          name={"Headers"}
          activeOptionTab={activeOptionTab}
          setActiveOptionTab={setActiveOptionTab}
        />
        <Tab
          name={"JSON"}
          activeOptionTab={activeOptionTab}
          setActiveOptionTab={setActiveOptionTab}
        />
      </div>
      <HeaderTab
        activeOptionTab={activeOptionTab}
        generateUUID={generateUUID}
      />
      <JSONTab activeOptionTab={activeOptionTab} />
    </main>
  );
}

export default App;
