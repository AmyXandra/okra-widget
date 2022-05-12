import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

export default {
  create: () => {
    return {
      open: (options) => {
        return ReactDOM.render(
          <App init={options} />,
          document.querySelector("#root")
        );
      },
    };
  },
};
