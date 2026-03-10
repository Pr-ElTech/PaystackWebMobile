import React from "react";
import "../CSS/navbar.css";
import Button from "./Button";
import { IoMdMenu } from "react-icons/io";

const Navbar = ({ Buttontext }) => {
  //https://i.postimg.cc/8PgwJDXt/topbg.jpg
  //
  return (
    <article className="navbar">
      <div className="leftnav">
        <div className="logo">
          <img
            src="https://i.postimg.cc/CxPQfXqz/logo-removebg-preview.png"
            alt=""
          />
        </div>
        <div>
          <ul>
            <li>Why Paystack</li>
            <li>Customer</li>
            <li>Pricing</li>
            <li>learn</li>
          </ul>
        </div>
      </div>
      <div className="rightnav">
        <ul>
          <li>Developer</li>
          <li>Support</li>
          <li>Login</li>
        </ul>
        <div className="navBtn">
          <Button Btntext={Buttontext} />
        </div>
        <IoMdMenu className="menuholder" />
      </div>
    </article>
  );
};

export default Navbar;
