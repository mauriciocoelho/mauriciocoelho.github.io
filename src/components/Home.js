import React, { Component } from 'react';
export default class Home extends Component {
  render() {
    return (
        <section class="home" id="home">
            <div class="max-width">
                <div class="home-content">
                    <div class="text-1">Olá, meu nome é</div>
                    <div class="text-2">Mauricio Coelho</div>
                    <div class="text-3">e sou <span class="typing"></span></div>
                </div>
            </div>
        </section>
    );
  }
}