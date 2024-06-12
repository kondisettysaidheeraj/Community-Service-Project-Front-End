import React, { useState,useEffect } from 'react';
import TeamData from './TeamData';
import Survey from './Survey';
import ProjectGuide from './ProjectGuide';

const AboutUs = () => {

    
  return (
    <>
   
       <h1>About Us</h1>
      <h3>Our Mission</h3>
      <p>  ◉ {'\u00A0'} 
        Welcome to our project on air pollution! We are a team of dedicated individuals passionate about addressing the pressing issue of air pollution and its impact on our environment and health.
      </p>

      <h3>Meet the Team</h3>
      <p>
        We are a team of motivated individuals from the same class, studying Information Technology (IT) in our fourth year at NEC College. Let us introduce ourselves:
      </p>

  
   <TeamData/>
   <h1>Project Guides and Faculty Members</h1>
   <ProjectGuide/>


      <h3>Our Vision</h3>
      <p>
      ◉ {'\u00A0'} Our vision is to create a world where everyone breathes clean and healthy air. We believe that by raising awareness, promoting sustainable practices, and fostering collaboration, we can make a significant impact in reducing air pollution and improving the well-being of our communities.
      </p>

      <h3>Our Approach</h3>
      <p>
      ◉ {'\u00A0'} With the support of my project team, we have conducted extensive research and collaborated with experts in the field of environmental science. Our approach is centered around education, engagement, and advocacy. By providing accurate information and empowering individuals to take action, we strive to create a positive change in the air quality of our surroundings.
      </p>

      <h3>What We Do</h3>
      <p>
      ◉ {'\u00A0'} Our project focuses on raising awareness about air pollution and implementing initiatives to reduce its harmful effects. We conduct workshops, awareness campaigns, and community events to educate people about the causes, consequences, and preventive measures of air pollution. Additionally, we collaborate with local authorities and organizations to implement sustainable practices and promote policies that support cleaner air.
      </p>

      <h3>Join Us in Making a Difference</h3>
      <p>
      ◉ {'\u00A0'} We believe that every individual has a role to play in combatting air pollution. Whether you are a student, community member, or policymaker, we invite you to join us in our efforts. Together, we can create a cleaner and healthier environment for present and future generations.
      </p>

      <h3>Contact Us</h3>
      <p>
      ◉ {'\u00A0'} For more information or to get involved, please feel free to reach out to us. We would love to hear from you and explore opportunities for collaboration and making a lasting impact in the fight against air pollution.
      </p>
     
   
    </>
  );
};

export default AboutUs;
