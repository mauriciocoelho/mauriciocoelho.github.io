import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>      
        <header id="home">
          <nav class="navbar">
            <div class="max-width">
                <div class="logo"><a href="#">Mauricio<span> Coelho</span></a></div>
                <ul class="menu">
                    <li><a href="#home" class="menu-btn">Home</a></li>
                    <li><a href="#about" class="menu-btn">Sobre</a></li>
                    <li><a href="#skills" class="menu-btn">Skills</a></li>
                    <li><a href="#contact" class="menu-btn">Contato</a></li>
                </ul>
                <div class="menu-btn">
                    <i class="fas fa-bars"></i>
                </div>
            </div>
          </nav>          
        </header>
      </React.Fragment>
    );
  }
}