import React from "react";

const Success = ({ modalProps }) => {
  const lastFour = modalProps.substr(modalProps.length - 4);
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
          <div className="success-icon">
            <svg
              width={22}
              height={17}
              viewBox="0 0 22 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.2814 0.448771C20.7641 -0.0530734 19.9441 -0.0530734 19.4269 0.448771L7.02329 12.9085L2.628 8.49329C2.1159 7.96065 1.27088 7.94596 0.740715 8.46037C0.210474 8.97479 0.195849 9.82363 0.707947 10.3562C0.718661 10.3673 0.72961 10.3783 0.740715 10.3891L6.07965 15.7522C6.60082 16.2756 7.44576 16.2756 7.96693 15.7522L21.3142 2.34451C21.8263 1.81195 21.8116 0.963185 21.2814 0.448771Z"
                fill="#ffffff"
              />
            </svg>
          </div>
          <p style={{ lineHeight: "24px" }}>
            Your account ending in {lastFour} has been successfully linked and
            debited.
          </p>
        </div>
      </div>
      <button className="button">Return to CrossWallet</button>
    </>
  );
};

export default Success;
