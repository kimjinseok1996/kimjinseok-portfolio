import "./history.scss";
import Container from "../component/Container";
import FramerMotion from "../utills/FramerMotion";
import { historyData } from "../properties/history";
import ModalComponent from "../component/Modal";
import useModalStore from "../store/modalStore";

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

const lineStyle = {
  initial: {
    height: 0,
  },
  whileInView: {
    height: "110%",
  },
  transition: {
    ease: "easeInOut",
    duration: 1.6,
    delay: 0.2,
  },
  viewport: { once: true },
};

const ContentDiv = ({ date, company, projects }) => {
  const openModal = useModalStore((state) => state.openModal);
  const setProject = useModalStore((state) => state.setProject);

  const modalHandler = (project) => {
    setProject(project);
    openModal();
  };
  return (
    <FramerMotion className="content-div" {...boxStyle}>
      <h3>{date}</h3>
      <h4>{company}</h4>
      <div className="project-box">
        {projects.map((project, idx) => (
          <button key={idx} onClick={() => modalHandler(project)}>
            <span>*</span>
            <div>
              <h5>{project.title}</h5>
              {project.description && <p>{project.description}</p>}
              {project.period && <p>{project.period}</p>}
            </div>
          </button>
        ))}
      </div>
    </FramerMotion>
  );
};

const HistoryBox = () => {
  return (
    <div className="history-box-wrap">
      {historyData.map((item, index) => (
        <article className="history-box" key={index}>
          <div className="line-div">
            <div className="circle"></div>
            <FramerMotion className="line" overflowY={false} {...lineStyle} />
          </div>
          <ContentDiv
            date={item.date}
            company={item.company}
            projects={item.projects}
          />
        </article>
      ))}
    </div>
  );
};

function History() {
  return (
    <>
      <ModalComponent />
      <section id="history-section">
        <Container>
          <h5 className="section-title">History</h5>
          <HistoryBox />
        </Container>
      </section>
    </>
  );
}

export default History;
