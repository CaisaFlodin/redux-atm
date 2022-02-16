import { useSelector, useDispatch } from "react-redux";
import { atmActions } from "../redux/atmSlice";

const Withdraw = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.atm.balance);

  const withdrawInput = () => {
    let amount = +document.querySelector("#amount").value;
    if (balance === 0) {
      console.log("Not enough money");
    } else {
      dispatch(atmActions.withdraw(amount));
    }
  };

  const withdrawBtnHandler = (e) => {
    let value = +e.target.value;
    if (balance >= value) {
      dispatch(atmActions.withdraw(value));
    } else {
      console.log("Not enough money");
    }
  };
  return (
    <div>
      <h2>Withdraw Funds</h2>
      <h3>Balance: {balance} SEK</h3>

      <div>
        <input type="number" id="amount"></input>
        <button className="transactionBtn" onClick={withdrawInput}>
          Withdraw
        </button>
      </div>

      <button onClick={withdrawBtnHandler} value="100">
        100 SEK
      </button>
      <button onClick={withdrawBtnHandler} value="200">
        200 SEK
      </button>
      <button onClick={withdrawBtnHandler} value="500">
        500 SEK
      </button>
      <button onClick={withdrawBtnHandler} value="1000">
        1000 SEK
      </button>
    </div>
  );
};
export default Withdraw;
