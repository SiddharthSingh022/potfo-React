// src/components/Projects.js
import React from 'react';

const projects = [
  {
    title: 'Project 1',
    description: 'This a web-site which I have created for a Interior_Designer Company.',
    link: 'https://siddharths2305.github.io/interior/',
  },
  {
    title: 'Project 2',
    description: 'OverView of My-Self',
    link: 'https://linktr.ee/siddharth_singh2305',
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section>
      <h2>My Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
