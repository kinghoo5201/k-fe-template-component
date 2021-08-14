// demo entry

import React from "react";
import ReactDOM from "react-dom";
import DemoComponent from "../src/index";
import "./index.less";

function Demo() {
  return (
    <div className="demo-container" data-title="DEMO">
      <DemoComponent />
    </div>
  );
}

ReactDOM.render(<Demo />, document.getElementById("root"));
