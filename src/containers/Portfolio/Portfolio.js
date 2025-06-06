import React from "react";
import "./Portfolio.css";
const portfolioData = [
  {
    name: "My GitHub Profile",
    link: "https://github.com/MrinalChaubey",
  },
  {
    name: "VchatLive WebRTC Advanced",
    link: "https://github.com/MrinalChaubey/VchatLive-WebRTC_Advanced",
  },
  {
    name: "Covid-19 Statistics Python CSV",
    link: "https://github.com/MrinalChaubey/Covid-19_Statistics-Python_CSV",
  },
  {
    name: "News App",
    link: "https://github.com/MrinalChaubey/news-app",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio__content">
      <h2>My Projects</h2>
      <div className="portfolio__cards">
        {portfolioData.map((project, index) => (
          <div key={index} className="portfolio__cards__item">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio__cards__item__link"
            >
              <div className="portfolio__cards__item__overlay">
                <div>
                  <button>View Project</button>
                </div>
              </div>
              <div className="portfolio__cards__item__img-wrapper">
                <div className="portfolio__project-name">{project.name}</div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
