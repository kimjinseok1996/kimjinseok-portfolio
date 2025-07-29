import "react-responsive-modal/styles.css";
import "../styles/modal.scss";
import { Modal } from "react-responsive-modal";
import useModalStore from "../store/modalStore";
import StackIcon from "./StackIcon";
import { ImageWithSuspense } from "./ImageWithSuspense";

import cow from "../assets/works/cow.jpg?format=webp&quality=15";
import abys from "../assets/works/abys.jpg?format=webp&quality=15";
import assaplus from "../assets/works/assaplus.jpg?format=webp&quality=15";
import hansung from "../assets/works/hansung.jpg?format=webp&quality=15";
import lidot from "../assets/works/lidot.jpg?format=webp&quality=15";
import suragame from "../assets/works/suragame.jpg?format=webp&quality=15";
import yg from "../assets/works/yg.jpg?format=webp&quality=15";

const worksImage = {
  cow: cow,
  abys: abys,
  assaplus: assaplus,
  hansung: hansung,
  lidot: lidot,
  suragame: suragame,
  yg: yg,
};

function ModalComponent() {
  const project = useModalStore((state) => state.project);
  const isOpen = useModalStore((state) => state.isOpen);
  const closeModal = useModalStore((state) => state.closeModal);

  return (
    <Modal open={isOpen} onClose={closeModal} center>
      <h2>{project?.title}</h2>
      {project?.img && (
        <ImageWithSuspense
          src={worksImage[project?.img]}
          alt={project?.title}
        />
      )}
      <table>
        <tbody>
          <tr>
            <th>설명</th>
            <td>{project?.description}</td>
          </tr>
          {project?.period && (
            <tr>
              <th>기간</th>
              <td>{project?.period}</td>
            </tr>
          )}
          <tr>
            <th>내용</th>
            <td
              className="modal-text"
              dangerouslySetInnerHTML={{ __html: project?.text }}
            ></td>
          </tr>
          <tr>
            <th>기여도</th>
            <td>{project?.contribution || 100}%</td>
          </tr>
          <tr>
            <th>스택</th>
            <td>
              <div className="stack-icons">
                {project?.stack?.map((item, idx) => (
                  <div key={idx}>
                    <StackIcon id={item} />
                  </div>
                ))}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </Modal>
  );
}

export default ModalComponent;
