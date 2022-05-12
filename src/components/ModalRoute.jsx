import React, { useState } from "react";
import BankList from "./pages/BankList";
import Auth from "./pages/Auth";
import BankAccount from "./pages/BankAccounts";
import Success from "./pages/Success";

function ModalRoute() {
  const initialViews = [
    { state: true, component: BankList, name: "home" },
    { state: false, component: Auth, name: "login" },
    { state: false, component: BankAccount, name: "user account" },
    { state: false, component: Success, name: "success" },
  ];

  const [authModalViews, setAuthModalViews] = useState(initialViews);
  const [modalProps, setModalProps] = useState();
  const [currentView, setCurrentView] = useState({
    state: true,
    component: BankList,
    name: "home",
  });
  const updateAuthModalView = (name, data) => {
    const modalViews = [...authModalViews];
    const currentView = modalViews.find((view) => view.state);
    const index = modalViews.findIndex((view) => view.name === name);
    if (currentView) {
      const currentViewIndex = modalViews.findIndex(
        (view) => view.name === currentView.name
      );
      modalViews[currentViewIndex].state = false;
    }

    if (index !== -1) {
      modalViews[index].state = true;
      setCurrentView(modalViews[index]);
      data && setModalProps(data);
    }
    setAuthModalViews(modalViews);
  };
  return (
    <div>
      {currentView.state === true && currentView.component === BankList && (
        <BankList
          updateAuthModalView={updateAuthModalView}
          modalProps={modalProps}
        />
      )}
      {currentView.state === true && currentView.component === Auth && (
        <Auth
          updateAuthModalView={updateAuthModalView}
          modalProps={modalProps}
        />
      )}
      {currentView.state === true && currentView.component === BankAccount && (
        <BankAccount
          updateAuthModalView={updateAuthModalView}
          modalProps={modalProps}
        />
      )}
      {currentView.state === true && currentView.component === Success && (
        <Success
          updateAuthModalView={updateAuthModalView}
          modalProps={modalProps}
        />
      )}
    </div>
  );
}

export default ModalRoute;
