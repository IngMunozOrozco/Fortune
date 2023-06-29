import './Fortune.css';
import React, { useEffect, useState } from 'react';
import UserCard from './components/UserCard';
import FortuneCookie from './components/FortuneCookie';
import './App.css';
import phrases from './data/phrases.json';
import './snow.css';

const App = () => {
  const colors = [
    "#FDB137",
    "#785964",
    "#6D6875",
    "#B5838D",
    "#E5989B",
    "#7E9680",
    "#C73866",
    "#FFB4A2",
    "#79616F",
    "#EAB595"
  ];
 
  
  const [index, setIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const changeUser = () => {
    separateHalves();

    const randomIndex = Math.floor(Math.random() * phrases.length);
    const randomImageIndex = Math.floor(Math.random() * phrases.length);

    setIndex(randomIndex);
    setImageIndex(randomImageIndex);
  };
  
  useEffect(() => {
    document.body.style.backgroundColor = colors[index];
  }, [index]);

  const separateHalves = () => {
    var leftHalf = document.getElementById('leftHalf');
    var rightHalf = document.getElementById('rightHalf');

    leftHalf.classList.add('left-separated');
    rightHalf.classList.add('separated');
  };
 

  return (
    <>
   
    
    <div className='image-background'>
    
        <img src={phrases[imageIndex].image} alt="" />
      </div>
    

     

      <div className="fortune-cookie">
      
        <div className="cookie-wrapper">
          <img id="leftHalf" src="galleta1.png" alt="Mitad izquierda" />
          <img id="rightHalf" src="galleta2.png" alt="Mitad derecha" />
        </div>
        <button onClick={changeUser}>
        
          <i className='bx bx-cookie'>Open Cookie</i>
        </button>
      </div>

      
      <UserCard data={phrases[index]} textColor={colors[index]} />
      
      <div class="tpl-snow">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
  </div>
    </>
    
  );
};

export default App;