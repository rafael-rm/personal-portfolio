import type { ReactNode } from 'react'
import styles from './Badge.module.css'

interface BadgeProps {
    children: ReactNode
    icon?: ReactNode
    variant?: 'default' | 'skill'
    className?: string
}

export function Badge({ children, icon, variant = 'default', className = '' }: BadgeProps) {
    return (
        <span className={`${styles.badge} ${variant === 'skill' ? styles.skill : ''} ${className}`}>
            {icon && <span className={styles.icon}>{icon}</span>}
            {children}
        </span>
    )
}
