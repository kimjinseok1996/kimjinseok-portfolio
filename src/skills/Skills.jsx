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
  { Language: ["javascript"] },
  {
    Framework: ["react", "vue", "nodejs"],
  },
  {
    Library: ["zustand", "reactquery", "jquery", "axios", "bootstrap"],
  },
  {
    MarkUp: ["html", "css", "sass"],
  },
  {
    Tools: ["npm", "nvm", "git", "jira", "slack", "photoshop"],
  },
  {
    Secondary: ["typescript", "tailwind", "mysql", "nginx", "gcp", "docker"],
  },
];

const SkillsBox = () => {
  return stackArr.map((value, index) => {
    const key = Object.keys(value)[0];
    return (
      <FramerMotion key={index} className="stack-box" motions={boxStyle}>
        <h5>{key}</h5>
        <div className="stack-icons">
          {value[key].map((item, idx) => (
            <div key={idx}>
              <StackIcon id={item} />
            </div>
          ))}
        </div>
      </FramerMotion>
    );
  });
};

function Skills() {
  return (
    <section id="skills-section">
      <h5 className="section-title">Skills</h5>
      <Container>
        <div className="skills-div">
          <SkillsBox />
        </div>
      </Container>
    </section>
  );
}

export default Skills;
