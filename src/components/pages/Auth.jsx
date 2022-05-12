import React from "react";
import AuthForm from "../form/Auth";
import ModalNav from "../modals/ModalNav";

const Auth = (props) => {
  const { updateAuthModalView, modalProps } = props;
  return (
    <div>
      <ModalNav previousView="home" updateAuthModalView={updateAuthModalView} />
      <h2>Type in your credentials</h2>
      <p className="auth_desc">
        By entering your {modalProps.name} credentials here, you’re authorising
        Okra to pay Kent Woods the agreed amount.
      </p>

      <AuthForm updateAuthModalView={updateAuthModalView} />
      <p
        style={{
          fontWeight: 100,
          fontSize: "16px",
          letterSpacing: "-0.006px",
          color: "#222222",
        }}
      >
        Forgot Password?
      </p>
    </div>
  );
};

export default Auth;
