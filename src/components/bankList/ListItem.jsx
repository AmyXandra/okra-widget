import React from "react";
import useBankData from "../hooks/usebankData";

export default function ListItem(props) {
  const { isLoading } = useBankData();
  const { bankList, updateAuthModalView } = props;

  const handleRoute = (bank) => {
    updateAuthModalView("login", bank);
  };
  const BankItem = (props) => (
    <div className="item flex" onClick={() => handleRoute(props)}>
      <figure>
        <img src={props.logo1} className="icon" alt={props.name} />
      </figure>
      <p>{props.name}</p>
    </div>
  );
  return (
    <div className="py-10">
      {!isLoading ? (
        bankList.map((bank) => <BankItem key={bank.id} {...bank} />)
      ) : (
        <p className="loading-text">Loading Data...</p>
      )}
    </div>
  );
}
