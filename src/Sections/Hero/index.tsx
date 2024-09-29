import profile_picture from '../../../src/Assets/profile_picture.jpg'
import Button from '../../Components/Button'
import styles from './index.module.css'
import { icons } from '../../Utils/icons'


export default function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <div className={styles.imagecontainer}>
                    <img className={styles.image} src={profile_picture} alt='Profile picture' />
                </div>
                <div className={styles.info}>
                    <div className={styles.title}>
                        <h2>Ian Speelman</h2>
                        <h3>{`Hi I'm`}</h3>
                    </div>
                    <p>A self-taught full-stack developer with a passion for creating dynamic and user-friendly digital experiences. Explore my portfolio to see how I can help bring your vision to life.</p>
                    <div className={styles.links}>
                        <Button text="IanSpeelman" link="http://github.com/ianspeelman" icon={icons.github.path} />
                        <Button text="Ian Speelman" link="https://www.linkedin.com/in/ian-speelman-6200aa132" icon={icons.linkedin.path} />
                        <Button text="Ianspeelman@gmail.com" link="mailto:ianspeelman@gmail.com" icon={icons.mail.path} />
                    </div>
                </div>


            </div>
        </div>
    )
}
