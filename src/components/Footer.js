import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <span>Mauricio Rodrigues Coelho | <span class="far fa-copyright"></span> {(new Date().getFullYear())} todos os direitos reservados.</span>
      </footer>
    );
  }
}