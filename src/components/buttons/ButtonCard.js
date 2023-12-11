import styles from './ButtonCard.module.css'
import {Link} from 'react-router-dom'

function ButtonCard (props){
    return (
        <div className={styles.container}>
            <Link to='/Jogos'><button className={styles.btnCard}>{props.value}</button></Link>
        </div>
    )
}

export default ButtonCard