import React from "react";
import { Line } from "rc-progress";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import Pageheader from "../../components/Pageheader";  // Correct import for index.js
import { skillsData } from "./utils";
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <Pageheader
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills__content-wrapper">
        {skillsData.map((item, i) => (
          <div key={i} className="skills__content-wrapper__inner-content">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{ transform: "translateX(-200px)" }}
              end={{ transform: "translateX(0px)" }}
            >
              <h3 className="skills__content-wrapper__inner-content__category-text">
                {item.label}
              </h3>
              <div className="skills__content-wrapper__inner-content__progressbar-container">
                {item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity: 0", "opacity: 1"]}
                    iterationCount="1"
                    key={j}
                  >
                    <div className="progressbar-wrapper">
                      <p>
                        {skillItem.skillName} - {skillItem.percentage}%
                      </p>
                      <Line
                        percent={Number(skillItem.percentage)}
                        strokeWidth={2}
                        strokeColor="#e2c01dc5"
                        trailWidth={2}
                        strokeLinecap="square"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
