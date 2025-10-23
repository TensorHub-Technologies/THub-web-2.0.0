import { useState } from "react";
import PropTypes from "prop-types";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import INRFlag from "../../assets/images/flag/india.png";
import USDFlag from "../../assets/images/flag/usd.png";
import GBPFlag from "../../assets/images/flag/GB.png";
import EuroFlag from "../../assets/images/flag/ero.png";

const PriceDropdown = ({ onCurrencyChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("USD");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onCurrencyChange(option);
  };

  // Map currencies to their respective flags
  const currencyOptions = [
    { code: "INR", flag: INRFlag },
    { code: "USD", flag: USDFlag },
    { code: "GBP", flag: GBPFlag },
    { code: "Euro", flag: EuroFlag },
  ];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-between items-center w-44 px-6 py-4 text-sm font-medium bg-white/10 dark:bg-black/10 border border-gray-500 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none text-primary dark:text-primary-dark"
      >
        {selectedOption}
        {isOpen ? (
          <FaChevronUp className="ml-2" />
        ) : (
          <FaChevronDown className="ml-2" />
        )}{" "}
        {/* Toggle icon based on dropdown state */}
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-44 origin-top-right bg-background dark:bg-background-dark border border-gray-200 rounded-md shadow-lg outline-none">
          {currencyOptions.map(({ code, flag }) => (
            <button
              key={code}
              onClick={() => handleOptionClick(code)}
              className="flex items-center  w-full text-left px-4 py-2 text-sm text-primary dark:text-primary-dark hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-lg transition duration-150 ease-in-out"
            >
              <img src={flag} alt={`${code} flag`} className="w-4 h-4 mr-4" />
              <span>{code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

PriceDropdown.propTypes = {
  onCurrencyChange: PropTypes.func.isRequired,
};

export default PriceDropdown;
