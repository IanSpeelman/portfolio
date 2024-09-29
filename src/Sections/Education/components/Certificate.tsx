import Button from "../../../Components/Button"
import TagList from "../../../Components/TagList"
import { icons } from "../../../Utils/icons"
import { certificate } from '../../../Utils/types.ts'
import styles from './Certificate.module.css'

type certificateProps = {
    certificate: certificate
}

export default function Certificate({ certificate }: certificateProps) {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img className={styles.image} src={`../../src/Assets/${certificate.image}`} />
                <div className={styles.buttons}>
                    <Button link={certificate.certificate} text="Certificate" icon={icons.graduationCap.path} />
                    <Button link={certificate.website} text="Website" icon={icons.globe.path} />
                </div>
            </div>
            <div className={styles.right} >
                <h3 className={styles.title}>{certificate.title}</h3>
                <TagList tags={certificate.tags} />
                <p>{certificate.description}</p>
            </div>
        </div>
    )
}
