"use client"

import { useState, useEffect } from "react"
import { X, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { languageNames } from "@/lib/translations"

export default function LanguageNotification() {
  const { language, setLanguage } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [isAutoDetected, setIsAutoDetected] = useState(false)

  useEffect(() => {
    // Check if this is the first visit (no language in localStorage)
    const savedLanguage = localStorage.getItem("language")
    const isFirstVisit = !savedLanguage

    // If it's the first visit, we assume the language was auto-detected
    if (isFirstVisit) {
      setIsAutoDetected(true)
      setIsVisible(true)

      // Hide notification after 10 seconds
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 10000)

      return () => clearTimeout(timer)
    }
  }, [])

  if (!isVisible || !isAutoDetected) {
    return null
  }

  return (
    <div className="fixed bottom-20 left-4 z-40 max-w-sm rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <Globe className="h-5 w-5 text-[#FFA500]" />
        </div>
        <div className="ml-3 flex-1">
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            We hebben {languageNames[language]} als uw taal geselecteerd
          </p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Klik op de taalknop in de header om dit te wijzigen.
          </p>
          <div className="mt-2 flex">
            <button
              onClick={() => setIsVisible(false)}
              className="rounded-md bg-[#FFA500] px-2 py-1.5 text-xs font-medium text-white hover:bg-[#FFA500]/90"
            >
              OK
            </button>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 flex-shrink-0 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
        >
          <span className="sr-only">Sluiten</span>
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
