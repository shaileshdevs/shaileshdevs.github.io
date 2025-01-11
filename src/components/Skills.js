import React from 'react';

function Skills() {
  const skills = [
    { name: "WordPress", years: 6 },
    { name: "PHP", years: 6 },
    { name: "HTML", years: 6 },
    { name: "CSS", years: 6 },
    { name: "JavaScript", years: 6 },
    { name: "jQuery", years: 6 },
    { name: "MySQL", years: 6 },
    { name: "REST", years: 3 },
    { name: "React", years: 1 },
    { name: "Git", years: 6 },
    { name: "Linux", years: 6 }
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <h3>{skill.name}</h3>
            <p>{skill.years} years experience</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
