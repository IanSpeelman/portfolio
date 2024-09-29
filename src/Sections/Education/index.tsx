import styles from './index.module.css'
import { certificates } from '../../Data/Certificates'
import Certificate from './components/Certificate'

export default function Education() {


    let count = certificates.length
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Projects</h2>
            {certificates.map(certificate => {
                count--
                return (
                    <div key={count}>
                        <Certificate certificate={certificate} />
                        {count ? <div className={styles.line}></div> : ""}
                    </div>
                )
            })}
        </div>
    )

}
