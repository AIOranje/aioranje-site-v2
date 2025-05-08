"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function AboutSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            {t("aboutUs")} <span className="text-orange-500">ons</span>
          </h2>

          <div className="mb-8 overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-700">
            <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
              {/* Grote foto links - nu de buitenkant van het kantoor */}
              <div className="overflow-hidden rounded-lg md:row-span-2">
                <Image
                  src="/images/aioranje-exterior.jpg"
                  alt="Het AIOranje kantoorgebouw"
                  width={600}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Twee foto's rechts onder elkaar */}
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/images/aioranje-canteen.png"
                  alt="De AIOranje kantine met medewerkers"
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/images/aioranje-office-computers.jpg"
                  alt="Het AIOranje computerruimte met medewerkers"
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
            <div className="p-6">
              <div className="mb-6 flex items-center">
                <span className="mr-3 text-3xl">🧠</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
                  {t("aboutUs")} <span className="text-orange-500">AIOranje.nl</span>
                </h3>
              </div>
              <p className="mb-4 italic text-gray-600 dark:text-gray-300">{t("aboutSlogan")}</p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">{t("aboutText1")}</p>
              <p className="text-gray-700 dark:text-gray-300">{t("aboutText2")}</p>

              <div className="mt-6 text-center">
                <Link
                  href="/over-ons"
                  className="inline-flex items-center rounded-md bg-orange-500 px-4 py-2 text-white transition-colors hover:bg-orange-600"
                >
                  {t("aboutUs")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-700">
              <div className="mb-4 flex items-center">
                <span className="mr-3 text-2xl">🚀</span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {t("whyWeDo")} <span className="text-orange-500">doen</span>
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{t("whyWeDoText")}</p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-700">
              <div className="mb-4 flex items-center">
                <span className="mr-3 text-2xl">🟠</span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {t("whyAIOranje")} <span className="text-orange-500">AIOranje</span>?
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{t("whyAIOranjeText")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
