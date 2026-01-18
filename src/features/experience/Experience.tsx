import { motion } from 'framer-motion'
import { Section } from '@/components/layout'
import { useLanguage } from '@/context/LanguageContext'
import { experiences } from '@/data/experience'
import type { TranslationKey } from '@/data/translations'
import styles from './Experience.module.css'

export function Experience() {
    const { t } = useLanguage()

    return (
        <Section id="experience" title={t('experience')}>
            <div className={styles.timeline}>
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        className={styles.item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        <div className={styles.header}>
                            <h3 className={styles.title}>{t(exp.titleKey as TranslationKey)}</h3>
                            <span className={styles.company}>{t(exp.companyKey as TranslationKey)}</span>
                            <span className={styles.period}>{t(exp.periodKey as TranslationKey)}</span>
                        </div>
                        <p className={styles.description}>{t(exp.descriptionKey as TranslationKey)}</p>
                        <div className={styles.technologies}>
                            {exp.technologies.map((tech) => (
                                <span key={tech} className={styles.tech}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    )
}
