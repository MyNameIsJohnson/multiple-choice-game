import styled, { createGlobalStyle } from "styled-components";
<<<<<<< HEAD
=======
import BGImage from "./images/nattu-adnan-unsplash.jpg";
>>>>>>> 5a4cc287be177f2ba35e975e617f5716db351705

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
<<<<<<< HEAD
    background-image: url('/images/gif.gif');
    // background-image: url('/images/giphy.gif');
    // background-image: url('/images/walls.gif');
    background-size: 100% 100%;
    background-repeat: no-repeat;
=======
    background-size: cover;
>>>>>>> 5a4cc287be177f2ba35e975e617f5716db351705
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
<<<<<<< HEAD
  
=======

  > p {
    color: #fff;
  }

  .score {
    color: black;
    font-size: 2rem;
    margin: 0;
  }

>>>>>>> 5a4cc287be177f2ba35e975e617f5716db351705
  h1 {
    font-family: Fascinate Inline;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
<<<<<<< HEAD
    font-size: 50px;
=======
    font-size: 70px;
>>>>>>> 5a4cc287be177f2ba35e975e617f5716db351705
    text-align: center;
    margin: 20px;
  }

<<<<<<< HEAD
  > p {
    color: #fff;
  }

  .score {
    color: white;
    width: 200px;
    text-align: center;
    font-size: 2rem;
    border-radius: 20px;
    border: 1px solid rgba(0 212 255); 
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    margin: 0;
  }

=======
>>>>>>> 5a4cc287be177f2ba35e975e617f5716db351705
  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
<<<<<<< HEAD

  #svg-spinner{
    margin: 50px;
    height: 200px;
    width: 200px;
    -webkit-transition-property: -webkit-transform;
    -webkit-transition-duration: 1.2s;
    -webkit-animation-name: rotate;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    
    -moz-transition-property: -moz-transform;
    -moz-animation-name: rotate; 
    -moz-animation-duration: 1.2s; 
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
    
    transition-property: transform;
    animation-name: rotate; 
    animation-duration: 1.2s; 
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  
  @-webkit-keyframes rotate {
      from {-webkit-transform: rotate(0deg);}
      to {-webkit-transform: rotate(360deg);}
  }
  
  @-moz-keyframes rotate {
      from {-moz-transform: rotate(0deg);}
      to {-moz-transform: rotate(360deg);}
  }
  
  @keyframes rotate {
      from {transform: rotate(0deg);}
      to {transform: rotate(360deg);}
  }  
=======
>>>>>>> 5a4cc287be177f2ba35e975e617f5716db351705
`;
