import React from "react";
import css from "../tech/css.png";
import html from "../tech/js.png";
import js from "../tech/html.png";
import git from "../tech/git.png";
import npm from "../tech/npm.png";
import vs from "../tech/vs.png";
import firebase from "../tech/firebase.png";
import postman from "../tech/postman.png";
import node from "../tech/node.png";
import react from "../tech/react.png";
import aws from "../tech/aws.png";
import azure from "../tech/azure.png";
import mongoDB from "../tech/mongoDB.png";
import docker from "../tech/docker.png";
import kubernetes from "../tech/kubernetes.png";
import newrelic from "../tech/newrelic.png";

import "./pagesCss/technology.css";
export const Technologies = () => {
  return (
    <div>
      <div className="technology">
        <h1>Tech Stack</h1> <br />
        <p>Technologies I've been working with recently</p>
        <br />
      </div>
      <div className="tech">
        <img src={css} alt="" />
        <img src={js} alt="" />
        <img src={html} alt="" />
        <img src={react} alt="" />
        <img src={mongoDB} alt="" />
        <img src={node} alt="" />
        <img src={aws} alt="" />
        <img src={azure} alt="" />
      </div>
      <div className="tools">
        <h1>Tools</h1>
      </div>
      <div className="tools__img">
        <img src={vs} alt="" />
        <img src={git} alt="" />
        <img src={npm} alt="" />
        <img src={newrelic} alt="" />
        <img src={postman} alt="" />
        <img src={firebase} alt="" />
        <img src={docker} alt="" />
        <img src={kubernetes} alt="" />
      </div>
    </div>
  );
};
