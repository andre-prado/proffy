import React from 'react';

import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/49701005?s=460&u=cb66305bda191cf0ae43257153c0c176b020b50e&v=4" alt="André Prado"/>
            <div>
              <strong>André Prado</strong>
              <span>Química</span>
            </div>
          </header>

          <p>
            Entusiasta da melhores tecnologias de química avançada.
            <br/><br/>
            textotextotextotextotextotextotextotextotextotextotexto
          </p>
          <footer>
            <p>
              Preço/hora
              <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article> 
    )
}

export default TeacherItem;