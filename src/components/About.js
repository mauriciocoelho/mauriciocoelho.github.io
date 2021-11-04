import React, { Component } from 'react';
export default class About extends Component {
  render() {
   return (
      <section class="about" id="about">
         <div class="max-width">
            <h2 class="title">Sobre</h2>
            <div class="about-content">
                <div class="column left">
                  <img className="profile-pic"  src="images/profile-1.jpg" alt="" />
                </div>
                <div class="column right">
                    <div class="text">Olá, eu sou Mauricio e sou <span class="typing-2"></span></div>
                    <p>Desenvolvedor Backend / PHP com alguns anos de experiência.</p><br/>
                    <p>Nos últimos anos, tenho trabalhado com foco em laravel e já entreguei alguns sites, de médio a grande porte, utilizando este framework.</p><br/>
                    <p>Confira meu conjunto de habilidades e expertises.</p>
                    <a href="curriculo.pdf" target="_blank">Download CV</a>
                </div>
            </div>
         </div>
      </section>
    );
  }
}