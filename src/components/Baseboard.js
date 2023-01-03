import React from 'react';
import { Link } from 'react-router-dom';

function Baseboard() {
  return (
    <div class="FOOTER">
    <footer>
      <p>This is a project i created to show and train my programming skills, using React and CSS, for more info contact me:</p>
      <a href="https://www.linkedin.com/in/vitor-sienna/">
      <img class="linkedin"  src={require('../images/linkedin3.png')}></img>
      </a>
    </footer>
    </div>
  );
}

export default Baseboard;