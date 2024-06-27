type AboutProps = {};

const About = (props: AboutProps) => {
  return (
    <div className="mt-4 mx-2 sm:mx-10 md:mx-10 lg:mx-10">
      <h2 className="font-extralight">about</h2>
      <p
        style={{ letterSpacing: ".03rem" }}
        className="text-md sm:text-xl md:text-xl lg:text-xl font-normal"
      >
        Hi 👋 I&apos;m Trevor - a curiosity-driven computer engineer with
        professional experience in React, Golang, Node, AWS, and more. I like to
        make stuff that is impactful, on projects where I can have a ton of
        ownership from end to end. I&apos;m a life-long learner, and I'm always
        looking for ways to apply and build upon my experience.
      </p>
    </div>
  );
};

export default About;
