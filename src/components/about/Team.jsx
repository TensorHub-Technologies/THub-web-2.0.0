import { teamMembers } from "../../constant/index";

const Team = () => {
  return (
    <div className="team-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-10">
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
  );
};

export default Team;
