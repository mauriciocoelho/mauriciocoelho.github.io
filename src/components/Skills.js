import React, { Component } from 'react';
export default class Skills extends Component {
  render() {
    return (
      <section class="skills" id="skills">
        <div class="max-width">
            <h2 class="title">Minhas skills</h2>
            <div class="skills-content">
                <div class="column left">
                    <div class="text">Minhas habilidades e experiências criativas.</div>
                    <p>Laravel, e muito mais, HTML5, CSS e SCSS / LESS, Bootstrap 3/4, Javascript, jQuery, Docker e Git.</p>
                    
                </div>
                <div class="column right">
                    <div class="bars">
                        <div class="info">
                            <span>HTML</span>
                            <span>90%</span>
                        </div>
                        <div class="line html"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>CSS</span>
                            <span>60%</span>
                        </div>
                        <div class="line css"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>JavaScript</span>
                            <span>80%</span>
                        </div>
                        <div class="line js"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>PHP</span>
                            <span>90%</span>
                        </div>
                        <div class="line php"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>Laravel</span>
                            <span>90%</span>
                        </div>
                        <div class="line laravel"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>MySQL</span>
                            <span>70%</span>
                        </div>
                        <div class="line mysql"></div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
  }
}