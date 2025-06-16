import Arrow_Right from "../custom-button/Arrow_Right";
import props from "prop-types";

const AgentCard = ({ title, description, logo, agentUrl = "#" }) => {
  return (
    <div>
      <div
        className="group max-w-sm p-6 h-80 bg-gray-50 border border-gray-200 rounded-lg shadow-sm dark:bg-[#191B1F] dark:border-gray-700
        transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
      >
        <div>
          <img src={logo} alt="" className="w-12 rounded-lg" />
          <a href={agentUrl} target="_blank" rel="noopener noreferrer">
            <h3 className="text-xl mt-4 mb-1 h-16 font-bold tracking-tight text-black dark:text-white  font-[cambria-math]">
              {title}
            </h3>
          </a>
        </div>

        <div className="h-20 relative group/desc">
          {description?.length > 0 && (
            <>
              <p className="line-clamp-2 overflow-hidden font-normal text-black dark:text-white">
                {description}
              </p>

              <div className="absolute z-10 hidden group-hover/desc:block bg-[#616161] dark:bg-[#2a2d34f9] text-white text-xs rounded px-2 py-1 mt-1 left-1/2 -translate-x-1/2 w-max max-w-[250px] break-words whitespace-normal shadow-md">
                <div className="tooltip-arrow absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#616161] dark:bg-[#2a2d34f9] rotate-45"></div>
                {description}
              </div>
            </>
          )}
        </div>

        <hr className="mt-1" />
        <div className="flex mt-2 justify-between items-center text-[#3c5ba4] dark:text-[#e22a90]">
          <div>Try Agent</div>
          <a href={agentUrl} target="_blank" rel="noopener noreferrer">
            <div className="border border-black dark:border-white p-2 rounded-full group-hover:bg-[#3C5BA4] dark:group-hover:bg-[#e22a90] ">
              <Arrow_Right className="transition-transform duration-300 group-hover:rotate-[-30deg] group-hover:text-white dark:text-white" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

AgentCard.propTypes = {
  title: props.string,
  description: props.string,
  logo: props.any,
  agentUrl: props.string,
};

export default AgentCard;
