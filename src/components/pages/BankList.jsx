import React, { useState, useEffect } from "react";
import Search from "../bankList/Search";
import ListItem from "../bankList/ListItem";
import useBankData from "../hooks/usebankData";

const BankList = ({ updateAuthModalView }) => {
  const { bankData } = useBankData();
  const [bankList, setBankList] = useState([]);
  useEffect(() => {
    setBankList(bankData);
  }, [bankData]);

  return (
    <div>
      <h2>What bank do you use?</h2>
      <Search setBankList={setBankList} />
      <ListItem bankList={bankList} updateAuthModalView={updateAuthModalView} />
    </div>
  );
};

export default BankList;
