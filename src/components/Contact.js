import React, { Component } from 'react';
export default class Contact extends Component {
  render() {
    return (
        <section class="contact" id="contact">
            <div class="max-width">
                <h2 class="title">Contato</h2>
                <div class="contact-content">
                    <div class="column">
                    <p></p>
                    <div class="icons">
                        <div class="row">
                            <i class="fas fa-user"></i>
                            <div class="info">
                                <div class="head">Nome</div>
                                <div class="sub-title">Mauricio Rodrigues Coelho</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="info">
                                <div class="head">Fone</div>
                                <div class="sub-title">(63)9 8464-5307</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-envelope"></i>
                            <div class="info">
                                <div class="head">Email</div>
                                <div class="sub-title">maudrico9@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column right">
                    <div class="text">Contacte me</div>
                        <form action="#">
                            <div class="fields">
                                <div class="field name">
                                    <input type="text" placeholder="Nome" required/>
                                </div>
                                <div class="field email">
                                    <input type="email" placeholder="Email" required/>
                                </div>
                            </div>
                            <div class="field">
                                <input type="text" placeholder="Assunto" required/>
                            </div>
                            <div class="field textarea">
                                <textarea cols="30" rows="10" placeholder="Mensagem.." required></textarea>
                            </div>
                            <div class="button-area">
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}