/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Bg2.jpg";

const imageAltText = "Background of a man doing work on PC & Laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Razorpay Clone 🎉",
    description:
    "It's a website that has been designed to mimic the design of the popular Indian payment gateway, Razorpay. This site is totally responsive.",
    url: "https://github.com/SOMNATH0904/Razorpay-Clone",
    },
    {
    title: "Spotify Clone",
    description:
    "This Project contains a Spotify Clone which is created using HTML and CSS.",
    url: "https://github.com/SOMNATH0904/Spotify-Clone",
    },
    {
    title: "Portfolio Site",
    description:
    "This is the Basic Portfolio Site, which is totally created using HTML & CSS.",
    url: "https://github.com/SOMNATH0904/Portfolio-Page",
    },
    {
    title: "Simon Game",
    description:
    "Simon is an electronic game of short-term memory skill invented by Ralph H. Baer and Howard J. Morrison, working for toy design firm Marvin Glass and Associates with software programming by Lenny Cope.",
    url: "https://github.com/SOMNATH0904/Simon-Game",
    },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
