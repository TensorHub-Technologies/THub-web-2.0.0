import { useState } from "react";
import { useSelector } from "react-redux";
import { pricingData } from "./PricingData";
import subStyle from "./subscription.module.css";
import PriceDropdown from "./PriceDropdown";
import { ToastContainer, toast } from "react-toastify";
import Enterprice_Form from "./Enterprice_Form";
import "../../index.css";

function Pricing_Plan() {
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);
  const [selectedPlan, setSelectedPlan] = useState("monthly");
  const [currency, setCurrency] = useState("USD");
  const [showForm, setShowForm] = useState(false);

  const handleMonthly = () => setSelectedPlan("monthly");
  const handleYearly = () => setSelectedPlan("yearly");
  const hostname = window.location.hostname;
  let url;
  switch (hostname) {
    case "localhost":
      url = `http://localhost:8080`;
      break;
    case "https://thub-web.calmisland-c4dd80be.westus2.azurecontainerapps.io":
      url = `https://dev.thub.tech`;
      break;
    default:
      url = `https://app.thub.tech`;
      break;
  }

  // Handler to update the currency based on dropdown selection
  const handleCurrencyChange = (selectedCurrency) =>
    setCurrency(selectedCurrency);

  const handleClick = (planTitle) => {
    if (planTitle === "Pro Power") {
      window.open(`${url}/signup`, "_blank");
    } else if (planTitle === "Free Forever") {
      window.open(`${url}/signup`, "_blank");
    } else if (planTitle === "Enterprise") {
      setShowForm(true);
    }
  };

  const handleLoading = (message) => {
    toast.success(message, {
      theme: "colored",
      style: {
        background: isDarkMode ? "#e22a90" : "#3c5ba4",
        color: "white",
      },
    });
  };

  const handleError = (message) => {
    toast.error(message, {
      theme: "colored",
      style: {
        background: "red",
        color: "white",
      },
    });
  };

  // Function to get the correct price based on selected plan and currency
  const getPrice = (plan) => {
    return plan.prices[currency] || plan.prices["USD"];
  };

  return (
    <>
      <section
        className={`px-4 sm:px-8 lg:px-16 pb-10 py-10 ${isDarkMode ? "hero-card-global-subtle-dark" : "hero-card-global-subtle-light"} `}
      >
        <ToastContainer />
        <div className="flex flex-col justify-center items-center">
          <p className="text-primary dark:text-primary-dark text-4xl mb-5">
            Pricing Plan
          </p>
          <div className="flex flex-col gap-1 justify-center items-center mb-5">
            <h1 className="text-4xl dark:text-white text-left sm:text-center w-full">
              Ready to Get Started?
            </h1>
            <h1 className="text-4xl dark:text-white text-left sm:text-center w-full">
              Don&apos;t Worry, We&apos;ll Keep You Under Budget
            </h1>
          </div>
          <p className="text-lg dark:text-white">
            No risk. All reward. Discover what’s possible.
          </p>
          <h2 className="text-lg dark:text-primary-dark text-primary mt-2">
            Your 90-Day Trial Starts Now
          </h2>
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
            <PriceDropdown
              onCurrencyChange={handleCurrencyChange}
              handleError={handleError}
            />
          </div>
        </div>

        <div className="grid mx-2 grid-cols-1 lg:grid-cols-3 gap-20 dark:text-white">
          {pricingData[selectedPlan].map((plan, index) => (
            <div
              key={index}
              className={`group p-6 backdrop-blur-xl bg-white/10 dark:bg-black/50 border-white/70 rounded-lg  relative border hover:border-primary dark:hover:border-primary-dark ${isDarkMode ? subStyle.card_selection_dark : subStyle.card_selection_light}`}
            >
              <p className="mb-5 text-3xl text-primary dark:text-primary-dark">
                {plan.title}
              </p>
              {plan.title === "Pro Power" ? (
                <p className="text-3xl my-2 text-black dark:text-white">
                  {getPrice(plan)}
                </p>
              ) : (
                <p className="text-3xl my-2 text-black dark:text-white">
                  {getPrice(plan)}
                </p>
              )}

              <p className=" text-black dark:text-white text-lg">
                {plan.description}
              </p>
              <div className="flex justify-center items-center">
                <button
                  onClick={() => handleClick(plan.title)}
                  type="button"
                  className="text-primary group-hover:bg-primary group-hover:text-[#11121C] border border-white  rounded-xl font-medium text-lg w-full py-2 me-2 my-5 focus:outline-none cursor-pointer bg-white/10 dark:bg-black/50 dark:text-primary-dark dark:group-hover:bg-primary-dark backdrop-blur-xl shadow-lg transition-all duration-300"
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
              {/* Soft Glow Effect */}
              <div className="absolute overflow-hidden inset-0 rounded-xl bg-gradient-to-r from-[rgba(60,91,164,0.3)] to-[rgba(226,42,144,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg -z-10"></div>
            </div>
          ))}
        </div>
        {showForm && (
          <Enterprice_Form
            setShowForm={setShowForm}
            handleLoading={handleLoading}
            handleError={handleError}
          />
        )}
      </section>
    </>
  );
}

export default Pricing_Plan;
