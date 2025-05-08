"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, Phone, Package } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-800 text-white dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo and description */}
          <div>
            <Link href="/" className="mb-4 flex items-center">
              <div className="relative h-12 w-12 overflow-hidden">
                <Image
                  src="/images/aioranje-logo-new.png"
                  alt="AIOranje Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="ml-2 text-2xl font-bold tracking-tight">
                <span className="text-[#FFA500]">AI</span>Oranje
              </span>
            </Link>
            <p className="mb-4 text-gray-300 dark:text-gray-400">{t("heroSubtitle")}</p>

            {/* Email button without redundant text */}
            <a
              href="mailto:info@aioranje.nl"
              className="inline-flex items-center rounded-md bg-[#FFA500] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#FFA500]/90 focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
            >
              <Mail className="mr-2 h-4 w-4" />
              {t("email")}
            </a>
          </div>

          {/* Rest of the columns remain unchanged */}
          {/* Column 2: Navigation */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("navigation")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 transition-colors hover:text-[#FFA500] dark:text-gray-400">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#products"
                  className="text-gray-300 transition-colors hover:text-[#FFA500] dark:text-gray-400"
                >
                  {t("products")}
                </Link>
              </li>
              <li>
                <Link
                  href="/over-ons"
                  className="text-gray-300 transition-colors hover:text-[#FFA500] dark:text-gray-400"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 transition-colors hover:text-[#FFA500] dark:text-gray-400"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("categories")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/categorie/kinderen"
                  className="text-gray-300 transition-colors hover:text-[#FFA500] dark:text-gray-400"
                >
                  {t("aiForChildren")}
                </Link>
              </li>
              <li>
                <Link
                  href="/categorie/jongeren"
                  className="text-gray-300 transition-colors hover:text-[#FFA500] dark:text-gray-400"
                >
                  {t("aiForTeens")}
                </Link>
              </li>
              <li>
                <Link
                  href="/categorie/volwassenen"
                  className="text-gray-300 transition-colors hover:text-[#FFA500] dark:text-gray-400"
                >
                  {t("aiForAdults")}
                </Link>
              </li>
              <li>
                <Link
                  href="/winkelwagen"
                  className="text-gray-300 transition-colors hover:text-[#FFA500] dark:text-gray-400"
                >
                  {t("cart")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Verzendbeleid en Contact */}
          <div>
            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold">{t("shippingPromise")}</h3>
              <div className="rounded-lg bg-gray-700/50 p-4 dark:bg-gray-800/50">
                <div className="mb-3 flex items-center">
                  <Package className="mr-2 h-5 w-5 text-[#FFA500]" />
                  <span className="font-medium text-[#FFA500]">{t("shippingPromise")}</span>
                </div>
                <p className="mb-3 text-sm text-gray-300 dark:text-gray-400">{t("shippingDays")}</p>
                <p className="text-sm text-gray-300 dark:text-gray-400">{t("shippingText")}</p>
              </div>
            </div>

            <h3 className="mb-4 text-lg font-semibold">{t("followUs")}</h3>
            <div className="mb-6 flex space-x-4">
              <a
                href="https://instagram.com/aioranje"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-white transition-colors hover:bg-[#FFA500] dark:bg-gray-800"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@aioranje.nl"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-white transition-colors hover:bg-[#FFA500] dark:bg-gray-800"
                aria-label="E-mail"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/31612345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-white transition-colors hover:bg-[#FFA500] dark:bg-gray-800"
                aria-label="WhatsApp"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 dark:border-gray-800">
          <div className="flex flex-col items-center justify-between space-y-4 text-sm text-gray-400 md:flex-row md:space-y-0">
            <p>{t("allRightsReserved")}</p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="hover:text-[#FFA500]">
                {t("privacyPolicy")}
              </Link>
              <Link href="/voorwaarden" className="hover:text-[#FFA500]">
                {t("termsConditions")}
              </Link>
              <Link href="/cookies" className="hover:text-[#FFA500]">
                {t("cookiePolicy")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
