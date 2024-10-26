import styles from './index.module.css'

type ButtonProps = {
    text: string,
    link: string,
    icon: string | null,
}

export default function Button({ text, link, icon }: ButtonProps) {
    if (!link) return
    return <a target='_blank' className={styles.link} href={link}>
        <svg width="0" height="0">
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#CE75C6" />
                    <stop offset="100%" stopColor="#9F90E0" />
                </linearGradient>
            </defs>
        </svg>
        {icon && <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d={icon} fill="url(#gradient)" />
        </svg>
        }
        <p className={styles.text}>{text}</p>
    </a>
}
