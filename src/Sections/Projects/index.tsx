import Project from './components/Project'
import styles from './index.module.css'
import { projects } from '../../Data/Projects'

export default function Projects() {

    let count = projects.length
    return (
        <div className={styles.container} id='projects'>
            <h2 className={styles.title}>Projects</h2>
            {projects.map(project => {
                count--
                return (
                    <div key={count}>
                        <Project project={project} />
                        {count ? <div className={styles.line}></div> : ""}
                    </div>
                )
            })}
        </div>
    )
}
