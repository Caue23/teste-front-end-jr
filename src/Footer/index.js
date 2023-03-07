import styles from './Footer.module.scss';


export default function Footer() {
  return (
    <div >
      <section className={styles.footer}>
        <ul>
          <h2>Sobre nós</h2>
          <li>
            <a href="#" >CONHEÇA</a>
          </li>
          <li>
            <a href="#" >COMO COMPRAR</a>

          </li>
          <li>
            <a href="#" >INDICAÇÃO E DESCONTO</a>
          </li>
          <li >
            <img className={styles.images} src="images/facebook.png" />
            <img className={styles.images} src="images/instagram.png" />
            <img className={styles.images} src="images/youtube.png" />
          </li>
        </ul>
        <ul>
          <h2>INFORMAÇÕES ÚTEIS</h2>
          <li>
            <a href="#" >FALE CONOSCO</a>
          </li>
          <li>
            <a href="#" >DÚVIDAS</a>

          </li>
          <li>
            <a href="#" >PRAZOS DE ENTREGA</a>
          </li>
          <li>
            <a href="#" >FORMAS DE PAGAMENTOS</a>
          </li>
          <li>
            <a href="#" >POLÍTICA DE PRIVACIDADE</a>
          </li>
          <li>
            <a href="#" >TROCAS E DEVOLUÇÕES</a>
          </li>

        </ul>
        <section className={styles.containerFormas}>
          <h2>FORMAS DE PAGAMENTO</h2>
          <ul className={styles.formas}>
            <li>
              <a href="#" ><img src='images/visa.png' /></a>
            </li>
            <li>
              <a href="#" ><img src='images/elo.png' /></a>

            </li>
            <li>
              <a href="#" ><img src='images/alelo.png' /></a>
            </li>
            <li>
              <a href="#" ><img src='images/dinners.png' /></a>
            </li>
            <li>
              <a href="#" ><img src='images/ifood.png' /></a>
            </li>
            <li>
              <a href="#" ><img src='images/mastercard.png' /></a>
            </li>
            <li>
              <a href="#" ><img src='images/pix.png' /></a>
            </li>
            <li>
              <a href="#" ><img src='images/amex.png' /></a>
            </li>
            <li>
              <a href="#" ><img src='images/ticket.png' /></a>
            </li>
            <li>
              <a href="#" ><img src='images/sodexo.png' /></a>
            </li>
          </ul>
        </section>
        <section className={styles.form}>
          <text>
            <h1>Cadastre-se e Receba nossas
              <p>novidades e promoções</p>
            </h1>
            <a>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</a>
          </text>
          <input type="email" placeholder="Seu e-mail" />
          <button type="submit">OK</button>
        </section>
      </section>
      <section className={styles.direitos}>
        <text>
          <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.
            É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
          <img src='images/econverse.png' />
          <img src='images/vtex_branco.png' />
        </text>
      </section>
    </div>
  )
}