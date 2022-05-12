import React from "react";
import useBankData from "../hooks/usebankData";

export default function Search({ setBankList = () => {} }) {
  const { bankData } = useBankData();

  function filterIt(searchKey) {
    const result = bankData.filter((input) => {
      return input.name.toLowerCase().includes(searchKey);
    });
    return setBankList(result);
  }

  const handleChange = (event) => {
    filterIt(event.target.value);
  };

  return (
    <form>
      <input
        className="form-input search input-shadow"
        type="search"
        placeholder="search"
        onChange={handleChange}
      />
    </form>
  );
}
