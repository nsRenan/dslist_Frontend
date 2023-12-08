import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Header.module.css'

function Header(){
    return(
        <nav className={styles.navbar}>
            <Container>
                <ul className={styles.list}>
                    <li className={styles.item}>
                    <Link to='/'>Início</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to='/jogos'>Jogos</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to='/cadastro'>Cadastrar</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Header