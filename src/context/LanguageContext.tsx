import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { translations, type Language, type TranslationKey } from '@/data/translations'

interface LanguageContextType {
    language: Language
    setLanguage: (language: Language) => void
    t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language | null>(null)

    useEffect(() => {
        const getDefaultLanguage = (): Language => {
            if (typeof window === 'undefined') return 'en'
            const savedLanguage = localStorage.getItem('language') as Language | null
            if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'pt')) {
                return savedLanguage
            }
            const browserLanguage = navigator.language.split('-')[0]
            return browserLanguage === 'pt' ? 'pt' : 'en'
        }
        setLanguageState(getDefaultLanguage())
    }, [])

    const setLanguage = (newLanguage: Language) => {
        setLanguageState(newLanguage)
        localStorage.setItem('language', newLanguage)
    }

    const t = (key: TranslationKey): string => {
        if (!language) return ''
        return translations[language][key] || key
    }

    if (!language) {
        return null
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}
