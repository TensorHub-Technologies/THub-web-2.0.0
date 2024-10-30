import { useState } from "react";
import PropTypes from "prop-types";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const PriceDropdown = ({ onCurrencyChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("INR");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onCurrencyChange(option);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-between items-center w-44 px-6 py-4 text-sm font-medium bg-background dark:bg-background-dark border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none text-primary dark:text-primary-dark"
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
          {["INR", "USD", "GBP", "Euro"].map((currency) => (
            <button
              key={currency}
              onClick={() => handleOptionClick(currency)}
              className="block w-full text-left px-4 py-2 text-sm text-primary dark:text-primary-dark hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-lg transition duration-150 ease-in-out"
            >
              <span className="ml-2">{currency}</span>
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
