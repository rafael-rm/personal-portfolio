import { useState, useEffect } from 'react'
import { Container } from '@/components/layout'
import { useLanguage } from '@/context/LanguageContext'
import styles from './Header.module.css'

const navItems = [
    { key: 'nav_about', href: '#about' },
    { key: 'nav_skills', href: '#skills' },
    { key: 'nav_experience', href: '#experience' },
    { key: 'nav_projects', href: '#projects' },
    { key: 'nav_contact', href: '#contact' },
] as const

export function Header() {
    const { language, setLanguage, t } = useLanguage()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'pt' : 'en')
    }

    const handleNavClick = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
            <Container>
                <div className={styles.inner}>
                    <a href="#" className={styles.logo}>
                        Rafael<span className={styles.logoAccent}>.</span>
                    </a>

                    <nav className={styles.nav}>
                        <ul className={styles.navLinks}>
                            {navItems.map((item) => (
                                <li key={item.key}>
                                    <a href={item.href} className={styles.navLink}>
                                        {t(item.key)}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <button className={styles.langButton} onClick={toggleLanguage}>
                            {language === 'en' ? 'PT' : 'EN'}
                        </button>

                        <button
                            className={styles.mobileMenuButton}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                                {isMobileMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </nav>
                </div>

                {isMobileMenuOpen && (
                    <nav className={styles.mobileMenu}>
                        {navItems.map((item) => (
                            <a
                                key={item.key}
                                href={item.href}
                                className={styles.navLink}
                                onClick={handleNavClick}
                            >
                                {t(item.key)}
                            </a>
                        ))}
                        <button className={styles.langButton} onClick={toggleLanguage}>
                            {t('switch_to')}
                        </button>
                    </nav>
                )}
            </Container>
        </header>
    )
}
