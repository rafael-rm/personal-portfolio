import { motion } from 'framer-motion'
import { Section } from '@/components/layout'
import { useLanguage } from '@/context/LanguageContext'
import { skillCategories } from '@/data/skills'
import type { TranslationKey } from '@/data/translations'
import styles from './Skills.module.css'

export function Skills() {
    const { t } = useLanguage()

    return (
        <Section id="skills" title={t('skills')}>
            <div className={styles.categories}>
                {skillCategories.map((category, categoryIndex) => (
                    <motion.div
                        key={category.titleKey}
                        className={styles.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                    >
                        <h3 className={styles.categoryTitle}>
                            {t(category.titleKey as TranslationKey)}
                        </h3>
                        <div className={styles.skills}>
                            {category.skills.map((skill, skillIndex) => (
                                <motion.span
                                    key={skill.name}
                                    className={styles.skill}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                                >
                                    {skill.name}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    )
}
