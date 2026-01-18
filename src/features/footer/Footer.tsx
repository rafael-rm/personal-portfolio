import { Container } from '@/components/layout'
import { useLanguage } from '@/context/LanguageContext'
import styles from './Footer.module.css'

export function Footer() {
    const { t } = useLanguage()

    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.content}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Rafael Rodrigues.{' '}
                        <span className={styles.accent}>{t('rights')}</span>
                    </p>
                    <p className={styles.builtWith}>{t('built_with')}</p>
                </div>
            </Container>
        </footer>
    )
}
