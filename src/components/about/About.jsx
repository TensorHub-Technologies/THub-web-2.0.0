const About = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-10 p-8 lg:p-16">
        <div className="w-full lg:w-[40rem]">
          <p className="text-primary dark:text-primary-dark text-justify">
            About Thub.
          </p>

          <p className="my-5 dark:text-secondary-dark text-justify">
            At TensorHub, we are at the forefront of the AI revolution, helping
            businesses harness the power of Generative AI to transform
            unstructured data into meaningful outcomes. Our low-code/no-code
            platform streamlines AI workflows, making cutting-edge AI
            technologies accessible to enterprises of all sizes.
          </p>

          <p className="my-5 dark:text-secondary-dark text-justify">
            With a user-friendly drag-and-drop interface, automated data
            pipelines, and seamless integration with top vector databases and
            Large Language Models (LLMs), THub enables organizations to
            accelerate innovation while simplifying AI adoption...
          </p>

          <p className="my-5 dark:text-secondary-dark text-justify">
            Our vision is to democratize AI for businesses worldwide, making
            advanced technology accessible to every organization, from startups
            to global enterprises...
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
