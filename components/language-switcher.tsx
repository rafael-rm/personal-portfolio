"use client"

import {useLanguage} from "@/contexts/language-context"
import {Button} from "@/components/ui/button"
import {Globe} from "lucide-react"

export function LanguageSwitcher() {
    const {language, setLanguage, t} = useLanguage()

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "pt" : "en")
    }

    return (
        <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="rounded-full bg-slate-800/50 border-slate-700 text-slate-300 hover:text-white hover:border-emerald-500/50 hover:bg-slate-800 transition-all duration-300 flex items-center gap-2"
        >
            <Globe className="h-4 w-4"/>
            <span>{t("switch_to")}</span>
        </Button>
    )
}

