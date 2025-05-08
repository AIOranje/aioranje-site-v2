"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Globe, ChevronDown } from "lucide-react"
import ThemeToggle from "./theme-toggle"
import { useLanguage } from "@/contexts/language-context"
import { type Language, languageNames } from "@/lib/translations"

// Vlag componenten
const DutchFlag = () => (
  <svg className="h-4 w-6 rounded-sm" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
    <g fillRule="evenodd" strokeWidth="1pt">
      <rect width="640" height="160" fill="#ae1c28" />
      <rect width="640" height="160" y="160" fill="#fff" />
      <rect width="640" height="160" y="320" fill="#21468b" />
    </g>
  </svg>
)

const UKFlag = () => (
  <svg className="h-4 w-6 rounded-sm" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
    <path fill="#012169" d="M0 0h640v480H0z" />
    <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z" />
    <path
      fill="#C8102E"
      d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"
    />
    <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z" />
    <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" />
  </svg>
)

const GermanFlag = () => (
  <svg className="h-4 w-6 rounded-sm" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
    <path fill="#ffce00" d="M0 320h640v160H0z" />
    <path d="M0 0h640v160H0z" />
    <path fill="#d00" d="M0 160h640v160H0z" />
  </svg>
)

const FrenchFlag = () => (
  <svg className="h-4 w-6 rounded-sm" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#00267f" d="M0 0h213.3v480H0z" />
      <path fill="#f31830" d="M426.7 0H640v480H426.7z" />
    </g>
  </svg>
)

const SpanishFlag = () => (
  <svg className="h-4 w-6 rounded-sm" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
    <path fill="#c60b1e" d="M0 0h640v480H0z" />
    <path fill="#ffc400" d="M0 120h640v240H0z" />
  </svg>
)

const ItalianFlag = () => (
  <svg className="h-4 w-6 rounded-sm" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#009246" d="M0 0h213.3v480H0z" />
      <path fill="#ce2b37" d="M426.7 0H640v480H426.7z" />
    </g>
  </svg>
)

const PolishFlag = () => (
  <svg className="h-4 w-6 rounded-sm" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
    <g fillRule="evenodd">
      <path fill="#fff" d="M640 480H0V0h640z" />
      <path fill="#dc143c" d="M640 480H0V240h640z" />
    </g>
  </svg>
)

const SwedishFlag = () => (
  <svg className="h-4 w-6 rounded-sm" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
    <path fill="#006aa7" d="M0 0h640v480H0z" />
    <path fill="#fecc00" d="M0 192h640v96H0z" />
    <path fill="#fecc00" d="M176 0h96v480h-96z" />
  </svg>
)

// Map van taalcodes naar vlagcomponenten
const flagComponents: Record<Language, React.FC> = {
  nl: DutchFlag,
  en: UKFlag,
  de: GermanFlag,
  fr: FrenchFlag,
  es: SpanishFlag,
  it: ItalianFlag,
  pl: PolishFlag,
  sv: SwedishFlag,
}

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [cartItems, setCartItems] = useState(0)
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Huidige vlag component op basis van geselecteerde taal
  const CurrentFlag = flagComponents[language]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (languageMenuOpen && !target.closest("button") && !target.closest("a")) {
        setLanguageMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [languageMenuOpen])

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
    setLanguageMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-12 overflow-hidden">
            <Image
              src="/images/aioranje-logo-new.png"
              alt="AIOranje Logo"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <span className="ml-2 text-2xl font-bold tracking-tight text-[#333] dark:text-white">
            <span className="text-[#FFA500]">AI</span>Oranje
          </span>
        </Link>

        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-8">
            <li>
              <Link
                href="/"
                className="text-[#333] transition-colors hover:text-[#FFA500] dark:text-gray-200 dark:hover:text-[#FFA500]"
              >
                {t("home")}
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-[#333] transition-colors hover:text-[#FFA500] dark:text-gray-200 dark:hover:text-[#FFA500]"
              >
                {t("contact")}
              </Link>
            </li>
            <li className="relative">
              <button
                className="flex items-center text-[#333] transition-colors hover:text-[#FFA500] dark:text-gray-200 dark:hover:text-[#FFA500]"
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                aria-expanded={languageMenuOpen}
                aria-haspopup="true"
              >
                <Globe className="mr-1 h-4 w-4" />
                <span className="mr-1.5 flex items-center">
                  <CurrentFlag />
                </span>
                <span>{languageNames[language]}</span>
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>

              {languageMenuOpen && (
                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 dark:ring-gray-700">
                  {(Object.keys(languageNames) as Language[]).map((lang) => {
                    const FlagComponent = flagComponents[lang]
                    return (
                      <button
                        key={lang}
                        onClick={() => handleLanguageChange(lang)}
                        className={`flex w-full items-center px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700/50 ${
                          language === lang ? "border-l-2 border-[#FFA500] bg-gray-50 dark:bg-gray-700/50" : ""
                        }`}
                      >
                        <span className="mr-3 flex items-center">
                          <FlagComponent />
                        </span>
                        <span>{languageNames[lang]}</span>
                      </button>
                    )
                  })}
                </div>
              )}
            </li>
            <li>
              <Link
                href="/winkelwagen"
                className="flex items-center text-[#333] transition-colors hover:text-[#FFA500] dark:text-gray-200 dark:hover:text-[#FFA500]"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FFA500] text-xs font-medium text-white">
                  {cartItems}
                </span>
              </Link>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>

        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Link href="/winkelwagen" className="ml-4 mr-4 flex items-center text-gray-700 dark:text-gray-200">
            <ShoppingCart className="h-5 w-5" />
            <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FFA500] text-xs font-medium text-white">
              {cartItems}
            </span>
          </Link>

          <button
            className="flex flex-col space-y-1.5 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={t("openMenu")}
          >
            <span className="h-0.5 w-6 bg-[#333] dark:bg-white"></span>
            <span className="h-0.5 w-6 bg-[#333] dark:bg-white"></span>
            <span className="h-0.5 w-6 bg-[#333] dark:bg-white"></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div id="mobile-menu" className={`${mobileMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="container mx-auto space-y-1 px-4 pb-3 pt-2">
          <Link
            href="/"
            className="block py-2 text-[#333] transition-colors hover:text-[#FFA500] dark:text-gray-200 dark:hover:text-[#FFA500]"
          >
            {t("home")}
          </Link>
          <Link
            href="/contact"
            className="block py-2 text-[#333] transition-colors hover:text-[#FFA500] dark:text-gray-200 dark:hover:text-[#FFA500]"
          >
            {t("contact")}
          </Link>
          <div className="py-2">
            <button
              className="flex items-center text-[#333] transition-colors hover:text-[#FFA500] dark:text-gray-200 dark:hover:text-[#FFA500]"
              onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
            >
              <Globe className="mr-1 h-4 w-4" />
              <span className="mr-1.5 flex items-center">
                <CurrentFlag />
              </span>
              <span>{t("language")}</span>
              <ChevronDown className="ml-1 h-3 w-3" />
            </button>

            {languageMenuOpen && (
              <div className="mt-2 space-y-1 pl-6">
                {(Object.keys(languageNames) as Language[]).map((lang) => {
                  const FlagComponent = flagComponents[lang]
                  return (
                    <button
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                      className={`flex w-full items-center px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700/50 ${
                        language === lang ? "border-l-2 border-[#FFA500] bg-gray-50 dark:bg-gray-700/50" : ""
                      }`}
                    >
                      <span className="mr-3 flex items-center">
                        <FlagComponent />
                      </span>
                      <span>{languageNames[lang]}</span>
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
