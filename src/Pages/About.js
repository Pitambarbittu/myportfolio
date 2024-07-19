import React from "react";
import "./pagesCss/about.css";
import man from "../Image/man.png";
export const About = () => {
  return (
    <div className="About">
      <div className=" card__section">
        <div className="About__first">
          <h1>About Me</h1>
          <br />
          <br />
          <p>
            I'm a skilled Software Engineer specializing in JavaScript,
            TypeScript, React, MongoDB, Node.js, and cloud computing with Azure
            and AWS. My expertise spans full-stack development, from building
            scalable APIs to integrating complex systems like Microsoft Graph
            API for enhanced productivity tools. <br /> <br />

            I excel in optimizing processes and enhancing user experiences,
            evidenced by my contributions to backend development and
            microservices architecture adoption. Fluent in English, Hindi, and
            Bengali, I bring strong communication skills to collaborative
            projects. <br /> <br />
            
            With a Bachelor's degree in Mechanical Engineering and
            certifications in AWS Cloud Essentials and New Relic, I'm committed
            to continuous learning and delivering innovative solutions that
            drive business efficiency and client satisfaction.
          </p>
        </div>
        <section>
          <img src={man} alt="" />
        </section>
      </div>
      <div className="About__second">
        <h1>Education-</h1>
        <section className="stack">
          <p>Full Stack Developer</p>
          <p>feb 2022 - Aug 2022</p>
        </section>
        <section className="prep">
          <p>Prepbyetes</p> <p>Online</p>
        </section>
        <br />
        <hr className="hr_line" />
        <section className="stack">
          <p>Bachelor in Mechanical Engineering (B.tech)</p>
          <p>2017 - 2021</p>
        </section>
        <section className="prep">
          <p>ADAMAS UNIVERSITY</p> <p>KOLKATA (W.B)</p>
        </section>{" "}
        <br />
        <hr className="hr_line" />
        <section className="stack">
          <p>Intermediate Education in Mechanical Engineering (Diploma)</p>
          <p>2014 - 2016</p>
        </section>
        <section className="prep">
          <p>KALINGA UNIVERSITY</p> <p>Raipur, Chhattisgarh</p>
        </section>{" "}
        <br />
        <hr className="hr_line" />
        <section className="stack">
          <p>Secondary Education (Automobile Engineering & Technology)</p>
          <p>2012 - 2014</p>
        </section>
        <section className="prep">
          <p>KHAGRA GURUDAS TARASUNDARI INSTITUTION</p>{" "}
          <p>Murshidabad (West bengal)</p>
        </section>{" "}
        <br /> <br /> <hr className="hr_line" />
        <h1>Work Experience-</h1>
        <section className="stack">
          <h2>CloudEQ INC - Chandigarh (Punjab) India</h2>
          <p>01/2023 - Present</p>
        </section>
        <section className="prep">
          <h3>Role - </h3> <p>Software Engineer I</p>
        </section>{" "}
        <br />
        <h3>Achievements/Tasks - </h3>
        <p>
          ● Created efficient and maintainable software according to business
          objectives and needs of clients, leading to a 25% increase in overall
          client satisfaction.
          <br />
          ● Integrated Microsoft Graph API to access and manipulate Outlook 365
          tools like calendars, emails, and user profiles, and build APIs around
          the data using Node js.
          <br />
          ● Contributed significantly to a team of 5 as the primary backend
          developer for an E-commerce website and Jira Xpertise Manager,
          enhancing team efficiency by 35%.
          <br />
          ● Developed scalable RESTful APIs to facilitate data communication
          between front-end and back-end systems.
          <br />
          ● Standardized data processing and presentation by defining Jira API,
          achieving 35% enhanced data handling and 30% improved functionality
          within six months. Addressed bugs, conducted daily data syncs, and
          refined database queries, reducing response time by 30%.
          <br />● Architected an upgraded Jira Issue Management System for the
          T-SOD MCD Project; optimized system design and improved scalability by
          40%, facilitating seamless future upgrades and driving project
          efficiency.
        </p>{" "}
        <br />
        <hr className="hr_line" />
        <section className="stack">
          <h2>
            Maruti Suzuki Commercial (Friendly Motors) - Mysore (Karnataka)
            India
          </h2>
          <p>04/2021 - 07/2021</p>
        </section>
        <section className="prep">
          <h3>Role - </h3> <p>Service Advisor</p>
        </section>{" "}
        <br />
        <h3>Achievements/Tasks - </h3>
        <p>
          I worked as Service Advisor with ample of responsiblities, like
          dealing with clients , <br /> maintaining the stuff's for the services
          and guide the workers to repairing and maintenance of Maruti Suzuki
          cars etc.
        </p>{" "}
        <br />
        <hr className="hr_line" />
        <section className="stack">
          <h2>Primax Equipment Pvt. Ltd - Kolkata (West Bengal)</h2>
          <p>05/2029 - 07/2019</p>
        </section>
        <section className="prep">
          <h3>Role - </h3> <p>Internship</p>
        </section>{" "}
        <br />
        <h3>Achievements/Tasks - </h3>
        <p>
          During the training I worked with Bending, Cutting, Tapping of M. S.
          Shaft, Drilling, Gas Cutting, <br /> MIG Welding - Gas Metal Arc
          Welding (GMAW) , Arc Welding, Surface Development (viz. Marking, Sheet
          Cutting, Angle Cutting).
        </p>{" "}
        <br />
        <hr className="hr_line" />
        <section className="stack">
          <h2>Endurance Technologies Ltd. - Pune (Maharashtra) India</h2>
          <p>05/2015 - 03/2016</p>
        </section>
        <section className="prep">
          <h3>Role - </h3> <p>CNC Machine Operator.</p>
        </section>{" "}
        <br />
        <h3>Achievements/Tasks - </h3>
        <p>
          Cylinder Head Breather Pressing Machine Operated. <br />
          Studied the different type of CNC controls which is used in CNC
          Machine. And also Learnt the Assembly For CNC Machine.
        </p>{" "}
        <br />
        <hr className="hr_line" />
      </div>
    </div>
  );
};
