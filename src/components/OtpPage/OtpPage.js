import React, { useState, useRef } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import styles from "./OtpPage.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/user.actions";

const OtpPage = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inputRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];

  const handleOtpChange = (index, value) => {
    // Create a copy of the current OTP array
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Automatically shift focus to the next input
    if (index < inputRefs.length - 1 && value) {
      inputRefs[index + 1].current.focus();
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Combine the OTP values to form the OTP string
    const otpValue = otp.join("");
    const phone = localStorage.getItem("phone");
    // Send the OTP to the server
    try {
      const response = await dispatch(loginUser(phone, otpValue));
      // Handle the response as needed
      console.log(response);
      if (!response.error) {
        localStorage.setItem("token", response.data.data.token);
        navigate("/homepage");
      }
    } catch (error) {
      // Handle any errors
      console.error(error);
    }
  };

  const handleBackToRegister = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.OtpPage}>
        <header className={styles["back-arrow"]} onClick={handleBackToRegister}>
          <AiOutlineArrowLeft />
        </header>
        <div className={styles["otp-form"]}>
          <form onSubmit={submitHandler}>
            <label htmlFor="verify" id="verify">
              OTP Verification
            </label>
            <p>Enter the verification code we just sent to your Mobile Number.</p>
            <div className={styles["otp-container"]}>
              {otp.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  id={`otp${index + 1}`}
                  maxLength="1"
                  className={styles["otp-input"]}
                  value={value}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  ref={inputRefs[index]}
                />
              ))}
            </div>
            <button type="submit" className={styles["verify-button"]}>
              Verify
            </button>
          </form>
          <p>
            Didn't receive the code?{" "}
            <Link to="/resend" className={styles["resend-link"]}>
              Resend
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
