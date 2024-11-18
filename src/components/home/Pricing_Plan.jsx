import { useState } from "react";
import { useSelector } from "react-redux";
import { pricingData } from "./PricingData";
import subStyle from "./subscription.module.css";
import PriceDropdown from "./PriceDropdown";
import { useNavigate } from "react-router-dom";

function Pricing_Plan() {
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);
  const [selectedPlan, setSelectedPlan] = useState("monthly");
  const [currency, setCurrency] = useState("INR");
  const navigate = useNavigate();

  const handleMonthly = () => setSelectedPlan("monthly");
  const handleYearly = () => setSelectedPlan("yearly");

  // Handler to update the currency based on dropdown selection
  const handleCurrencyChange = (selectedCurrency) =>
    setCurrency(selectedCurrency);

  const handleClick = () => {
    navigate("/auth/login");
  };

  // Function to get the correct price based on selected plan and currency
  const getPrice = (plan) => {
    return plan.prices[currency] || plan.prices["INR"];
  };

  return (
    <section className="px-4 sm:px-8 lg:px-16 pb-10 py-10">
      <div className="flex flex-col justify-center items-center gap-5">
        <p className="text-primary dark:text-primary-dark text-4xl">
          Pricing Plan
        </p>
        <div className="flex flex-col gap-1 justify-center items-center">
          <h1 className="text-4xl dark:text-white text-left sm:text-center w-full">
            Ready to Get Started?
          </h1>
          <h1 className="text-4xl dark:text-white text-left sm:text-center w-full">
            Don&apos;t Worry, We&apos;ll Keep You Under Budget
          </h1>
        </div>
        <p className="text-lg dark:text-white ">
          Get started with a 30-day trial, Cancel anytime.
        </p>
      </div>

      {/* Switch button */}
      <div className={subStyle.switch_parent}>
        <div className={subStyle.switch_wrapper}>
          <button className={subStyle.switch_button} onClick={handleMonthly}>
            <input
              type="radio"
              id="monthly"
              name="subscription"
              className={subStyle.radio}
              checked={selectedPlan === "monthly"}
              onChange={handleMonthly}
            />
            <label
              htmlFor="monthly"
              style={{
                color: isDarkMode
                  ? selectedPlan === "monthly"
                    ? "black"
                    : "white"
                  : selectedPlan === "monthly"
                    ? "white"
                    : "black",
              }}
            >
              Monthly
            </label>
          </button>
          <button className={subStyle.switch_button} onClick={handleYearly}>
            <input
              type="radio"
              id="yearly"
              name="subscription"
              className={subStyle.radio}
              checked={selectedPlan === "yearly"}
              onChange={handleYearly}
            />
            <label
              htmlFor="yearly"
              className={subStyle.switch_item}
              style={{
                color: isDarkMode
                  ? selectedPlan === "yearly"
                    ? "black"
                    : "white"
                  : selectedPlan === "yearly"
                    ? "white"
                    : "black",
              }}
            >
              Yearly
            </label>
          </button>

          <div
            className={
              isDarkMode
                ? subStyle.highlighter_dark
                : subStyle.highlighter_light
            }
            style={{
              transform:
                selectedPlan === "yearly" ? "translateX(100%)" : "none",
            }}
          ></div>
        </div>
        {/* Dropdown for currency selection */}
        <div className="absolute right-5 mr-12">
          <PriceDropdown onCurrencyChange={handleCurrencyChange} />
        </div>
      </div>

      {/* Cards for pricing */}
      <div className="grid mx-2 grid-cols-1 lg:grid-cols-3 gap-20 dark:text-white">
        {pricingData[selectedPlan].map((plan, index) => (
          <div
            key={index}
            className={`group p-6 bg-white dark:bg-secondary border border-gray-200 rounded-lg shadow dark:border-gray-700 relative hover:shadow-black ${isDarkMode ? subStyle.card_selection_dark : subStyle.card_selection_light}`}
          >
            <p className="mb-5 text-3xl text-primary dark:text-primary-dark">
              {plan.title}
            </p>
            <p className="text-3xl my-2  dark:text-gray-500 text-gray-600">
              {getPrice(plan)}
            </p>
            <p className=" dark:text-gray-500 text-gray-600">
              {plan.description}
            </p>
            <div className="flex justify-center items-center">
              <button
                onClick={handleClick}
                type="button"
                className="text-primary group-hover:bg-primary dark:border-none border group-hover:text-white rounded font-medium text-lg w-full py-2 me-2 my-5 dark:bg-black shadow-md dark:group-hover:bg-primary-dark focus:outline-none dark:text-white"
              >
                {plan.buttonInfo}
              </button>
            </div>
            <ul>
              {plan.list.map((planList, i) => (
                <li
                  className={
                    isDarkMode
                      ? subStyle.list_features_dark
                      : subStyle.list_features_light
                  }
                  key={i}
                >
                  {planList}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing_Plan;
