import React from "react";
import "../CSS/tophero.css";
import Button from "./Button";
const Tophero = ({ Buttontext }) => {
  return (
    <div className="tophero">
      <div className="rightside">
        <h1>
          Modernonline and offline <br /> payment for Africa
        </h1>
        <p>
          Paystack helps buisinesses in Africa get paid by anyone <br />
          anywhere in the world
        </p>

        <div className="btns">
          <Button Btntext={Buttontext} />
          <button className="contactBtn">or Contact us</button>
        </div>
        <p>trusted by 200,000 buisnesses</p>
      </div>
      <div className="leftside">
        <p>
          whacth MTN Chief Transformation officer, Olubayo <br /> Adekanmbi,
          discuss working with paystack
        </p>
      </div>
    </div>
  );
};

export default Tophero;
