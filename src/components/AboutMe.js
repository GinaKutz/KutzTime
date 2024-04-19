import React from 'react';

const AboutMe = () => {
  return (
    <section id="about-me">
      <h2>About Me</h2>
      <div className="about-me-content">
        {/* Recent photo or avatar of the developer */}
        <img src="avatar.jpg" alt="Developer's Avatar" />
        {/* Short bio about the developer */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
