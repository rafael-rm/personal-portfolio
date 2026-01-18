import { motion } from 'framer-motion'
import { Section } from '@/components/layout'
import { useLanguage } from '@/context/LanguageContext'
import styles from './About.module.css'

export function About() {
    const { t } = useLanguage()

    return (
        <Section id="about" title={t('about')}>
            <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className={styles.paragraph}>{t('about_p1')}</p>
                <p className={styles.paragraph}>{t('about_p2')}</p>
            </motion.div>
        </Section>
    )
}
