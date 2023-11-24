import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../components/images/dsLogo.svg'

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'>
                <img className={styles.logo} src={logo}/>
                </Link>   
                <ul className={styles.list}>
                    <li className={styles.item}>
                    <Link to='/categorias'>Categorias</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to='/jogos'>Listar Jogos</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to='/cadastro'>Cadastrar Jogo</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to='/editar'>Modificar Jogo</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar