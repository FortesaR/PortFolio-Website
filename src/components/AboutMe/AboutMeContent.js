
import React, { useEffect, useState } from "react"
import myPic from "../../images/Foto.jpg" 
import cvFile from "../../File/FortesaCV.pdf" 
import "./AboutMeContent.css"

const AboutMeContent = () => {
  const [backgroundStyle, setBackgroundStyle] = useState("#F5EFFF"); 
  const [textColor, setTextColor] = useState("#B35F72");
  const targetStyle = "linear-gradient(280deg, #F5EFFF, #BBB1F2)"; 
  const targetTextStyle = "#9EA4B9";

  useEffect(() => {
    let isFaded = false;

    const interval = setInterval(() => {
      if (!isFaded) {
        setBackgroundStyle(targetStyle);
        setTextColor(targetTextStyle);
        isFaded = true;
      } else {
        setBackgroundStyle("#F5EFFF");
        setTextColor("#666666");
        isFaded = false;
      }
    }, 60000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="about-section"
      style={{
        background: backgroundStyle,
        color: textColor,
      }}
    >
      <div className="text-content">
        <h1>Welcome to My Portfolio</h1>
        <p>
          A passionate student in web development with knowledge gained from
          completing courses in React. Interested in applying my skills and
          knowledge in a professional environment to gain practical experience
          and contribute to real projects. Eager to learn and work in a team to
          develop innovative solutions and improve my web development skills.
        </p>
        <a
          href={cvFile}
          download
          className="download-btn"
        >
          Download My CV
        </a>
      </div>

      <div className="image-container">
        <img
          src={myPic}
          alt="My Profile"
        />
      </div>
    </section>
  )
}

export default AboutMeContent;
