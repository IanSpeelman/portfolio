import { useState } from 'react'
import styles from './index.module.css'
export default function Header() {
    const [expanded, setExpanded] = useState(false)

    return (
        <>
            <header className={styles.desktop}>
                <a href='#introduction' className={styles.titlelink} ><h1 className={styles.title}>Ian Speelman</h1></a>
                <div className={styles.links}>
                    <a href='#introduction' className={styles.link} >Introduction</a>
                    <a href='#projects' className={styles.link} >Projects</a>
                    <a href='#education' className={styles.link} >Education</a>
                    <a href='#contact' className={styles.link} >Contact</a>
                </div>
            </header>
            <header className={styles.mobile}>
                <a href='#introduction' className={styles.titlelink} ><h1 className={styles.title}>Ian Speelman</h1></a>
                <div className={`${styles.linksmobile} ${expanded && styles.expanded}`} onClick={() => setExpanded(false)}>
                    <a href='#introduction' className={styles.mobilelink} >Introduction</a>
                    <a href='#projects' className={styles.mobilelink} >Projects</a>
                    <a href='#education' className={styles.mobilelink} >Education</a>
                    <a href='#contact' className={styles.mobilelink} >Contact</a>
                </div>
                <div className={styles.hamburger} onClick={() => setExpanded(!expanded)}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg></div>
            </header>
        </>
    )
}
