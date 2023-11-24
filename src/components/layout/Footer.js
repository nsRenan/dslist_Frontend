import { FaLinkedin, FaGithub} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import styles from './Footer.module.css'

function Footer (){
    return(
        <footer class={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <SiGmail/>
                </li>
                <li>
                    <FaLinkedin/>
                </li>
                <li>
                    <FaGithub/>
                </li>
            </ul>
            <div className={styles.copy_right}>
            <p ><span>DsList</span> &copy; 2023</p>
            </div>
        </footer>
    )

}

export default Footer