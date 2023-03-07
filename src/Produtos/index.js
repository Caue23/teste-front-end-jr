import styles from './Produtos.module.scss';


export default function Produtos(){
    return(
        <div>
            <section className={styles.containerProdutos}>
                <h1 className={styles.produtos} >Produtos relacionados</h1>
                <ul className={styles.ListProdutos}>
                    <li>
                        <text>CELULAR</text>
                    </li>
                    <li>
                        <p>ACESSÓRIOS</p>
                    </li>
                    <li>
                        <p>TABLETS</p>
                    </li>
                    <li>
                        <p>NOTEBOOKS</p>
                    </li>
                    <li>
                        <p>TVS</p>
                    </li>
                    <li>
                        <p>VER TODOS</p>
                    </li>
                </ul>
            </section>
            <section>
            </section>
        </div>
    )
}