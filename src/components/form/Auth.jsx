import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AuthForm = (props) => {
  const { updateAuthModalView } = props;
  const { register, handleSubmit } = useForm();
  const [isNotLogin, setIsNotLogin] = useState(false);
  const onSubmit = (data) => {
    if (data.username === "okra_user" && data.password === "okra_pass") {
      updateAuthModalView("user account");
      setIsNotLogin(false);
    } else {
      setIsNotLogin(true);
    }
  };

  return (
    <form className="form-style" onSubmit={handleSubmit(onSubmit)}>
      {isNotLogin && (
        <div className="danger">
          You entered an incorrect email and password
        </div>
      )}
      <div>
        <input
          type="text"
          className="form-input"
          placeholder="Email Address / Phone Number"
          {...register("username")}
          autoComplete="off"
          onFocus={(event) => {
            event.target.setAttribute("autocomplete", "off");
          }}
        />
        <input
          type="password"
          className="form-input"
          placeholder="Password / PIN"
          {...register("password")}
          autoComplete="off"
          onFocus={(event) => {
            event.target.setAttribute("autocomplete", "off");
          }}
        />
      </div>
      <button type="submit" className="button">
        Login
      </button>
    </form>
  );
};
export default AuthForm;
