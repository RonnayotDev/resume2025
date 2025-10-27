import React from "react";
import profileImg from "../assets/profile.jpg";
import githubicon from "../assets/github-svgrepo-com.svg";
import linkedicon from "../assets/linkedin-svgrepo-com.svg";
import { Link } from "react-router-dom";

const MainLeft = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        className="rounded-sm"
        src={profileImg}
        alt="Ronnayot img"
        width={180}
      />
      <div className="my-4 w-full">
        <a href="https://github.com/RonnayotDev" target="_blank">
          <button className="border border-gray-200 w-full hover:cursor-pointer hover:bg-gray-300 bg-gray-200 p-2 rounded-sm text-left flex gap-3">
            <img src={githubicon} alt="" style={{ width: 20, height: 24 }} />
            Github
          </button>
        </a>

        <a
          href="https://www.linkedin.com/in/ronnayot-jaisai-08534a202/"
          target="_blank"
        >
          <button className="border  border-gray-200 w-full hover:cursor-pointer hover:bg-gray-300 bg-gray-200 p-2 rounded-sm text-left flex gap-3 mt-2">
            <img src={linkedicon} alt="" style={{ width: 20, height: 24 }} />
            Linkedin
          </button>
        </a>
        <Link to="/fullresume">
          <button className="border border-blue-800 w-full hover:cursor-pointer hover:bg-blue-900 bg-blue-800 p-2 rounded-sm text-left flex gap-3 mt-2 flex justify-center text-white">
            Full Resume
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MainLeft;
