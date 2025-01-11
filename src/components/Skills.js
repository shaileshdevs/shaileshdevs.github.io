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
    <section id="skills" className="min-h-screen p-8">
      <h2 className="text-3xl font-bold text-amber-500 mb-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
            <p className="text-gray-400">{skill.years} years experience</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

