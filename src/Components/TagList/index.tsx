import styles from './index.module.css'
type TagListProps = {
    tags: string
}


export default function TagList({ tags }: TagListProps) {

    const taglist = tags.split(",")


    return (
        <div className={styles.container}>
            {taglist.map((tag: string) => <p className={styles.tag} key={tag}>{tag}</p>)}
        </div>
    )
}
