import { Tooltip } from "react-tooltip";

import html from "../assets/stack/html.webp?format=webp&quality=15";
import css from "../assets/stack/css.webp?format=webp&quality=15";
import javascript from "../assets/stack/js.webp?format=webp&quality=15";
import typescript from "../assets/stack/ts.webp?format=webp";
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

const iconMap = {
  html: { img: html, size: 58 },
  css: { img: css, size: 58 },
  javascript: { img: javascript, size: 58 },
  typescript: { img: typescript, size: 62 },
  jquery: { img: jquery, size: 58 },
  php: { img: php, size: 68 },
  ajax: { img: ajax, size: 64 },
  axios: { img: axios, size: 64 },
  "react-query": { img: reactQuery, size: 62 },
  react: { img: react, size: 62 },
  vue: { img: vue, size: 52 },
  zustand: { img: zustand, size: 100 },
  sass: { img: sass, size: 82 },
  nodejs: { img: nodejs, size: 72 },
  npm: { img: npm, size: 64 },
  nvm: { img: nvm, size: 64 },
  mysql: { img: mysql, size: 68 },
  nginx: { img: nginx, size: 100 },
  gcp: { img: gcp, size: 78 },
  docker: { img: docker, size: 68 },
  photoshop: { img: photoshop, size: 46 },
  git: { img: git, size: 68 },
  jira: { img: jira, size: 42 },
  slack: { img: slack, size: 48 },
};

function StackIcon({ id, img }) {
  return (
    <>
      <div
        className="stack-icon"
        data-tooltip-id={id}
        data-tooltip-content={id}
        style={{
          backgroundImage: `url(${iconMap[img].img})`,
          backgroundSize: `${iconMap[img].size}%`,
        }}
      ></div>
      <Tooltip id={id} className="tool-top" />
    </>
  );
}

export default StackIcon;
