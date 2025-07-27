import "./skills.scss";
import Container from "../component/Container";
import FramerMotion from "../utills/FramerMotion";
import { Tooltip } from "react-tooltip";

import html from "../assets/stack/html.webp?format=webp&quality=15";
import css from "../assets/stack/css.webp?format=webp&quality=15";
import js from "../assets/stack/js.webp?format=webp&quality=15";
import ts from "../assets/stack/ts.webp?format=webp&quality=15";
import jquery from "../assets/stack/jquery.webp?format=webp&quality=15";
import php from "../assets/stack/php.webp?format=webp&quality=15";
import ajax from "../assets/stack/ajax.webp?format=webp&quality=15";
import axios from "../assets/stack/axios.webp?format=webp&quality=15";
import reactQuery from "../assets/stack/react-query.webp?format=webp&quality=15";
import react from "../assets/stack/react.webp?format=webp&quality=15";
import vue from "../assets/stack/vue.webp?format=webp&quality=15";
import zustand from "../assets/stack/zustand.webp?format=webp&quality=15";
import sass from "../assets/stack/sass.webp?format=webp&quality=15";
import nodejs from "../assets/stack/nodejs.webp?format=webp&quality=15";
import npm from "../assets/stack/npm.webp?format=webp&quality=15";
import nvm from "../assets/stack/nvm.webp?format=webp&quality=15";
import mysql from "../assets/stack/mysql.webp?format=webp&quality=15";
import nginx from "../assets/stack/nginx.webp?format=webp&quality=15";
import gcp from "../assets/stack/gcp.webp?format=webp&quality=15";
import docker from "../assets/stack/docker.webp?format=webp&quality=15";
import photoshop from "../assets/stack/photoshop.webp?format=webp&quality=15";
import git from "../assets/stack/git.webp?format=webp&quality=15";
import jira from "../assets/stack/jira.webp?format=webp&quality=15";
import slack from "../assets/stack/slack.webp?format=webp&quality=15";

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
  { Languages: [{ id: "javascript", img: js, size: 58 }] },
  {
    Framework: [
      { id: "react", img: react, size: 62 },
      { id: "vue", img: vue, size: 52 },
      { id: "zustand", img: zustand, size: 100 },
      { id: "react-query", img: reactQuery, size: 62 },
      { id: "nodejs", img: nodejs, size: 72 },
      { id: "jquery", img: jquery, size: 58 },
      { id: "ajax", img: ajax, size: 64 },
      { id: "axios", img: axios, size: 64 },
    ],
  },
  {
    MarkUp: [
      {
        id: "html",
        img: html,
        size: 58,
      },
      { id: "css", img: css, size: 58 },
      { id: "sass", img: sass, size: 82 },
    ],
  },
  {
    Tools: [
      { id: "npm", img: npm, size: 64 },
      { id: "nvm", img: nvm, size: 64 },
      { id: "git", img: git, size: 68 },
      { id: "jira", img: jira, size: 48 },
      { id: "slack", img: slack, size: 48 },
      { id: "photoshop", img: photoshop, size: 46 },
    ],
  },
  {
    Experiences: [
      { id: "typescript", img: ts, size: 62 },
      { id: "mysql", img: mysql, size: 68 },
      { id: "nginx", img: nginx, size: 100 },
      { id: "gcp", img: gcp, size: 78 },
      { id: "docker", img: docker, size: 68 },
      { id: "php", img: php, size: 68 },
    ],
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
              <div
                className="stack-icon"
                data-tooltip-id={item.id}
                data-tooltip-content={item.id}
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: `${item.size}%`,
                }}
              ></div>
              <Tooltip id={item.id} className="tool-top" />
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
