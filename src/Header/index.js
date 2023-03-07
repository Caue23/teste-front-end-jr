import styles from './Header.module.scss';


export default function Header() {
    return (
        <div className={styles.container}>
            <section className={styles.content}>
                <ul className={styles.list}>
                    <span>
                    <li>
                        <img src='images/ShieldCheck.png' />
                        <text>
                            <p>Compra<a>100% segura</a></p>
                        </text>
                    </li>
                    <li>
                        <img src='images/Truck.png' />
                        <text>
                            <span>Frete grátis<p>acima de R$200,00</p></span>
                        </text>
                    </li>
                    <li>
                        <img src='images/CreditCard.png' />
                        <text>
                            <span>Parcele<p>suas compras</p></span>
                        </text>
                    </li>

                    </span>
                </ul>
            </section>
            <section className={styles.search}>
                <span>
                <img src='images/vtex.png'/>
                </span>
                <input type="search" placeholder="o que você esta buscando"/>
                <img src='images/caixa.png'/>
                <img src='images/Heart.png'/>
                <img src='images/UserCircle.png'/>
                <img src='images/ShoppingCart.png'/>
            </section>
            <section className={styles.categories} >
                <ul >
                    <li>
                        <p>TODAS CATEGORIAS</p>
                    </li>
                    <li>
                        <p>SUPERMERCADO</p>
                    </li>
                    <li>
                        <p>LIVROS</p>
                    </li>
                    <li>
                        <p>MODA</p>
                    </li>
                    <li>
                        <p>LANÇAMENTOS</p>
                    </li>
                    <li>
                        <a>OFERTAS DO DIA</a>
                    </li>
                    <li>
                        <img src='images/CrownSimple.png' />
                        <p>ASSINATURA</p>
                    </li>
                </ul>
            </section>
        </div>
    )
}