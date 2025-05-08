"use client"

import { useState } from "react"
import { Star, ShoppingCart, Eye } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface Product {
  id: number
  titleKey: string
  descriptionKey: string
  price: number
  rating: number
  features: string[]
  image: string
}

interface ProductCardProps {
  product: Product
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${star <= rating ? "fill-[#FFA500] text-[#FFA500]" : "fill-gray-200 text-gray-200"}`}
        />
      ))}
      <span className="ml-1 text-sm font-medium text-[#333]">{rating.toFixed(1).replace(".", ",")} / 5</span>
    </div>
  )
}

function ProductCard({ product }: ProductCardProps) {
  const [viewMode, setViewMode] = useState<"description" | "features">("description")
  const { t } = useLanguage()

  const formatPrice = (price: number) => {
    return `€${price.toFixed(2).replace(".", ",")}`
  }

  return (
    <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-gray-100">
        <img
          src={product.image || "/placeholder.svg"}
          alt={t(product.titleKey)}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="text-lg font-bold text-[#333]">{t(product.titleKey)}</h3>
          <p className="text-lg font-bold text-[#FFA500]">{formatPrice(product.price)}</p>
        </div>

        <div className="mb-3 flex items-center">
          <StarRating rating={product.rating} />
          <span className="ml-2 text-xs text-gray-500">({Math.floor(Math.random() * 50) + 5} reviews)</span>
        </div>

        <div className="mb-4 flex space-x-2 text-sm">
          <button
            className={`rounded-md px-2 py-1 ${
              viewMode === "description"
                ? "bg-[#FFA500]/10 text-[#FFA500]"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setViewMode("description")}
          >
            {t("description")}
          </button>
          <button
            className={`rounded-md px-2 py-1 ${
              viewMode === "features" ? "bg-[#FFA500]/10 text-[#FFA500]" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setViewMode("features")}
          >
            {t("features")}
          </button>
        </div>

        <div className="mb-4 flex-1">
          {viewMode === "description" ? (
            <p className="text-sm text-gray-600">{t(product.descriptionKey)}</p>
          ) : (
            <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
              {product.features.map((feature, index) => (
                <li key={index}>
                  {feature.startsWith("AI-") ? (
                    <>
                      <span className="text-white">AI</span>
                      {feature.substring(2)}
                    </>
                  ) : (
                    feature
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-auto flex space-x-2">
          <button className="flex flex-1 items-center justify-center rounded-md bg-[#FFA500] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#FFA500]/90 focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:ring-offset-2">
            <ShoppingCart className="mr-2 h-4 w-4" />
            {t("addToCart")}
          </button>
          <button className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-[#333] transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:ring-offset-2">
            <Eye className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ProductGrid() {
  const { t } = useLanguage()

  const products: Product[] = [
    {
      id: 7,
      titleKey: "aiSmartSelfieStick",
      descriptionKey: "aiSmartSelfieStickDesc",
      price: 49.95,
      rating: 4.5,
      features: [
        "360° automatische rotatie",
        "AI-gezichtsherkenning",
        "Compatibel met Android en iOS",
        "Batterijduur tot 10 uur",
      ],
      image: "/placeholder.svg?height=300&width=400&text=AI+Smart+Selfie+Stick",
    },
    {
      id: 1,
      titleKey: "smartRobotDog",
      descriptionKey: "smartRobotDogDesc",
      price: 99.99,
      rating: 4.5,
      features: ["Spraakherkenning", "Bewegingssensor", "Oplaadbaar", "App-besturing"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      titleKey: "aiSelfieDrone",
      descriptionKey: "aiSelfieDroneDesc",
      price: 129.99,
      rating: 4.2,
      features: ["Gezichtsherkenning", "4K Camera", "30 min. vliegtijd", "Opvouwbaar design"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      titleKey: "smartHomeAssistant",
      descriptionKey: "smartHomeAssistantDesc",
      price: 149.99,
      rating: 4.8,
      features: ["Multi-room audio", "Smart home integratie", "Stemherkenning", "Persoonlijke assistent"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      titleKey: "aiTranslator",
      descriptionKey: "aiTranslatorDesc",
      price: 79.99,
      rating: 4.0,
      features: ["40+ talen", "Offline modus", "Lange batterijduur", "Spraak-naar-tekst"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 5,
      titleKey: "educationalRobot",
      descriptionKey: "educationalRobotDesc",
      price: 89.99,
      rating: 4.7,
      features: ["Programmeerbaar", "Educatieve games", "Leeftijd 6-12 jaar", "Schermvrij leren"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 6,
      titleKey: "aiFitnessTracker",
      descriptionKey: "aiFitnessTrackerDesc",
      price: 69.99,
      rating: 4.3,
      features: ["Bewegingsanalyse", "Persoonlijke coaching", "Hartslagmeter", "Waterbestendig"],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-2 text-center text-3xl font-bold text-gray-800">{t("ourProducts")}</h2>
      <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600">{t("discoverGadgets")}</p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
