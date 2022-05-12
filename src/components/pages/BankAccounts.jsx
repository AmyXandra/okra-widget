import React from "react";
import BankAccount from "../form/BankAccounts";
import { user } from "../utils/userDetails";
import ModalNav from "../modals/ModalNav";

const BankAccounts = ({ updateAuthModalView }) => {
  return (
    <div>
      <ModalNav
        previousView="login"
        updateAuthModalView={updateAuthModalView}
      />
      <h2>Which account do you want to pay from?</h2>
      <p className="auth_desc">ACCOUNT NAME: {user.name}</p>
      <BankAccount user={user} updateAuthModalView={updateAuthModalView} />
    </div>
  );
};

export default BankAccounts;
