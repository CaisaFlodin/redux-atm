import "./App.css";
import ATM from "./components/ATM";
import { useSelector, useDispatch } from "react-redux";
import { atmActions } from "./redux/atmSlice";

function App() {
  const dispatch = useDispatch();

  const show = useSelector((state) => state.atm.showAtm);

  const toggleAtmHandler = () => {
    dispatch(atmActions.toggleAtm());
  };

  return (
    <div className="App">
      <header>
        <h1>React Redux ATM</h1>
      </header>

      <div className="wrapper">
        <button onClick={toggleAtmHandler} className="toggleATM">
          {show ? "Close ATM" : "Start ATM"}
        </button>
        <main> {show && <ATM />}</main>
      </div>
    </div>
  );
}

export default App;
