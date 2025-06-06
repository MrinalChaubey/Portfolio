import React from "react";
import PageHeaderContent from "../../components/Pageheader";
import { BsInfoCircleFill, BsLinkedin } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./Contact.css";

const Contact = () => {
  const contactInfo = {
    linkedIn: "https://www.linkedin.com/in/mrinal-chaubey-44a317290/",
    number: Math.floor(Math.random() * 1000000),
    name: "Mrinal Chaubey",
    email: "mrinal@example.com",
    description:
      "Hello! I'm a developer passionate about building meaningful projects and collaborating with creative minds."
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(-200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>

        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <div className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  readOnly
                  value={contactInfo.name}
                  className="inputName"
                  type="text"
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  readOnly
                  value={contactInfo.email}
                  className="inputEmail"
                  type="text"
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  readOnly
                  value={contactInfo.description}
                  className="inputDescription"
                  rows="5"
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
          </div>
        </Animate>

        <Animate
          play
          duration={1}
          delay={0.5}
          start={{ opacity: 0, transform: "translateY(50px)" }}
          end={{ opacity: 1, transform: "translateY(0)" }}
        >
          <div className="contact__social">
            <h4>Connect with me</h4>
            <div className="contact__social__links">
              <a
                href={contactInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <BsLinkedin size={30} color="#0A66C2" />
              </a>
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
