import React from 'react';
import './styles.css';
import landingImage from './assets/landing-image.svg';

export default function App() {
  return (
    <div className="landingPage">
      <div className="header">
        <div className="divTitle">
          <h1 className="title">Networking <span className="register">®</span></h1>
        </div>
        <div className="divButton">
          <button className="buttonLogin">
            <label className="buttonLoginName">Login</label>
          </button>
        </div>
      </div>
      <div className="content">
        <div className="contentTextArea">
          <div className="contentText">
            <p className="h1">Sua carreira</p>
            <br/>
            <p className="h2">em apenas um click.</p>
            <br/>
            <p className="h3">Junte-se a milhões de pessoas que alcançaram seus objetivos em uma única rede.</p>
          </div>
          <div className="contentButton">
            <button className="buttonContent">
              <label className="buttonContentName">Iniciar</label>
            </button>
          </div>
        </div>
        <div className="contentImage">
          <img width={600} src={landingImage} alt="" />
          <p className="hashtag">#NetworkingBrasil</p>
        </div>
      </div>
      <div className="footer">
        <h4 className="textFooter">Networking - Expansion Week (por Matheus Martins)</h4>
      </div>
    </div>
  );
}