import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import PropTypes from "prop-types";

function OTP_Modal({
  length = 6,
  onOtpSubmit = () => {},
  setShowModal,
  resendOtp = () => {},
}) {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }

    const combineOtp = newOtp.join("");
    console.log(combineOtp, "combined otp");
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleOtpSubmit = () => {
    const finalOtp = otp.join("");
    console.log("final otp", finalOtp);
    onOtpSubmit(finalOtp);
  };

  const handleResendOtp = () => {
    setOtp(new Array(length).fill(""));
    resendOtp();
  };

  return (
    <div className=" fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-96 p-6 rounded-lg flex flex-col items-center">
        <div>
          <div className="absolute right-2 top-1 ">
            <button
              className="  dark:text-secondary p-1 rounded-lg border-primary text-black"
              onClick={() => setShowModal(false)}
            >
              <MdOutlineClose size={22} />
            </button>
          </div>
          <h2 className="text-primary dark:text-primary-dark mb-4">
            Enter OTP
          </h2>
        </div>
        <div className=" flex gap-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              ref={(el) => (inputRefs.current[index] = el)}
              value={digit}
              onChange={(e) => handleChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="text-xl w-8 h-10 text-center  text-primary border border-primary dark:border-primary-dark rounded focus:border-blue-700"
            />
          ))}
        </div>
        <div className="flex gap-4 mt-4">
          <button
            type="button"
            className="bg-primary dark:bg-primary-dark dark:hover:bg-pink-500 hover:bg-blue-900 text-white font-medium rounded-lg text-lg px-8 py-2.5"
            onClick={handleResendOtp}
          >
            Resend
          </button>
          <button
            type="button"
            className="bg-primary dark:bg-primary-dark dark:hover:bg-pink-500 hover:bg-blue-900 text-white font-medium rounded-lg text-lg px-6 py-2.5"
            onClick={handleOtpSubmit}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

OTP_Modal.propTypes = {
  length: PropTypes.number,
  onOtpSubmit: PropTypes.func,
  setShowModal: PropTypes.func.isRequired,
  resendOtp: PropTypes.func,
};
export default OTP_Modal;
