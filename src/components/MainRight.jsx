import React from "react";
import jsicon from "../assets/js-icon.svg";
import reacticon from "../assets/react-icon.svg";
import nodejsicon from "../assets/nodejs-icon.svg";
import htmlicon from "../assets/html-5-svgrepo-com.svg";
import cssicon from "../assets/css-svgrepo-com.svg";
import responsiveicon from "../assets/responsive-svgrepo-com.svg";
import githubicon from "../assets/github-svgrepo-com.svg";
import linkedicon from "../assets/linkedin-svgrepo-com.svg";
import emailicon from "../assets/send-message-envelope-fast-email-post-address-svgrepo-com.svg";
import phoneicon from "../assets/phone-call-svgrepo-com.svg";

const MainRight = () => {
  return (
    <div className="flex flex-col items-start">
      <div>
        <h1 className="font-bold text-2xl">Ronnayot Jaisai</h1>
      </div>
      <div>
        <h2 className="font-semibold">
          Frontend Developer , Fullstack Developer (C#/.net, Nodejs - Reactjs)
        </h2>
      </div>
      <div className="mb-5">
        <p>
          Robust problem-solving skills, fast learner, responsible, eager to
          learn new technologies.
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <div>
          <img src={jsicon} alt="JS icon" style={{ width: 20, height: 24 }} />
        </div>
        <div>
          <img
            src={reacticon}
            alt="JS icon"
            style={{ width: 20, height: 24 }}
          />
        </div>
        <div>
          <img
            src={nodejsicon}
            alt="JS icon"
            style={{ width: 20, height: 24 }}
          />
        </div>
        <div>
          <p>Mostly focused on Node.js, React and Product.</p>
        </div>
      </div>
      <div className="flex gap-3 items-center my-2">
        <div>
          <img src={htmlicon} alt="JS icon" style={{ width: 20, height: 24 }} />
        </div>
        <div>
          <img src={cssicon} alt="JS icon" style={{ width: 20, height: 24 }} />
        </div>
        <div>
          <img
            src={responsiveicon}
            alt="JS icon"
            style={{ width: 20, height: 24 }}
          />
        </div>
        <div>
          <p>Also responsive HTML and Css enthusiast.</p>
        </div>
      </div>
      <hr className="w-full md:w-md h-full my-8 text-gray-300" />
      <div>
        <div>
          <p>
            Bachelor’s Degree of Information Technology from{" "}
            <a
              className="text-blue-500 hover:underline"
              href="https://www.su.ac.th/"
              target="_blank"
            >
              Silpakorn University
            </a>
            <em className="text-xs text-gray-400 px-2">
              (Thailand, 2016-2020)
            </em>
          </p>
        </div>
        <div className="my-3">
          <p>
            Completed high school from{" "}
            <a
              className="text-blue-500 hover:underline"
              href="https://www.sai.ac.th/"
              target="_blank"
            >
              Sainoi Secondaryschool
            </a>
            <em className="text-xs text-gray-400 px-2">(Thailand)</em>
          </p>
        </div>
      </div>
      <hr className="w-full md:w-md h-full my-8 text-gray-300" />
      <div>
        <div>
          <p className="font-semibold">Projects</p>
        </div>
        <div className="flex my-4">
          <div>
            <a
              className="text-blue-500"
              href="https://movies-app-smoky-gamma.vercel.app/"
              target="_blank"
            >
              Movies App,{" "}
            </a>
          </div>
          <div>
            <p className="px-2">
              your gateway to discover, track, and enjoy your favorite movies —
              all in one place.{" "}
            </p>
          </div>
        </div>
         <div className="flex my-4">
          <div>
            <a
              className="text-blue-500"
              href="https://github.com/RonnayotDev/CRUD-NODE-REACT"
              target="_blank"
            >
              CRUDE with Nodejs, React,{" "}
            </a>
          </div>
          <div>
            <p className="px-2">
             CRUD Application using basic nodejs and react.{" "}
            </p>
          </div>
        </div>
        <div className="flex my-4">
          <div>
            <a
              className="text-blue-500"
              href="https://favorite-pokemon-nine.vercel.app/"
              target="_blank"
            >
              Favorite Pokémon,{" "}
            </a>
          </div>
          <div>
            <p className="px-2">
              a fun and simple way to collect and showcase your favorite
              Pokémon.{" "}
            </p>
          </div>
        </div>
        <div className="flex my-4">
          <div>
            <a
              className="text-blue-500"
              href="https://frontality-web-ko5z71bp0-ronnayotdev.vercel.app/"
              target="_blank"
            >
              Frontality,{" "}
            </a>
          </div>
          <div>
            <p className="px-2">
              a modern portfolio website to showcase your projects and skills.
              Present your work beautifully.{" "}
            </p>
          </div>
        </div>
        <div className="flex my-4">
          <div>
            <a
              className="text-blue-500"
              href="https://ronnayotdev.github.io/WebJS-Fullyresponsive/"
              target="_blank"
            >
              Responsive Website,{" "}
            </a>
          </div>
          <div>
            <p className="px-2">
              A clean and modern one-page website built with HTML, CSS, and
              JavaScript.{" "}
            </p>
          </div>
        </div>
      </div>
      <hr className="w-full md:w-md h-full my-8 text-gray-300" />
      <div>
        <div>
          <p className="font-semibold">More about me</p>
        </div>
        <div className="flex flex-col gap-2 my-4 md:flex-row md:gap-20">
          <div className="flex items-center gap-3">
            <img src={phoneicon} alt="" style={{ width: 20, height: 24 }} />
            <a className="text-blue-500" href="" target="_blank">
              063-202-4461
            </a>
          </div>
          <div className="flex items-center gap-3">
            <img src={githubicon} alt="" style={{ width: 20, height: 24 }} />
            <a
              className="text-blue-500"
              href="https://github.com/RonnayotDev"
              target="_blank"
            >
              Github
            </a>
          </div>
          <div className="flex items-center gap-3">
            <img src={linkedicon} alt="" style={{ width: 20, height: 24 }} />
            <a
              className="text-blue-500"
              href="https://www.linkedin.com/in/ronnayot-jaisai-08534a202/"
              target="_blank"
            >
              Linkedin
            </a>
          </div>
          <div className="flex items-center gap-3">
            <img src={emailicon} alt="" style={{ width: 20, height: 24 }} />
            <a className="text-blue-500" href="" target="_blank">
              ronnayot.dev@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainRight;
