"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Language, translations, type TranslationKey } from "@/lib/translations"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Wijzig de useState initializer om altijd met Nederlands te beginnen
  const [language, setLanguage] = useState<Language>("nl")

  // Laad de taal uit localStorage of detecteer op basis van IP
  useEffect(() => {
    // Pas de loadLanguage functie aan om prioriteit te geven aan Nederlands
    const loadLanguage = async () => {
      // First check if there's a saved language preference
      const savedLanguage = localStorage.getItem("language") as Language

      if (savedLanguage && Object.keys(translations).includes(savedLanguage)) {
        // If there's a saved preference, use that
        setLanguage(savedLanguage)
      } else {
        // Anders altijd Nederlands gebruiken
        setLanguage("nl")
        // Save the language to localStorage
        localStorage.setItem("language", "nl")
      }
    }

    loadLanguage()
  }, [])

  // Sla de taal op in localStorage wanneer deze verandert
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Vertaalfunctie
  const t = (key: TranslationKey): string => {
    return translations[language][key]
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

// Hook om de taal te gebruiken in componenten
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
