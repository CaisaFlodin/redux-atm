import { useState } from "react";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";

const ATM = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      {toggle && <Withdraw />}
      {!toggle && <Deposit />}
      <div>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
          className="toggleComponent"
        >
          {toggle ? "Make A Deposit" : "Make A Withdrawal"}
        </button>
      </div>
    </div>
  );
};
export default ATM;
