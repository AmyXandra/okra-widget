import React, { useEffect, useState } from "react";
import RootModal from "./components/modals/RootModal";
import useModal from "./components/modals/UseModal";
import ModalRoute from "./components/ModalRoute";
import Error from "./components/pages/Error";
import "./styles/style.css";
import { credentials } from "./components/utils/userDetails";

function App(props) {
  const { isShowing, toggle } = useModal();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const filteredArray = credentials.filter((element) => {
      if (
        element.env === props.init.env &&
        element.token === props.init.token &&
        element.key === props.init.key
      ) {
        return true;
      }
      return false;
    });
    filteredArray.length > 0 && setIsAuth(true);
  }, []);

  return (
    <div className="App">
      <div>
        <RootModal isShowing={isShowing} hide={toggle}>
          {isAuth ? <ModalRoute /> : <Error />}
        </RootModal>
      </div>
    </div>
  );
}

export default App;
