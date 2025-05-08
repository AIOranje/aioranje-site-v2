"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/contexts/language-context"

export default function HeroSection() {
  const [greeting, setGreeting] = useState("welcome")
  const { setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)

    const updateGreetingAndTheme = () => {
      const currentHour = new Date().getHours()

      // Set greeting based on time of day
      if (currentHour >= 6 && currentHour < 12) {
        setGreeting("goodMorning")
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting("goodAfternoon")
      } else if ((currentHour >= 18 && currentHour <= 23) || currentHour === 0) {
        setGreeting("goodEvening")
      } else {
        // Between 00:01 and 6:00
        setGreeting("goodNight")
      }

      // Set dark mode during night hours (9 PM to 6 AM)
      if (currentHour >= 21 || currentHour < 6) {
        setTheme("dark")
      }
    }

    updateGreetingAndTheme()
    // Update greeting and theme every minute in case user is active during time change
    const interval = setInterval(updateGreetingAndTheme, 60000)

    return () => clearInterval(interval)
  }, [setTheme])

  // Don't render content until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <section className="relative flex min-h-[40vh] w-full items-center justify-center overflow-hidden bg-orange-500">
        <div className="container relative z-10 mx-auto px-4 py-8 text-center text-white">
          <div className="h-16 w-full animate-pulse rounded-lg bg-gray-200/20"></div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative flex min-h-[40vh] w-full items-center justify-center overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600">
      {/* Content met tekst */}
      <div className="container relative z-10 mx-auto px-4 py-12 text-center text-white">
        <h1 className="mb-2 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">{t(greeting)}!</h1>
        <p className="mx-auto mb-6 max-w-3xl text-lg font-medium leading-relaxed sm:text-xl md:text-2xl">
          {t("heroSubtitle")}
        </p>
      </div>
    </section>
  )
}
