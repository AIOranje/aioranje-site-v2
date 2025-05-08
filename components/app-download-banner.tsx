"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function AppDownloadBanner() {
  const { t } = useLanguage()

  return (
    <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-4 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <h2 className="mb-1 text-xl font-bold sm:text-2xl">{t("downloadApp")}</h2>
            <p className="mb-2 text-sm sm:text-base">{t("appSubtitle")}</p>
            <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-white px-3 py-1 text-xs font-medium text-orange-600 transition hover:bg-orange-50"
              >
                {t("appStore")}
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-white px-3 py-1 text-xs font-medium text-orange-600 transition hover:bg-orange-50"
              >
                {t("googlePlay")}
              </a>
            </div>
          </div>

          <div className="flex items-center">
            {/* Het linker plaatje (app logo in witte achtergrond) is verwijderd */}
            <div className="relative h-[100px] w-[50px] overflow-hidden rounded-xl border-2 border-white">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-400 to-orange-600 opacity-30"></div>
              <div className="absolute inset-x-0 top-2 flex justify-center">
                <div className="h-2 w-8 rounded-full bg-white"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/aioranje-app-logo.png"
                  alt="AIOranje App Preview"
                  width={30}
                  height={30}
                  className="h-auto w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
