import React from 'react';

const About = (props) => {
  const { aboutRef } = props;

  return (
    <section id="about" ref={aboutRef} >
      <h2>About Me</h2>
      <p>I am a dedicated and skilled software engineer specializing in WordPress development. My experience includes extensive work in creating and modifying WordPress plugins and themes. I have a strong foundation in software engineering principles, best practices and WordPress coding standards. I am well-versed in integrating third-party services like Elastic Search, Mailchimp.</p>
      <br />
      <p>Along with WordPress, I have a deep understanding of web fundamentals and full-stack development, allowing me to create comprehensive and efficient web solutions.</p>
    </section>
  );
}

export default About;

