import React from 'react';

function Experience() {
  const experiences = [
    {
      title: "Sr. Full Stack Developer",
      company: "Pixacore",
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
    <section id="experience" className="min-h-screen p-8">
      <h2 className="text-3xl font-bold text-amber-500 mb-6">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
            <p className="text-amber-500">{exp.company}</p>
            <p className="text-gray-400 mb-4">{exp.period}</p>
            <ul className="list-disc list-inside text-gray-400">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="mb-2">{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

