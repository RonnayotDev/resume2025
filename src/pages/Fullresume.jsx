import React from "react";
import { Link } from "react-router-dom";

const Fullresume = () => {
  return (
    <>
      <div className="flex flex-col justify-center px-8  py-8 md:px-120 md:py-20 gap-6 mx-auto">
        <div className="flex justify-start w-full">
          {" "}
          <Link to="/">
            <button className="border border-gray-300 p-2 rounded-md bg-gray-300 text-md hover:bg-gray-400 hover:cursor-pointer">
              Back to homepage
            </button>
          </Link>
        </div>
        <div className="flex flex-col text-right w-full">
          <h1 className="font-bold text-6xl">Ronnayot Jaisai</h1>
          <h2 className="font-semibold mt-2">
            Frontend Developer , Fullstack Developer (C#/.net, Nodejs - Reactjs)
          </h2>
          <p>
            Robust problem-solving skills, fast learner, responsible, eager to
            learn new technologies.
          </p>
          <div className="mt-8">
            <div>
              <a
                href="https://github.com/RonnayotDev"
                target="_blank"
                className="text-blue-500"
              >
                github.com/RonnayotDev
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/ronnayot-jaisai-08534a202/"
                target="_blank"
                className="text-blue-500"
              >
                linkedin.com/in/ronnayot-jaisai
              </a>
            </div>
            <div>
              <p className="text-md text-gray-500">Thailand, Bangkok (UTC-7)</p>
            </div>
            <div>
              <p className="text-md text-gray-500">063-202-4461</p>
            </div>
            <div>
              <p className="text-md text-gray-500">ronnayot.dev@gmail.com</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p className="text-xl font-bold mt-4">Professional Experience</p>
          </div>
          <div className="mt-4">
            <ul>
              <li>Ignite-idea – Solution Developer August 2024 - Present</li>
              <li className="text-sm text-gray-500 mt-2">
                Configured and developed Salesforce solutions using both
                Standard and Custom Objects. Utilized LWC (Lightning Web
                Components), Aura, and NestJS for development. Implemented SOQL
                (Salesforce Object Query Language) and SQL for querying and
                managing data within Salesforce. Collaborated with
                cross-functional teams to design and implement tailored
                solutions for clients. Provided ongoing support and
                troubleshooting to optimize Salesforce functionality.
              </li>
            </ul>
            <ul className="mt-2">
              <li>
                Accenture Advance Technology Center Thailand Oct 2021 - Apr 2024
              </li>
              <li className="text-sm text-gray-500 mt-2">
                Accenture ATCT - Internal Project Songkran GenAI(Frontend
                Developer) Mar 2024 - Apr 2024 Developed and maintained frontend
                components of web applications using ReactJS Implemented
                responsive designs and optimized performance for improved user
                experience. Collaborated with backend developers to integrate
                frontend with RESTful APIs. Conducted code reviews and provided
                constructive feedback to team members. Assisted in
                troubleshooting and resolving issues to ensure smooth operation
                of applications.
              </li>
              <li className="text-sm text-gray-500 mt-2">
                Accenture ATCT - Implementation KRUNG THAI BANK PCL (Application
                Developer) Jan 2023 - Dec 2023 Build web application(Web Admin –
                Revamp) from scratch using Angular. design and implement
                component and form validation.discuss service and http modules
                were utilized for seamless communication with backend and
                integrating angular project into CI/CD pipelines.Support tester
                when have defect and support UX/UI for design. Support fix
                errors on Web admin using Java Springboot and Angular.
              </li>
              <li className="text-sm text-gray-500 mt-2">
                Accenture ATCT - UNICEF Thailand –Salesforce CRM(Salesforce/SQL
                Analyst) Mar 2022 - Apr 2022 Configure, build and test the
                application or technical architecture components. Participate in
                code reviews and help fix defects discovered in testing
                activities
              </li>
              <li className="text-sm text-gray-500 mt-2">
                <li className="text-sm text-gray-500 mt-2">
                  Accenture ATCT - UNICEF Thailand –Salesforce
                  CRM(Salesforce/SQL Analyst) Mar 2022 - Apr 2022 Configure,
                  build and test the application or technical architecture
                  components. Participate in code reviews and help fix defects
                  discovered in testing activities
                </li>
              </li>
            </ul>
            <ul className="mt-2">
              <li>
                IC Web Co., Ltd. @Kasikorn site(Web Developer) Dec 2020 - Sep
                2021
              </li>
              <li className="text-sm text-gray-500 mt-2">
                Edit Content Using HTML, CSS, JAVASCRIPT ONLY ,Develop promotion
                pages ,Modify code to fix errors, Develop landing page from
                scratch.Edit SEO properties,UTM passthrough
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <h1 className="font-bold text-xl">Education</h1>
            <div>
              <ul>
                <li>
                  Bachelor of Science in Information Technology
                </li>
                <li><a href="https://www.su.ac.th/" target="_blank" className="text-blue-500">Silpakorn University</a></li>
                <em className="text-xs text-gray-500">
                  Thailand, Nakhon Pathom | May/2013 - Oct/2018
                </em>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-xl font-bold">Skills</h1>
          </div>
          <div>
            <ul className="mt-2">
              <li>
                <span className="font-bold">Programming-Languages</span> -
                Node.js, C#/.net
              </li>
              <li>
                <span className="font-bold">Front-End</span> - HTML, CSS, SCSS,
                React.js, Angular
              </li>
              <li>
                <span className="font-bold">Back-End</span> - Express.js,
                C#/.net
              </li>
              <li>
                <span className="font-bold">DataBase</span> - Firebase, MongoDB
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-start w-full mt-14">
          {" "}
          <Link to="/">
            <button className="border border-gray-300 p-2 rounded-md bg-gray-300 text-md hover:bg-gray-400 hover:cursor-pointer">
              Back to homepage
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Fullresume;
