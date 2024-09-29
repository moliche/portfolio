import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Description = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPressed, setisPressed] = useState(false)

  const handleClick = () => {
    
    setIsVisible(!isVisible);
    setisPressed(!isPressed)
  };

  return (
    <div className="tag-cmp app__flex" id='home-desc'>
      <h3 className=''>About Me</h3>

      <motion.p 
        className="p-text" 
        id="home-desc-paragraph"
        initial={{ opacity: 0, height: 0 }} 
        animate={{ opacity: isVisible ? 1 : 0, height: isVisible ? 'auto' : 2 }} 

      >
         I am a highly motivated, competitive and skilled student from Venezuela, currently majoring in computer science with a minor in data science at the University of Colorado Boulder. I created this website to display my passion for programming and the diverse skills I have acquired throughout my journey. Here, you can find a variety of projects I have worked on, demonstrating my expertise in a range of programming languages and technologies.
        I am always eager to collaborate with others and learn new things. If you are impressed with my work and interested in collaborating, please do not hesitate to contact me. I am confident that my skills and enthusiasm would be a valuable asset to your team.
      </motion.p>


      <motion.button 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }} 
        className="arrow-button" 
        onClick={handleClick}
        
      >

        {!isPressed ? ('⌄'):('^')} 
    
      </motion.button>
    </div>
  );
};


export default Description;


