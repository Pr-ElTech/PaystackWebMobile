import React from "react";
import "../CSS/middlehero.css";
import HeroCard from "./HeroCard";

const MiddleHero = () => {
  const boxes = [
    {
      ID: 1,
      Title: "Delight customers with a seamless payments experience",
      TitleText:
        "Give your customers the gift of modern, frictionless, painless payments. Integrate Paystack once and let your customers pay you however they want",
      List: [
        "Card",
        "Apple Pay",
        "Bank Account",
        "Visa QR",
        "Bank Transfer",
        "Mobile Money",
        "USSD",
        "POS",
      ],
      Image:
        "https://i.postimg.cc/y6rKHHcZ/Collect-Payments-for-Multiple-Channels-1-1.gif",
      Subtitle: "Enjoy phenomenal transaction success rates",
      Text: "We automatically route payments through the most optimal channels, ensuring the highest transaction success rates in the market.",
      link: "https://paystack.com/success-rates",
    },
    {
      ID: 2,
      Title: "Build custom payments experiences with well-documented APIs",
      TitleText:
        "Developers love our thorough, well-documented APIs that let you to build everything from simple weekend projects, to complex financial products serving hundreds of thousands of customers. If you can imagine it, you can build it with Paystack.",

      List: [
        "Collect one-time and recurring payments from your app or website",
        "Make instant transfers",
        "Retrieve all your transaction and customer data",
        "Verify the identity of customers",
      ],
      Image: "https://i.postimg.cc/qvCLb8Xw/Robust-Suite-of-APIs-Opt.png",
      link: "https://paystack.com/docs/",
    },
    {
      ID: 3,
      Title:
        "Protect yourself and your customers with advanced fraud detection",
      TitleText:
        "Paystack's combination of automated and manual fraud systems protect you from fraudulent transactions and associated chargeback claims.",
      Image: "https://i.postimg.cc/qvCLb8Xw/Robust-Suite-of-APIs-Opt.png",
      Subtitle: "Detailed reporting for accounting, reconciliation, and audits",
      Text: "Understand your customers purchase patterns and do easy reconciliations with a robust data Dashboard and easy exports.",
      link: "https://paystack.com/docs/",
    },
  ];

  return (
    <section className="cardcontainer">
      <div className="text">
        <h1>Simple, easy payments</h1>
        <p>Building a business is hard. Getting paid shouldn't be</p>
      </div>
      <div className="cardholder">
        {boxes.map((item) => (
          <HeroCard key={item.ID} content={item} />
        ))}
      </div>
    </section>
  );
};

export default MiddleHero;
