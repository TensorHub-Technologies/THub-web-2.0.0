import { teamMembers } from "../../constant/index";
import nvidia from "../../assets/images/team/nvidia.png";
import google from "../../assets/images/team/Google-Logo.png";
import startup from "../../assets/images/team/startupIndia.png";

const Team = () => {
  return (
    <>
      <div className="team-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 gap-y-16 py-10">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member text-center">
            <div className="image-container">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full w-40 h-40 mx-auto shadow-lg"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-secondary dark:text-background text-xl font-semibold">
                {member.name}
              </h3>
              <p className="text-secondary dark:text-white text-sm">
                {member.designation}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="py-16">
        <h3 className="text-center dark:text-primary-dark text-primary">
          Global Accelerator and Innovation Programs
        </h3>
        <div className="flex justify-center items-center mx-auto py-10">
          <div className="flex gap-4">
            <img src={nvidia} alt="Image 1" className="w-72 h-auto" />
            <img src={google} alt="Image 2" className="w-72 h-auto" />
            <img src={startup} alt="Image 3" className="w-72 h-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
