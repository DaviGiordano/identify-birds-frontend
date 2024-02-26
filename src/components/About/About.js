// About.js

import React from 'react';
import yourStaticImage from './../../meme.jpg'; // Ensure the path is correct
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './About.css';

function About() {
  return (
    <div className="about-container">
      <header className='about-header'>
        <Link className='link-to-app' to="/"></Link>
        <h1 className="title-about">Bird Identifier v1</h1>  
      </header>
      <h2 className="subtitle-about">About This Project</h2>
      <p className='text-about'>This small project was inspired by this joke:</p>
      <img className='image-about' src={yourStaticImage} alt="Bird Identifier" />


      <h2 className="subtitle">Why It Was Done</h2>
      <p>This is practice portifolio project aimed at building a small app that uses some Machine Learning and deploying it. (Pre-trained AlexNet).</p>

      <h2 className="subtitle">Next Steps</h2>
      <p>In a second version, I would improve it by:</p>
      <ul>
        <li>Fine-tuning the model to improve its performance</li>
        <li>Using segmentation models to identify the position of the bird in the image</li>
        <li>Adding more information to the model (at the expense of the joke)</li>
        <li>Deploying the model using better methods to track its performance</li>
      </ul>

      <h2 className="subtitle">More details</h2>
      <p>More in-depth comments about the project here: <a className='blogpost-link' href="to_be_done" target="_blank" rel="noopener noreferrer">link</a>.</p>

      
      <h2 className="subtitle">Privacy note</h2>
      <p>Your file is kept only during processing. Then, it is deleted.</p>
    </div>
  );
}

export default About;
