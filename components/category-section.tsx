"use client"

import type React from "react"
import Link from "next/link"
import { BotIcon as Robot, Smartphone, Briefcase } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface CategoryCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
}

function CategoryCard({ title, description, icon, href }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm transition-all hover:border-[#FFA500]/20 hover:shadow-md sm:p-6"
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFA500]/10 text-[#FFA500]">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold text-[#333]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  )
}

export default function CategorySection() {
  const { t } = useLanguage()

  const categories = [
    {
      titleKey: "aiForChildren",
      descriptionKey: "aiForChildrenDesc",
      icon: <Robot className="h-8 w-8" />,
      href: "/categorie/kinderen",
    },
    {
      titleKey: "aiForTeens",
      descriptionKey: "aiForTeensDesc",
      icon: <Smartphone className="h-8 w-8" />,
      href: "/product/ai-smart-selfie-stick",
    },
    {
      titleKey: "aiForAdults",
      descriptionKey: "aiForAdultsDesc",
      icon: <Briefcase className="h-8 w-8" />,
      href: "/categorie/volwassenen",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-2 text-center text-3xl font-bold text-gray-800">{t("ourCategories")}</h2>
      <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600">{t("discoverProducts")}</p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard
            key={category.titleKey}
            title={t(category.titleKey)}
            description={t(category.descriptionKey)}
            icon={category.icon}
            href={category.href}
          />
        ))}
      </div>
    </section>
  )
}
