import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { FiPhoneCall } from "react-icons/fi";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="border-red-400 dark:bg-secondary">
      <div className="text-center py-5 mt-20">
        <h3 className="text-secondary text-2xl font-bold dark:text-background">
          Contact With Us
        </h3>
        <div className="mt-2">
          <span className="dark:text-secondary-dark">Home / </span>
          <span className="text-secondary-dark">contact</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 py-12 mx-4 sm:mx-16 gap-8">
        <div className="text-center">
          <div className="inline-flex align-middle justify-center p-4 rounded-lg bg-primary dark:bg-primary-dark text-white dark:text-secondary h-18 w-18 mb-4">
            <LiaMapMarkedAltSolid size={30} />
          </div>
          <h3 className="text-xl font-medium dark:text-secondary-dark">
            KMJ Ascend 4th floor KHB Colony, 5th Block, Koramangala, <br />{" "}
            Bengaluru, Karnataka 560095
          </h3>
        </div>
        <div className="text-center">
          <div className="inline-flex align-middle justify-center p-4 rounded-lg bg-primary dark:bg-primary-dark text-white dark:text-secondary h-18 w-18 mb-4">
            <FiPhoneCall size={30} />
          </div>
          <h3 className="text-xl font-medium dark:text-secondary-dark">
            Contact # 9940014844
          </h3>
        </div>
      </div>

      <div className="relative px-4 sm:px-20 h-[300px] sm:h-[600px] overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5874650746628!2d77.6158050760527!3d12.93421508737776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1450034c594d%3A0xef45a793679bb3f9!2sKMJ%20Ascend 4th Floor%2C%20KHB%20Colony%2C%205th%20Block%2C%20Koramangala%2C%20Bengaluru%2C%20Karnataka%20560095!5e0!3m2!1sen!2sin!4v1682431795187!5m2!1sen!2sin"
          className="w-full h-full border-0 rounded-lg"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
