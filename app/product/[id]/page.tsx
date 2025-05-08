"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Star, Minus, Plus, ShoppingCart, ChevronLeft, Package } from "lucide-react"
import Header from "@/components/header"

// Mock product data
const products = [
  {
    id: "1",
    title: "Slimme Robot Hond",
    description:
      "De Slimme Robot Hond is de perfecte AI-metgezel voor het hele gezin. Met geavanceerde spraakherkenning, bewegingssensoren en leermogelijkheden biedt deze robot een interactieve ervaring die zowel vermakelijk als educatief is.",
    fullDescription:
      "Deze interactieve robot hond reageert op commando's, leert nieuwe trucjes en is de perfecte speelkameraad voor kinderen van alle leeftijden. De ingebouwde AI-technologie stelt de robot in staat om emoties te herkennen en daarop te reageren, waardoor een echte band ontstaat tussen kind en robot.",
    price: 99.99,
    rating: 4.5,
    features: [
      "Geavanceerde spraakherkenning voor commando's in het Nederlands en Engels",
      "Bewegingssensoren die obstakels detecteren en vermijden",
      "Oplaadbare batterij met 4 uur speeltijd",
      "Smartphone-app voor extra functies en updates",
      "Leermodus die zich aanpast aan het speelgedrag van het kind",
      "Duurzaam en kindvriendelijk materiaal",
    ],
    image: "/placeholder.svg?height=600&width=600",
    category: "kinderen",
    reviews: [
      {
        id: "r1",
        author: "Marieke van der Meer",
        rating: 5,
        comment:
          "Mijn zoon is dol op deze robot! Hij speelt er elke dag mee en leert spelenderwijs programmeren. De app werkt intuïtief en de batterij gaat lang genoeg mee voor een hele speeldag.",
        date: "15 april 2023",
      },
      {
        id: "r2",
        author: "Thomas Bakker",
        rating: 4,
        comment:
          "Geweldig speelgoed met veel functies. De batterij gaat iets minder lang mee dan beloofd, maar verder top! De spraakherkenning werkt verrassend goed, zelfs met het Nederlandse accent van mijn kinderen.",
        date: "23 maart 2023",
      },
      {
        id: "r3",
        author: "Lisa de Vries",
        rating: 5,
        comment:
          "De beste aankoop die ik voor mijn dochter heb gedaan. Ze is helemaal weg van haar nieuwe 'huisdier'. Zeer aan te raden voor kinderen die geïnteresseerd zijn in technologie!",
        date: "2 mei 2023",
      },
    ],
    relatedProducts: ["2", "5", "4"],
  },
  {
    id: "2",
    title: "AI Selfie Drone",
    price: 129.99,
    image: "/placeholder.svg?height=600&width=600",
    rating: 4.2,
  },
  {
    id: "4",
    title: "AI Taalvertaler",
    price: 79.99,
    image: "/placeholder.svg?height=600&width=600",
    rating: 4.0,
  },
  {
    id: "5",
    title: "Slimme Leerrobot",
    price: 89.99,
    image: "/placeholder.svg?height=600&width=600",
    rating: 4.7,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-5 w-5 ${star <= rating ? "fill-[#FFA500] text-[#FFA500]" : "fill-gray-200 text-gray-200"}`}
        />
      ))}
      <span className="ml-2 text-sm font-medium text-[#333]">{rating.toFixed(1).replace(".", ",")} / 5</span>
    </div>
  )
}

function RelatedProductCard({ product }: { product: any }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="flex flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md"
    >
      <div className="mb-3 h-40 overflow-hidden rounded-md bg-gray-100">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <h3 className="mb-1 text-sm font-semibold text-gray-800">{product.title}</h3>
      <div className="mb-2">
        <StarRating rating={product.rating} />
      </div>
      <p className="mt-auto text-lg font-bold text-orange-600">€{product.price.toFixed(2).replace(".", ",")}</p>
    </Link>
  )
}

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.id as string

  // Find the product based on the ID from the URL
  const product = products.find((p) => p.id === productId) || products[0]

  const [quantity, setQuantity] = useState(1)

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const relatedProductsData = product.relatedProducts
    ? product.relatedProducts.map((id) => products.find((p) => p.id === id)).filter(Boolean)
    : []

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/" className="flex items-center text-sm text-gray-600 hover:text-orange-500">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Terug naar producten
          </Link>
        </div>

        {/* Product Detail Section */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Product Image */}
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="overflow-hidden rounded-md bg-gray-50">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="mb-2 text-2xl font-bold text-[#333] sm:text-3xl">{product.title}</h1>

            <div className="mb-4">
              <StarRating rating={product.rating} />
            </div>

            <p className="mb-6 text-gray-600">{product.description}</p>

            <div className="mb-6">
              <h2 className="mb-3 text-xl font-semibold text-[#333]">Kenmerken</h2>
              <ul className="list-inside list-disc space-y-2 text-gray-600">
                {product.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6 text-2xl font-bold text-[#FFA500] sm:text-3xl">
              €{product.price.toFixed(2).replace(".", ",")}
            </div>

            <div className="mb-6 flex items-center">
              <span className="mr-4 text-[#333]">Aantal:</span>
              <div className="flex items-center rounded-md border border-gray-300">
                <button
                  onClick={decreaseQuantity}
                  className="flex h-10 w-10 items-center justify-center border-r border-gray-300 text-gray-600 hover:bg-gray-50"
                  aria-label="Verminder aantal"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="flex h-10 w-12 items-center justify-center text-[#333]">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="flex h-10 w-10 items-center justify-center border-l border-gray-300 text-gray-600 hover:bg-gray-50"
                  aria-label="Verhoog aantal"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button className="mb-8 flex items-center justify-center rounded-md bg-[#FFA500] px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-[#FFA500]/90 focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:ring-offset-2">
              <ShoppingCart className="mr-2 h-5 w-5" />
              In winkelwagen
            </button>

            <div className="mt-auto rounded-md bg-[#FFA500]/10 p-4">
              <p className="text-sm text-[#FFA500]/90">
                <strong>Gratis verzending</strong> bij bestellingen boven €50
              </p>
            </div>

            <div className="mt-4 rounded-md border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/50">
              <div className="mb-2 flex items-center">
                <Package className="mr-2 h-5 w-5 text-[#FFA500]" />
                <span className="font-medium text-gray-900 dark:text-white">Onze Verzendbelofte</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Bij AIOranje gaat elke <strong>donderdag</strong>, <strong>vrijdag</strong> en <strong>zaterdag</strong>{" "}
                een verse lading AI-innovatie de deur uit!
              </p>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                Zo heb je jouw slimme AI-gadget precies op tijd voor het weekend in huis!
              </p>
            </div>

            <div className="mt-auto rounded-md bg-[#FFA500]/10 p-4">
              <p className="text-sm text-[#FFA500]/90">
                <strong>Gratis verzending</strong> bij bestellingen boven €50
              </p>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mb-16">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">Productbeschrijving</h2>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <p className="mb-4 text-gray-600">{product.fullDescription}</p>
            <p className="text-gray-600">
              De Slimme Robot Hond is ontworpen om kinderen te helpen leren over technologie, programmeren en
              kunstmatige intelligentie op een leuke en interactieve manier. Het is een perfecte introductie tot de
              wereld van robotica en AI voor jonge, nieuwsgierige geesten.
            </p>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mb-16">
          <h2 className="mb-4 text-2xl font-bold text-[#333]">Klantbeoordelingen</h2>
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="mb-6 flex flex-col items-start justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
              <div className="flex items-center">
                <div className="mr-4">
                  <StarRating rating={product.rating} />
                </div>
                <span className="text-gray-600">Gebaseerd op {product.reviews?.length || 0} beoordelingen</span>
              </div>
              <button className="rounded-md bg-[#FFA500]/10 px-4 py-2 text-sm font-medium text-[#FFA500] hover:bg-[#FFA500]/20">
                Schrijf een review
              </button>
            </div>

            <div className="divide-y divide-gray-200">
              {product.reviews?.map((review) => (
                <div key={review.id} className="py-5">
                  <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center">
                      <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFA500]/10 text-[#FFA500]">
                        {review.author.charAt(0).toUpperCase()}
                      </div>
                      <span className="font-medium text-[#333]">{review.author}</span>
                    </div>
                    <span className="mt-2 text-sm text-gray-500 sm:mt-0">{review.date}</span>
                  </div>
                  <div className="mb-2">
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-16">
          <h2 className="mb-4 text-2xl font-bold text-[#333]">Gerelateerde producten</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {relatedProductsData.map((relatedProduct) => (
              <RelatedProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
