import React from "react";

const About = () => {
  return (
    <div>
      <h1> About this app </h1>
      <p className="my-1">
        This a MERN app for keeping contact. It displays the core aspects of a
        MERN app, namely, the CRUD operation & authentication with route
        protection.
      </p>
      <p className="bg-dark p">
        <strong>Version: 1.0.0</strong>
      </p>
    </div>
  );
};

export default About;
