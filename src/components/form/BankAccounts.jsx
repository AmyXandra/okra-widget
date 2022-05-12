import React, { useState } from "react";

const BankAccount = (props) => {
  const { user, updateAuthModalView } = props;
  const [selectedOption, setSelectedOption] = useState("");
  const [showError, setShowError] = useState(false);
  const onValueChange = (event) => {
    setSelectedOption(event.target.value);
    setShowError(false);
  };
  const handleSubmit = () => {
    if (selectedOption !== "") {
      updateAuthModalView("success", selectedOption);
    } else {
      setShowError(true);
    }
  };

  return (
    <form>
      {showError && (
        <div className="danger">Select an account to be credited</div>
      )}
      {user.accounts.map((data) => {
        return (
          <div key={data.nuban}>
            <label
              className={
                data.nuban === selectedOption ? "radio selected" : "radio"
              }
            >
              <div>
                <span className="bold">
                  {data.name}: {data.nuban}
                </span>
                <span>
                  {data.currency === "ngn" ? "₦" : "$"} {data.balance}
                </span>
              </div>
              <input
                type="radio"
                value={data.nuban}
                checked={selectedOption === data.nuban}
                onChange={onValueChange}
              />
            </label>
          </div>
        );
      })}
      <button className="button" type="button" onClick={handleSubmit}>
        Pay ₦1,000 + NIP Charges
      </button>
    </form>
  );
};
export default BankAccount;
