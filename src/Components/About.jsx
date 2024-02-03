/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/Bg1.jpg";

const imageAltText = "Light Background Image";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
"I am pursuing a Bachelor of Technology in Computer Engineering, Currently in my Second Year at Siksha 'O' Anusandhan University, where I am learning the fundamentals of programming, software development, and computer science theory.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Front-End Web Developer",
  "User Experience",
  "JAVA Programmimg",
  "Flutter Developer",
  "Git & GitHUb",
  "Google Cloud Platform",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
"As a Student Learn Ambassador at Microsoft, I help students learn and grow through technology. I facilitate workshops, mentor peers, and promote Microsoft products and services on campus. I also leverage my skills in Postman API to create and test APIs for various projects. In this role, I have gained valuable experience in communication, leadership, and technical skills. I have a strong interest in web and mobile applications, and I have developed several projects using Java and Python. I am also exploring data structures and algorithms (DSA) and frontend development to enhance my knowledge and skills. I am passionate about learning new technologies and solving problems. I am always open to connecting with other professionals and students who share my enthusiasm and curiosity. My goal is to become a proficient and innovative software engineer who can contribute to the advancement of the field.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
