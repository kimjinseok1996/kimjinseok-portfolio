import "./skills.scss";
import Container from "../component/Container";
import FramerMotion from "../utills/FramerMotion";
import StackIcon from "../component/StackIcon";

const boxStyle = {
  initial: {
    opacity: 0,
    y: 40,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  transition: {
    ease: "easeInOut",
    duration: 0.6,
  },
};

const stackArr = [
  { Languages: ["javascript"] },
  {
    Framework: [
      "react",
      "vue",
      "zustand",
      "react-query",
      "nodejs",
      "jquery",
      "ajax",
      "axios",
    ],
  },
  {
    MarkUp: ["html", "css", "sass"],
  },
  {
    Tools: ["npm", "nvm", "git", "jira", "slack"],
  },
  {
    Experiences: ["typescript", "mysql", "nginx", "gcp", "docker", "photoshop"],
  },
];

const SkillsBox = () => {
  return stackArr.map((value, index) => {
    const key = Object.keys(value)[0];
    return (
      <div key={index} className="stack-box">
        <h5>{key}</h5>
        <div className="stack-icons">
          {value[key].map((item, idx) => (
            <div key={idx}>
              <StackIcon id={item} img={item} />
            </div>
          ))}
        </div>
      </div>
    );
  });
};

function Skills() {
  return (
    <section id="skills-section">
      <h5 className="section-title">Skills</h5>
      <Container>
        <FramerMotion className="skills-div" motions={boxStyle}>
          <SkillsBox />
        </FramerMotion>
      </Container>
    </section>
  );
}

export default Skills;
