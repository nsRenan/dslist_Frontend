import styles from './buttonHome.module.css'
import {Link} from 'react-router-dom'

function ButtonHome (props){
    return (
        <div>
            <Link to='/Jogos'><button className={styles.btnHome}>{props.value}</button></Link>
        </div>
    )
}

export default ButtonHome