import React from 'react';

function Experience() {
  const experiences = [
    {
      title: "Sr. Full Stack Developer",
      company: "Pixacore",
      url: "https://pixacore.com",
      period: "Jun 2023 - Jan 2025",
      responsibilities: [
        "Optimized the automation process from 12 hours to 4 hours.",
        "Created a comprehensive dashboard system to manage data of trials received from https://clinicaltrials.gov for various pharmaceutical clients.",
        "Developed different panels for various events of pharmaceutical clients such as BMS, Genentech.",
        "Optimized the dashboard system for scalability and maintainability.",
        "Implemented the functionality of 'Post reviews by different users before publish' using Oasis Workflow plugin.",
        "Integrated the dashboard system with Elasticsearch using the ElasticPress WordPress plugin.",
        "Created custom ACF fields and Gutenberg Blocks using ACF plugin.",
        "Generated PDF report using mPDF and Excel report using PhpSpreadsheet.",
        "Handled some tasks on server such as Git pull, debugging the issues on the server, DB backup, etc.",
        "Mentored junior WordPress developers.",
        "Created flow charts, sequence diagrams, instruction file and documentation for the system."
      ]
    },
    {
      title: "Sr. Software Engineer - Product",
      company: "Wisdmlabs",
      url: "https://wisdmlabs.com",
      period: "Jan 2018 - Jun 2023",
      responsibilities: [
        "Customized WordPress themes and plugins to meet client specifications and enhance user experience.",
        "Implemented responsive web design to enhance website appeal on mobile devices.",
        "Collaborated with cross-functional teams including designers, content creators, and project managers to deliver projects on time and within budget.",
        "Performed website updates, bug fixes, and troubleshooting to ensure optimal performance.",
        "Optimized website speed and performance through caching techniques, image optimization, and code optimization.",
        "Integrated third-party APIs into WordPress websites for enhanced functionality.",
        "Created custom post types, taxonomies, meta boxes and ACF fields to organize content effectively.",
        "Ensured website security by implementing measures such as regular backups, strong passwords, and security plugins.",
        "Stayed up-to-date with the latest trends in web development technologies including HTML5/CSS3/JavaScript frameworks.",
        "Utilized version control systems (e.g., Git) for efficient code management.",
        "Implemented e-commerce functionalities using WooCommerce, Easy Digital Downloads and other relevant plugins.",
        "Implemented analytics tracking (e.g., Google Analytics) to monitor website performance and user behavior.",
        "Improved website conversion rates through effective call-to-action placement and design.",
        "Collaborated with marketing teams to develop optimized landing pages.",
        "Increased website loading speed by optimizing database queries, reducing server response time, and leveraging caching techniques.",
        "Implemented multilingual functionality using plugins like WPML or Polylang.",
        "Demonstrated strong problem-solving skills in resolving complex technical issues related to WordPress development.",
        "Managed multiple projects simultaneously while meeting deadlines consistently.",
        "Worked with plugins such as Elementor, Contact Form 7, OptinMonster, ACF.",
        "Created documentation including user manuals, technical specifications, and training materials."
      ]
    }
  ];

  return (
    <section id="experience">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.title}</h3>
          <p className="company">
            <a href={exp.url} target="_blank">
              <span>{exp.company}</span>
              {/* External Link Icon. */}
              <svg xmlns="http://www.w3.org/2000/svg" height="8" width="8" viewBox="0 0 512 512"><path fill="#fdb347" d="M432 320H400a16 16 0 0 0 -16 16V448H64V128H208a16 16 0 0 0 16-16V80a16 16 0 0 0 -16-16H48A48 48 0 0 0 0 112V464a48 48 0 0 0 48 48H400a48 48 0 0 0 48-48V336A16 16 0 0 0 432 320zM488 0h-128c-21.4 0-32.1 25.9-17 41l35.7 35.7L135 320.4a24 24 0 0 0 0 34L157.7 377a24 24 0 0 0 34 0L435.3 133.3 471 169c15 15 41 4.5 41-17V24A24 24 0 0 0 488 0z"/></svg>
            </a>
            <span className="company-period-separator"> | </span>
            <span className="period">{exp.period}</span>
          </p>
          <ul>
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;

