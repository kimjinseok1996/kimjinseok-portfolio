import "./intro.scss";
import FramerMotion from "../utills/FramerMotion";
import Container from "../component/Container";
import kimjinseok from "../assets/kimjinseok.jpg?format=webp&quality=15";
import gitHub from "../assets/github.webp?format=webp&quality=15";

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
    opacity: 1,
    y: 0,
  },
  transition: {
    ease: "easeInOut",
    duration: 0.6,
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
          <div
            className="profile-img"
            style={{ backgroundImage: `url(${kimjinseok})` }}
          ></div>
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
          <article>
            <h5>Certification</h5>
            <p>
              정보처리기사 <br /> 웹디자인기능사 <br /> GTQ 1급
            </p>
          </article>
        </FramerMotion>

        <FramerMotion as="p" motions={boxStyle} className="introduce-text">
          <span></span>React, Vue 기반의 서비스 개발 경험을 바탕으로, 상태 관리
          구조 설계와 렌더링 최적화에 집중하는 프론트엔드 개발자입니다.
          <br /> <br />
          <span></span>코드 스플리팅, Suspense등을 활용해 초기 로딩 성능을
          개선해 사용자 경험을 높였고, 클라우드 환경, Nginx, Node.js 등
          프론트엔드 이외의 영역도 경험하며 시스템 전반에 대한 이해를 갖추고
          있습니다.
          <br /> <br />
          단순한 구현을 넘어 UI/UX, 성능, 코드 구조까지 고려한 개발을
          지향합니다.
        </FramerMotion>
      </Container>
    </section>
  );
}

export default Intro;
