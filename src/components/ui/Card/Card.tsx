import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import styles from './Card.module.css'

interface CardProps {
    children: ReactNode
    className?: string
    onClick?: () => void
    delay?: number
}

export function Card({ children, className = '', onClick, delay = 0 }: CardProps) {
    return (
        <motion.div
            className={`${styles.card} ${onClick ? styles.clickable : ''} ${className}`}
            onClick={onClick}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay }}
        >
            {children}
        </motion.div>
    )
}

interface CardHeaderProps {
    title: string
    subtitle?: string
    action?: ReactNode
}

export function CardHeader({ title, subtitle, action }: CardHeaderProps) {
    return (
        <div className={styles.header}>
            <div>
                <h3 className={styles.title}>{title}</h3>
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>
            {action}
        </div>
    )
}

export function CardDescription({ children }: { children: ReactNode }) {
    return <p className={styles.description}>{children}</p>
}

export function CardTags({ children }: { children: ReactNode }) {
    return <div className={styles.tags}>{children}</div>
}

export function CardActions({ children }: { children: ReactNode }) {
    return <div className={styles.actions}>{children}</div>
}
