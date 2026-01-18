import { motion } from 'framer-motion'
import { Section } from '@/components/layout'
import { Button } from '@/components/ui'
import { useLanguage } from '@/context/LanguageContext'
import styles from './Contact.module.css'

export function Contact() {
    const { t } = useLanguage()

    return (
        <Section id="contact" title={t('contact')} className={styles.contact}>
            <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
            >
                <p className={styles.text}>{t('contact_text')}</p>
                <Button
                    as="a"
                    href="https://www.linkedin.com/in/rafael-rodrigues-monteiro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                    className={styles.button}
                >
                    {t('contact_btn')}
                </Button>
            </motion.div>
        </Section>
    )
}
