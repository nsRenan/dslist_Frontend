import styles from './home.module.css'
import ButtonHome from '../buttons/buttonHome'

function Home() {
    return (

        <section className={styles.home}>
            <div className={styles.apresentacao}>
                <span className={styles.title}>ENCONTRE SEU JOGO <span className={styles.h1text}>FAVORITO</span></span>
                <p className={styles.Desc}>O <span className={styles.h1text}>DsList</span> é um projeto de estudo que consiste em uma biblioteca de jogos, onde é possível cadastrar e listar seus jogos favoritos</p>
                <ButtonHome value="Explorar"/>
            </div>
        </section>
    )
}

export default Home
