import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { FiPhoneCall } from "react-icons/fi";
import ContactForm from "./ContactForm";

const Contact = () => {
  // const isDarkMode = useSelector((state) => state.customization.isDarkMode);

  return (
    <div className="border-red-400 dark:bg-secondary">
      <div className="text-center py-5">
        <h3 className="text-secondary  text-3xl  font-bold dark:text-background">
          Contact With Us
        </h3>
        <div className="mt-2">
          <span className="dark:text-secondary-dark">Home / </span>
          <span className="text-secondary-dark">contact</span>
        </div>
      </div>

      <div className="grid grid-cols-2 py-12 mx-16">
        <div className="text-center">
          <div className="inline-flex align-middle justify-center p-4 rounded-lg bg-primary dark:bg-primary-dark text-white dark:text-secondary h-18 w-18 mb-8">
            <LiaMapMarkedAltSolid size={40} />
          </div>
          <h3 className="text-3xl font-medium dark:text-secondary-dark">
            CT1, Villa Espana, 158 Velachery <br /> Main Road, Chennai - 600042
          </h3>
        </div>
        <div className="text-center">
          <div className="inline-flex align-middle justify-center p-4 rounded-lg bg-primary dark:bg-primary-dark text-white dark:text-secondary h-18 w-18 mb-8">
            <FiPhoneCall size={40} />
          </div>
          <h3 className="text-3xl font-medium dark:text-secondary-dark">
            Contact # 9940014844
          </h3>
        </div>
      </div>

      <div className="relative px-20  h-[600px] overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15550.924450022147!2d80.20306218306209!3d12.989042258338452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d87f808f4c3%3A0x38eeb69ec22d62e5!2sVilla%20Espana%2C%20Xs%20Real%20Villa%20Espana%2C%20158%2C%20Velachery%20Main%20Rd%2C%20TN%20Police%20Housing%20Colony%2C%20Velachery%2C%20Chennai%2C%20Tamil%20Nadu%20600042!5e0!3m2!1sen!2sin!4v1713766486349!5m2!1sen!2sin"
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
