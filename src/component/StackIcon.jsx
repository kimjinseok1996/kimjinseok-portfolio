import { Tooltip } from "react-tooltip";

import html from "../assets/stack/html.webp?format=webp&quality=15";
import css from "../assets/stack/css.webp?format=webp&quality=15";
import javascript from "../assets/stack/js.png?format=webp&quality=15";
import typescript from "../assets/stack/ts.webp?format=webp";
import jquery from "../assets/stack/jquery.png?format=webp&quality=15";
import php from "../assets/stack/php.webp?format=webp&quality=15";
import ajax from "../assets/stack/ajax.webp?format=webp&quality=15";
import axios from "../assets/stack/axios.webp?format=webp&quality=15";
import reactquery from "../assets/stack/react-query.webp?format=webp&quality=15";
import react from "../assets/stack/react.webp?format=webp&quality=15";
import vue from "../assets/stack/vue.webp?format=webp&quality=15";
import zustand from "../assets/stack/zustand.webp?format=webp&quality=15";
import sass from "../assets/stack/sass.webp?format=webp&quality=15";
import tailwind from "../assets/stack/tailwind.webp?format=webp&quality=15";
import nodejs from "../assets/stack/nodejs.png?format=webp&quality=15";
import npm from "../assets/stack/npm.webp?format=webp&quality=15";
import nvm from "../assets/stack/nvm.webp?format=webp&quality=15";
import mysql from "../assets/stack/mysql.png?format=webp&quality=15";
import nginx from "../assets/stack/nginx.webp?format=webp&quality=15";
import gcp from "../assets/stack/gcp.png?format=webp&quality=15";
import docker from "../assets/stack/docker.webp?format=webp&quality=15";
import photoshop from "../assets/stack/photoshop.webp?format=webp&quality=15";
import git from "../assets/stack/git.webp?format=webp&quality=15";
import jira from "../assets/stack/jira.webp?format=webp&quality=15";
import slack from "../assets/stack/slack.webp?format=webp&quality=15";
import bootstrap from "../assets/stack/bootstrap.png?format=webp&quality=15";
import webpack from "../assets/stack/webpack.png?format=webp&quality=15";
import vite from "../assets/stack/vite.png?format=webp&quality=15";
import next from "../assets/stack/next.png?format=webp&quality=15";
import figma from "../assets/stack/figma.png?format=webp&quality=15";

const iconMap = {
  html: { img: html, size: 58, text: "HTML" },
  css: { img: css, size: 58, text: "CSS" },
  javascript: { img: javascript, size: 48, text: "JavaScript" },
  typescript: { img: typescript, size: 62, text: "TypeScript" },
  jquery: { img: jquery, size: 48, text: "jQuery" },
  php: { img: php, size: 68, text: "PHP" },
  ajax: { img: ajax, size: 64, text: "AJAX" },
  axios: { img: axios, size: 64, text: "Axios" },
  reactquery: { img: reactquery, size: 62, text: "React Query" },
  react: { img: react, size: 62, text: "React" },
  vue: { img: vue, size: 52, text: "Vue.js" },
  zustand: { img: zustand, size: 100, text: "Zustand" },
  sass: { img: sass, size: 82, text: "Sass" },
  tailwind: {
    img: tailwind,
    size: 60,
    text: "Tailwind CSS",
  },
  nodejs: { img: nodejs, size: 72, text: "Node.js" },
  npm: { img: npm, size: 64, text: "npm" },
  nvm: { img: nvm, size: 64, text: "nvm" },
  mysql: { img: mysql, size: 92, text: "MySQL" },
  nginx: { img: nginx, size: 100, text: "Nginx" },
  gcp: { img: gcp, size: 72, text: "Google Cloud Platform" },
  docker: { img: docker, size: 62, text: "Docker" },
  photoshop: { img: photoshop, size: 46, text: "Photoshop" },
  git: { img: git, size: 68, text: "Git" },
  jira: { img: jira, size: 42, text: "Jira" },
  slack: { img: slack, size: 48, text: "Slack" },
  bootstrap: { img: bootstrap, size: 92, text: "Bootstrap" },
  webpack: { img: webpack, size: 60, text: "Webpack" },
  vite: { img: vite, size: 56, text: "Vite" },
  next: { img: next, size: 52, text: "Next.js" },
  figma: { img: figma, size: 74, text: "Figma" },
};

function StackIcon({ id }) {
  return (
    <>
      <div
        className="stack-icon"
        data-tooltip-id={id}
        data-tooltip-content={iconMap[id]?.text || "Unknown"}
        style={{
          backgroundImage: `url(${iconMap[id]?.img})`,
          backgroundSize: `${iconMap[id]?.size || 70}%`,
        }}
      ></div>
      <Tooltip id={id} className="tool-tip" />
    </>
  );
}

export default StackIcon;
