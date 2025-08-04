import Arrow_Right from "../custom-button/Arrow_Right";
import props from "prop-types";

const AgentCard = ({
  title = "Sample Agent",
  description = "This is a sample description that might be long enough to span multiple lines and demonstrate the truncation functionality working properly.",
  agentUrl = "#",
  tools,
  logo,
}) => {
  return (
    <div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="group relative transform animate-float transition-all duration-500">
          {/* Consistent Glass Card - Same styling for all themes */}
          <div className="relative border rounded-xl backdrop-blur-xl bg-white/10 border-white/30 dark:bg-black/50 shadow-2xl h-[22rem] transition-all duration-300">
            {/* Content */}
            <div className="relative z-10 px-6 pt-6">
              {/* Header */}
              <a href={agentUrl} target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-2 mb-6 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <img className="w-12 h-12" src={logo} alt="icon" />
                  </div>
                  <div>
                    <h3
                      className={`text-xl font-bold transition-colors duration-300 dark:text-white text-black`}
                    >
                      {title}
                    </h3>
                  </div>
                </div>
              </a>
              {/* Description with tooltip */}
              <div className="relative group/desc">
                <p
                  className={`line-clamp-2 overflow-hidden font-extralight text-black dark:text-white cursor-pointer h-11 `}
                >
                  {description}
                </p>
                <div className="absolute z-10 hidden group-hover/desc:block bg-[#616161] dark:bg-[#2a2d34f9] text-white text-sm rounded px-2 py-1 mt-1 left-1/2 -translate-x-1/2 w-60 lg:w-96 max-w-[420px] break-words whitespace-normal shadow-md ">
                  <div className="tooltip-arrow absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#616161] dark:bg-[#2a2d34f9] rotate-45"></div>
                  {description}
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center p-6">
              <div>
                <h4
                  className={`text-sm font-bold transition-colors duration-300 text-black dark:text-white`}
                >
                  Tools
                </h4>
                <div className="flex flex-wrap items-start justify-start gap-2 my-1 w-full h-auto pr-2 py-2">
                  {tools &&
                    Object.entries(tools).map(([toolName, toolData], index) => (
                      <span
                        key={index}
                        className="relative group/tool p-1 rounded-lg flex justify-center items-center gap-1"
                      >
                        {/* Conditional render for image or component */}
                        {toolData.type === "image" ? (
                          <img
                            src={toolData.icon}
                            alt={toolName}
                            className="w-6 h-6"
                          />
                        ) : (
                          <toolData.icon className="w-6 h-6" />
                        )}

                        {/* Tooltip - only for this icon */}
                        <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover/tool:opacity-100 group-hover/tool:visible transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded shadow-lg z-20 whitespace-nowrap pointer-events-none">
                          {toolName}
                        </div>
                      </span>
                    ))}
                </div>
              </div>
            </div>
            <div>
              <div className="flex-col justify-between items-center py-6 pr-9 pl-6 absolute bottom-0 left-0 right-0">
                <hr className="w-[98%]" />
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

            {/* Soft Glow Effect */}
            <div className="absolute overflow-hidden inset-0 rounded-xl bg-gradient-to-r from-[rgba(60,91,164,0.3)] to-[rgba(226,42,144,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg -z-10"></div>
          </div>
        </div>

        {/* Tooltip */}
        {description && (
          <div
            className="fixed z-50 px-3 py-2 max-w-xl w-40 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-lg pointer-events-none transition-opacity  duration-200"
            style={{
              left: 0,
              top: 0,
              transform: "translateX(-50%) translateY(-100%)",
            }}
          >
            {description}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent  border-t-gray-900"></div>
          </div>
        )}
      </div>
    </div>
  );
};

AgentCard.propTypes = {
  title: props.string,
  description: props.string,
  agentUrl: props.string,
  tools: props.string,
  logo: props.string,
};

export default AgentCard;
