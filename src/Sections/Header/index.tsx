import styles from './index.module.css'
export default function Header() {
    return (
        <header className={styles.container}>
            <h1 className={styles.title}>Ian Speelman</h1>
            <div className={styles.links}>
                <a href='' className={styles.link} >Introduction</a>
                <a href='' className={styles.link} >Projects</a>
                <a href='' className={styles.link} >Education</a>
                <a href='' className={styles.link} >Contact</a>
            </div>
        </header>
    )
}
