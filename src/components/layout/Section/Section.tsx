import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../Container'
import styles from './Section.module.css'

interface SectionProps {
    id?: string
    title?: string
    children: ReactNode
    className?: string
}

export function Section({ id, title, children, className = '' }: SectionProps) {
    return (
        <section id={id} className={`${styles.section} ${className}`}>
            <Container>
                {title && (
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.5 }}
                    >
                        {title}
                    </motion.h2>
                )}
                {children}
            </Container>
        </section>
    )
}
