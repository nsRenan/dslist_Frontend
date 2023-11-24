import styles from './home.module.css'
import Image from '../images/image.jpg'

function Home() {
    return (
        <section className={styles.home}>
            <div className={styles.imagem}>
                <img src={Image} className={styles.img} />
            </div>
            <div className={styles.apresentacao}>
                <p>DsList é um projeto de estudo que consiste em uma biblioteca de jogos</p>
            </div>
        </section>
    )
}

export default Home
