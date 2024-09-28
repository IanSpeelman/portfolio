import Button from "../../../Components/Button"
import TagList from "../../../Components/TagList"
import { icons } from "../../../Utils/icons"
import { project } from "../../../Utils/types"
import styles from './Project.module.css'

type projectProps = {
    project: project
}

export default function Project({ project }: projectProps) {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img className={styles.image} src={`../../../Assets/Projects/${project.image}`} />
                <div className={styles.buttons}>
                    <Button link={project.github} text="Github" icon={icons.github.path} />
                    <Button link={project.demo} text="Live Demo" icon={icons.globe.path} />
                </div>
            </div>
            <div className={styles.right} >
                <h3 className={styles.title}>{project.title}</h3>
                <TagList tags={project.tags} />
                <p>{project.description}</p>
            </div>
        </div>
    )
}
