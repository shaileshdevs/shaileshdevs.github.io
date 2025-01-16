import React from 'react';

function Skills() {
  const skills = [
    { name: "WordPress", years: 6, skillIndex: 8 },
    { name: "PHP", years: 6, skillIndex: 8 },
    { name: "HTML", years: 6, skillIndex: 8 },
    { name: "CSS", years: 6, skillIndex: 8 },
    { name: "JavaScript", years: 6, skillIndex: 8 },
    { name: "jQuery", years: 6, skillIndex: 8 },
    { name: "MySQL", years: 6, skillIndex: 8 },
    { name: "REST API", years: 3, skillIndex: 8 },
    { name: "ReactJs", years: 1, skillIndex: 6 },
    { name: "Git", years: 6, skillIndex: 8 },
    { name: "Linux", years: 6, skillIndex: 8 }
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <h3>{skill.name}</h3>
            <p>{skill.years} {skill.years > 1 ? "years" : "year"} experience</p>
            <div className="progress-container">
              <progress className="progress-bar" value={skill.skillIndex} max="10"></progress>
              <span className="tooltip">Expertise: {skill.skillIndex}/10</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
