import { useSelector, useDispatch } from "react-redux";
import { atmActions } from "../redux/atmSlice";

const Deposit = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.atm.balance);

  const depositInput = () => {
    let amount = +document.querySelector("#amount").value;
    dispatch(atmActions.deposit(amount));
    return amount;
  };

  const depositBtnHandler = (e) => {
    let value = +e.target.value;
    dispatch(atmActions.deposit(value));
  };
  return (
    <div>
      <h2>Deposit Funds</h2>
      <h3>Balance: {balance} SEK</h3>

      <div>
        <input type="number" id="amount"></input>
        <button className="transactionBtn" onClick={depositInput}>
          Deposit
        </button>
      </div>
      <div className="transactionBtns">
        <button onClick={depositBtnHandler} value="100">
          100 SEK
        </button>
        <button onClick={depositBtnHandler} value="200">
          200 SEK
        </button>
        <button onClick={depositBtnHandler} value="500">
          500 SEK
        </button>
        <button onClick={depositBtnHandler} value="1000">
          1000 SEK
        </button>
      </div>
    </div>
  );
};
export default Deposit;
