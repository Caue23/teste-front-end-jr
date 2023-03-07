import Produtos from '../Produtos/index';
import Carousel from '../CarouselProd/index';
import CarouselMarcas from '../CarouselMarcas/index';
import Footer from '../Footer/index';
import styles from './Desconto.module.scss';


export default function Desconto() {
  return (
    <div className={styles.container}>
      <section className={styles.content}>
        <h1>Venha conhecer nossas promoções</h1>
        <text>50% Off nos produtos </text>
        <button>Ver produto</button>
      </section>
      <section className={styles.contentList}>
        <ul className={styles.list}>
          <li>
            <span>
              <img src="images/monitorar-tablet-e-smartohone.png" />
            </span>
            <p>Tecnologia</p>
          </li>
          <li>
            <span>
              <img src="images/supermercados.png" />
            </span>
            <a>Supermercado</a>
          </li>
          <li>
            <span>
              <img src="images/whiskey.png" />
            </span>
            <a>Bebidas</a>
          </li>
          <li>
            <span>
              <img src="images/ferramentas.png" />
            </span>
            <a>Ferramentas</a>
          </li>
          <li>
            <span>
              <img src="images/cuidados-de-saude.png" />
            </span>
            <a>Saúde</a>
          </li>
          <li>
            <span>
              <img src="images/corrida.png" />
            </span>
            <a>Esportes e Fitness</a>
          </li>
          <li>
            <span>
              <img src="images/moda.png" />
            </span>
            <a>Moda</a>
          </li>
        </ul>
      </section>
      <Produtos />
      <Carousel />
      <section className={styles.parceiros}>
        <span >
          <text>
            <h1>Parceiros</h1>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button>Confira</button>
          </text>
        </span>
        <section >
          <span>
            <text>
              <h1>Parceiros</h1>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
              <button>Confira</button>
            </text>
          </span>
        </section>
      </section>
      <section className={styles.titleProdutos}>
        <h1>Produtos relacionados</h1>
        <p>Ver todos</p>
      </section>
      <Carousel />
      <section className={styles.parceiros}>
        <span >
          <text>
            <h1>Produtos</h1>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button>Confira</button>
          </text>
        </span>
        <section>
          <span>
            <text>
              <h1>Produtos</h1>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
              <button>Confira</button>
            </text>
          </span>
        </section>
      </section>
      <CarouselMarcas />
      <section className={styles.titleProdutos}>
        <h1>Produtos relacionados</h1>
        <p>Ver todos</p>
      </section>
      <Carousel />
      <Footer />
    </div>
  )
}