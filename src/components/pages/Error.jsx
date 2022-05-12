import React from "react";

const Error = () => {
  return (
    <>
      <div
        style={{ position: "absolute", bottom: "50%", left: "0", right: "0" }}
      >
        <div
          style={{
            margin: "0 auto",
            textAlign: "center",
            padding: "20px",
            maxWidth: "380px",
          }}
        >
          <h2>Error!!!</h2>
          <p style={{ lineHeight: "24px" }}>
            This app cannot be reached. Check your credentials and try again.
          </p>
        </div>
      </div>
    </>
  );
};

export default Error;
