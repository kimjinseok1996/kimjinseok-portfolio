import "./intro.scss";
import FramerMotion from "../utills/FramerMotion";
import Container from "../component/Container";
import gitHub from "../assets/gitHub.webp";

const frontEndStyle = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    ease: "easeInOut",
    duration: 0.6,
  },
};

const initialStyle = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    ease: "easeInOut",
    opacity: 1,
    y: 0,
  },
};

const boxStyle = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    ease: "easeInOut",
    duration: 0.6,
  },
};

const lineStyle = {
  initial: {
    width: 0,
  },
  animate: {
    width: "100%",
  },
  transition: {
    ease: "easeInOut",
    duration: 1.6,
  },
};

const portfolioInitial = [
  {
    tp: "P",
  },
  {
    tp: "O",
  },
  {
    tp: "R",
  },
  {
    tp: "T",
  },
  {
    tp: "F",
  },
  {
    tp: "O",
  },
  {
    tp: "L",
  },
  {
    tp: "I",
  },
  {
    tp: "O",
  },
];

const initialTransition = {
  ease: "easeInOut",
  duration: 0.4,
};

function Intro() {
  return (
    <section id="intro-section">
      <Container>
        <div className="intro-line">
          <div className="intro-line-text">
            <FramerMotion as="h2" motions={frontEndStyle}>
              Front-End
            </FramerMotion>
            <div className="initial-div">
              {portfolioInitial.map((tp, idx) => (
                <FramerMotion
                  key={idx}
                  as="p"
                  motions={initialStyle}
                  transition={{
                    ...initialTransition,
                    delay: 0.6 + 0.08 * idx,
                    ease: "easeInOut",
                  }}
                >
                  {tp.tp}
                </FramerMotion>
              ))}
            </div>
          </div>
          <FramerMotion motions={lineStyle} className="line"></FramerMotion>
        </div>

        <FramerMotion motions={boxStyle} className="introduce-div">
          <div className="profile-img"></div>
          <article>
            <p>
              안녕하세요. <br />
              프론트엔드 개발자 <span>김진석</span> 입니다.
            </p>
            <p>
              <a href="https://github.com/kimjinseok1996" target="_blank">
                <img src={gitHub} alt="git-hub" />
                kimjinseok1996
              </a>
            </p>
          </article>
        </FramerMotion>
      </Container>
    </section>
  );
}

export default Intro;
