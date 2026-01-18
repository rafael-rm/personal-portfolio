import { Section } from '@/components/layout'
import { Card } from '@/components/ui'
import { useLanguage } from '@/context/LanguageContext'
import { projects } from '@/data/projects'
import type { TranslationKey } from '@/data/translations'
import styles from './Projects.module.css'

export function Projects() {
    const { t } = useLanguage()

    return (
        <Section id="projects" title={t('projects')}>
            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <Card key={project.id} className={styles.card} delay={index * 0.1}>
                        <div className={styles.header}>
                            <h3 className={styles.title}>{t(project.titleKey as TranslationKey)}</h3>
                        </div>
                        <p className={styles.description}>
                            {t(project.descriptionKey as TranslationKey)}
                        </p>
                        <div className={styles.footer}>
                            <div className={styles.technologies}>
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={tech}>
                                        <span className={styles.tech}>{tech}</span>
                                        {techIndex < project.technologies.length - 1 && (
                                            <span className={styles.tech}> • </span>
                                        )}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                GitHub
                                <svg
                                    className={styles.linkIcon}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </a>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    )
}
