import React from "react";
import "./project.css";
import social from "../../img/socialapp.png";
import todolist from "../../img/todolist.png";
import crud from "../../img/crud.png";
import secrets from "../../img/secrets.png";
import todo from "../../img/todo.png";

export default function Project() {
  return (
    <div className="project" id="projects">
      <div className="projectContainer">
        <div className="pr">
          <p className="para">Personal Projects</p>
        </div>
        <div className="projectMid">
          <img src={social} alt="" className="projectImg" />
        </div>
        <div className="projectRight">
          <div className="projectDesc">
            <h3 className="projectTitle">Title : Social Media App</h3>
            <h3 className="tech">
              Technology Used : JAVASCRIPT , NODE.JS , REACT.JS , MONGODB ,
              RESTAPI
            </h3>
            <p className="descPara">
              <b>Description :</b> It is a Full Stack Social Media App with
              react and Node.js. In Which user can create their own posts. User
              can make friends to other user. User can like their friends post
              and and also user can change his profile picture. he also put
              comments on their friends posts.Data is full secured saved with
              help of mongoDB.
            </p>
            <a
              className="anchor"
              href="https://client-social-github.herokuapp.com"
            >
              Project Link
            </a>
          </div>
        </div>
        <div className="projectMid">
          <img src={crud} alt="" className="projectImg" />
        </div>
        <div className="projectRight">
          <div className="projectDesc">
            <h3 className="projectTitle">Title : CRUD App</h3>
            <h3 className="tech">
              Technology Used : JAVASCRIPT , NODE.JS , REACT.JS , MONGODB ,
              RESTAPI
            </h3>
            <p className="descPara">
              <b>Description :</b> It is a Full Stack Social Media App with
              react and Node.js. In Which user can create their own posts. User
              can make friends to other user. User can like their friends post
              and and also user can change his profile picture. he also put
              comments on their friends posts.Data is full secured saved with
              help of mongoDB.
            </p>
            <a
              className="anchor"
              href="https://client-social-github.herokuapp.com"
            >
              Project Link
            </a>
          </div>
        </div>
        <div className="projectMid">
          <img src={todolist} alt="" className="projectImg" />
        </div>
        <div className="projectRight">
          <div className="projectDesc">
            <h3 className="projectTitle">Title : Social Media App</h3>
            <h3 className="tech">
              Technology Used : JAVASCRIPT , NODE.JS , REACT.JS , MONGODB ,
              RESTAPI
            </h3>
            <p className="descPara">
              <b>Description :</b> It is a Full Stack Social Media App with
              react and Node.js. In Which user can create their own posts. User
              can make friends to other user. User can like their friends post
              and and also user can change his profile picture. he also put
              comments on their friends posts.Data is full secured saved with
              help of mongoDB.
            </p>
            <a
              className="anchor"
              href="https://client-social-github.herokuapp.com"
            >
              Project Link
            </a>
          </div>
        </div>
        <div className="projectMid">
          <img src={secrets} alt="" className="projectImg" />
        </div>
        <div className="projectRight">
          <div className="projectDesc">
            <h3 className="projectTitle">Title : Social Media App</h3>
            <h3 className="tech">
              Technology Used : JAVASCRIPT , NODE.JS , REACT.JS , MONGODB ,
              RESTAPI
            </h3>
            <p className="descPara">
              <b>Description :</b> It i a Full Stack Social Media App with
              react and Node.js. In Which user can create their own posts. User
              can make friends to other user. User can like their friends post
              and and also user can change his profile picture. he also put
              comments on their friends posts.Data is full secured saved with
              help of mongoDB.
            </p>
            <a
              className="anchor"
              href="https://client-social-github.herokuapp.com"
            >
              Project Link
            </a>
          </div>
        </div>
        <div className="projectMid">
          <img src={todo} alt="" className="projectImg" />
        </div>
        <div className="projectRight">
          <div className="projectDesc">
            <h3 className="projectTitle">Title : Social Media App</h3>
            <h3 className="tech">
              Technology Used : JAVASCRIPT , NODE.JS , REACT.JS , MONGODB ,
              RESTAPI
            </h3>
            <p className="descPara">
              <b>Description :</b> It is a Full Stack Social Media App with
              react and Node.js. In Which user can create their own posts. User
              can make friends to other user. User can like their friends post
              and and also user can change his profile picture. he also put
              comments on their friends posts.Data is full secured saved with
              help of mongoDB.
            </p>
            <a
              className="anchor"
              href="https://client-social-github.herokuapp.com"
            >
              Project Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
