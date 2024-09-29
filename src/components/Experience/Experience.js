import React from 'react';
import './Experience.css'; 

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Tech Company',
      duration: 'Jan 2022 - Present',
      description: 'Developing user interfaces using React and ensuring responsive design.',
    },
    {
      title: 'Web Developer Intern',
      company: 'Startup Inc.',
      duration: 'Jun 2021 - Dec 2021',
      description: 'Assisted in the development of web applications and learned about Agile methodologies.',
    },
    {
        title: 'Web Developer Intern',
        company: 'Startup Inc.',
        duration: 'Jun 2021 - Dec 2021',
        description: 'Assisted in the development of web applications and learned about Agile methodologies.',
      },
    
  ];
  const education = [
    {
        title: 'Gjimnazi Ulpiana',
        company: 'High School',
        duration: '2016 - 2019',
        
      },
      {
        title: 'Shkenca kompjuterike',
        company: 'Ubt',
        duration: '2019 - Currently',
        description: 'Assisted in the development of web applications and learned about Agile methodologies.',
      },
      {
          title: 'React Js',
          company: 'BIT-Academy',
          duration: 'ANG 2023 - Dec 2023',
          description: 'Assisted in the development of web applications and learned about Agile methodologies.',
        },

  ];

  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.title}</h3>
            <h4>{exp.company}</h4>
            <span>{exp.duration}</span>
            <p>{exp.description}</p>
          </div>
          
        ))}
      </div>
      <h2>Education/Cousres</h2>
      <div className="experience-list">
        {education.map((edu, index) => (
          <div key={index} className="experience-item">
            <h3>{edu.title}</h3>
            <h4>{edu.company}</h4>
            <span>{edu.duration}</span>
            <p>{edu.description}</p>
          </div>
          
        ))}
      </div>
    </section>
  );
};

export default Experience;
