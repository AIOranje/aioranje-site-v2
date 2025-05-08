"use client"

import React from "react"

import Link from "next/link"
import { Instagram } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function NewProductsSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-white py-16 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg">
          <div className="p-8 text-white">
            <div className="mb-6 flex items-center">
              <span className="mr-3 text-3xl">📦</span>
              <h2 className="text-2xl font-bold sm:text-3xl">{t("newProductsMonthly")}</h2>
            </div>

            <div className="mb-8 space-y-4 text-lg">
              <p>
                {t("innovationText")
                  .split("\n")
                  .map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < t("innovationText").split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
              </p>

              <p>
                ✉️ {t("noNewsletters")}
                <br />📲 {t("stayUpdated")}
              </p>

              <p className="font-medium">
                <strong>{t("followInstagram")}</strong>
              </p>

              <p>➡️ {t("discoverLaunches")}</p>
            </div>

            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
              <Link
                href="https://www.instagram.com/aioranje/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-medium text-orange-600 transition-colors hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"
              >
                <Instagram className="mr-2 h-5 w-5" />
                <span>{t("followOnInstagram")}</span>
              </Link>
              <Link
                href="/nieuwe-producten"
                className="flex items-center justify-center rounded-full border-2 border-white bg-transparent px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"
              >
                <span>{t("viewNewProducts")}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
