import styles from './index.module.css'
import Link from '../../Components/Link/index'
import { icons } from '../../Utils/icons'

export default function Contact() {

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Contact</h2>
            <div className={styles.center}>
                <div className={styles.form}>
                    <label htmlFor="email">E-Mail:</label>
                    <input className={styles.input} type='text' id='email' placeholder='Enter E-Mail' />
                    <label htmlFor="message">Message:</label>
                    <textarea className={styles.input} rows={12} id='message' placeholder='Enter Message'></textarea>
                    <button className={styles.button}>Send!</button>
                </div>
                <div className={styles.line}>
                </div>
                <div className={styles.links}>
                    <Link text="IanSpeelman" link="http://github.com/ianspeelman" icon={icons.github.path} />
                    <Link text="Ian Speelman" link="https://www.linkedin.com/in/ian-speelman-6200aa132" icon={icons.linkedin.path} />
                    <Link text="Ianspeelman@gmail.com" link="mailto:ianspeelman@gmail.com" icon={icons.mail.path} />
                </div>
            </div>
        </div>
    )
}
