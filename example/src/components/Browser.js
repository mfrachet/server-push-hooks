import React from "react";
import "./Browser.css";

export const Browser = ({ children }) => (
  <div className="browser">
    <div className="browser-row">
      <div className="browser-column">
        <span className="browser-dot" style={{ background: "#ED594A" }} />
        <span className="browser-dot" style={{ background: "#FDD800" }} />
        <span className="browser-dot" style={{ background: "#5AC05A" }} />
      </div>
      <div className="browser-column browser-middle">
        <input
          type="text"
          value="https://twitter.com/"
          readOnly
          className="browser-input"
        />
      </div>
      <div className="browser-column">
        <span className="browser-bar" />
        <span className="browser-bar" />
        <span className="browser-bar" />
      </div>
    </div>

    <div className="browser-content">{children}</div>
  </div>
);
