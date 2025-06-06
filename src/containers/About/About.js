import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from '../../components/Pageheader';
import { Animate } from "react-simple-animate";
import "./About.css";

const personalDetails = [
  { label: "Name", value: "Mrinal Chaubey" },
  { label: "Age", value: "19" },
  { label: "Address", value: "India" },
  { label: "Email", value: "mrinalchaubey7@gmail.com" },
  { label: "Contact No", value: "+91 8871017642" },
];

const jobSummary = `I’m Mrinal Chaubey, an Information Technology student from Raipur. I’m really passionate about front-end development and UI/UX design. I believe in working hard and constantly improving myself. I like combining design and coding to create smooth and attractive user experiences. I’m always learning new things and focusing on practical skills that will help me grow in the IT field. Besides coding, I enjoy traveling and playing chess, which help me stay balanced and focused.`;

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(-900px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3>Student at NIT Raipur</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(500px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="personalInformationHeaderText">Personal Information</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>

        <div className="about__content__servicesWrapper">
          <div className="about__content__servicesWrapper__innerContent">
            <div className="blob blob1"></div>
            <div className="blob blob2"></div>
            <div className="blob blob3"></div>
            <div className="blob blob4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
