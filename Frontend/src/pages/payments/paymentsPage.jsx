/**
 * @author Taranjot Singh <tr548284@dal.ca/B00945917>
 */
import "./paymentsPage.css";
import React, { useEffect } from "react";
import PaymentsComp from "../../Components/payments/paymentsComp";
import { useNavigate } from "react-router-dom";

function PaymentsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkLogin = async () => {
      const localUser = JSON.parse(localStorage.getItem("user"));
      console.log("Printing local user:", localUser);

      if (!localUser) {
        navigate("/login");
      }
    };

    checkLogin();
  }, []);

  return <PaymentsComp></PaymentsComp>;
}

export default PaymentsPage;
