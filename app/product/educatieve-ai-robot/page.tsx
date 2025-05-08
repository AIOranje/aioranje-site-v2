"use client"

import { useState } from "react"
import Link from "next/link"
import { Star, Minus, Plus, ShoppingCart, Package, Play, Check } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function EducatieveAIRobotPage() {
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("beschrijving")
  const [videoPlaying, setVideoPlaying] = useState(false)

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-500">
              Home
            </Link>
            <span>/</span>
            <Link href="/categorie/kinderen" className="hover:text-orange-500">
              AI Producten voor Kinderen
            </Link>
            <span>/</span>
            <span className="text-gray-900">Educatieve AI Robot</span>
          </div>
        </div>

        {/* Product Detail Section */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <div className="overflow-hidden rounded-md bg-gray-50">
                <img
                  src="/placeholder.svg?height=600&width=600&text=Educatieve+AI+Robot"
                  alt="Educatieve AI Robot"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-2">
                <img
                  src="/placeholder.svg?height=200&width=200&text=Robot+Voorkant"
                  alt="Robot Voorkant"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-2">
                <img
                  src="/placeholder.svg?height=200&width=200&text=Robot+Zijkant"
                  alt="Robot Zijkant"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-2">
                <img
                  src="/placeholder.svg?height=200&width=200&text=Robot+Achterkant"
                  alt="Robot Achterkant"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              {!videoPlaying ? (
                <div className="relative">
                  <img
                    src="/placeholder.svg?height=400&width=800&text=Video+Thumbnail"
                    alt="Video Thumbnail"
                    className="h-full w-full object-cover"
                  />
                  <button
                    onClick={() => setVideoPlaying(true)}
                    className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#FF6A00] text-white shadow-lg transition-transform hover:scale-110"
                    aria-label="Speel video af"
                  >
                    <Play className="h-8 w-8" />
                  </button>
                </div>
              ) : (
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Educatieve AI Robot Demo"
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="mb-2 text-2xl font-bold text-[#333] sm:text-3xl">Intelligente Educatieve AI Robot</h1>
            <p className="mb-4 text-lg font-medium text-[#FF6A00]">
              🤖 De slimme leermaatje voor nieuwsgierige kinderen
            </p>

            <div className="mb-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${star <= 4.7 ? "fill-[#FFA500] text-[#FFA500]" : "fill-gray-200 text-gray-200"}`}
                  />
                ))}
                <span className="ml-2 text-sm font-medium text-[#333]">4,7 / 5</span>
                <span className="ml-2 text-sm text-gray-500">(23 beoordelingen)</span>
              </div>
            </div>

            <div className="mb-6 text-2xl font-bold text-[#FFA500] sm:text-3xl">€44,95</div>

            <div className="mb-6">
              <h2 className="mb-3 text-xl font-semibold text-[#333]">🔍 Belangrijkste kenmerken</h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-[#FF6A00]">🗣️</span>
                  <span>Spraakherkenning – Reageert op stemcommando's voor interactieve gesprekken</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#FF6A00]">📚</span>
                  <span>Educatieve inhoud – Leerzame modules voor taal, rekenen en algemene kennis</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#FF6A00]">🎵</span>
                  <span>Muziek en dans – Speelt vrolijke liedjes en voert dansbewegingen uit</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#FF6A00]">👆</span>
                  <span>Aanraakgevoelige sensoren – Reageert op aanraking voor een interactieve ervaring</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#FF6A00]">🔋</span>
                  <span>Oplaadbare batterij – Langdurig gebruik met handige USB-oplaadfunctie</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#FF6A00]">🎁</span>
                  <span>Ideaal cadeau – Perfect voor kinderen vanaf 3 jaar</span>
                </li>
              </ul>
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
                <strong>Vandaag besteld, binnen 2-3 dagen in huis.</strong> Inclusief USB-oplaadkabel en handleiding.
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
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mb-16">
          <div className="mb-6 border-b border-gray-200">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab("beschrijving")}
                className={`border-b-2 pb-4 pt-2 text-sm font-medium ${
                  activeTab === "beschrijving"
                    ? "border-[#FF6A00] text-[#FF6A00]"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                Productbeschrijving
              </button>
              <button
                onClick={() => setActiveTab("specificaties")}
                className={`border-b-2 pb-4 pt-2 text-sm font-medium ${
                  activeTab === "specificaties"
                    ? "border-[#FF6A00] text-[#FF6A00]"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                Specificaties
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`border-b-2 pb-4 pt-2 text-sm font-medium ${
                  activeTab === "reviews"
                    ? "border-[#FF6A00] text-[#FF6A00]"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                Reviews
              </button>
            </div>
          </div>

          {activeTab === "beschrijving" && (
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-bold text-gray-800">Intelligente Educatieve AI Robot</h2>
              <p className="mb-4 text-gray-600">
                De Intelligente Educatieve AI Robot is speciaal ontworpen om kinderen spelenderwijs te laten leren. Met
                geavanceerde spraakherkenning, interactieve leermethoden en een vrolijk karakter wordt leren een
                plezier!
              </p>

              <h3 className="mb-3 mt-6 text-lg font-semibold text-gray-800">Educatieve waarde</h3>
              <p className="mb-4 text-gray-600">
                Deze robot bevat zorgvuldig ontwikkelde educatieve modules die aansluiten bij de leerdoelen voor jonge
                kinderen. Van taalvaardigheid tot rekenen en algemene kennis - alles wordt op een speelse manier
                aangeboden.
              </p>

              <h3 className="mb-3 mt-6 text-lg font-semibold text-gray-800">Interactieve ervaring</h3>
              <p className="mb-4 text-gray-600">
                Dankzij de ingebouwde sensoren en spraakherkenning kan de robot reageren op aanrakingen en
                stemcommando's. Dit zorgt voor een volledig interactieve ervaring die kinderen stimuleert om te
                communiceren en vragen te stellen.
              </p>

              <h3 className="mb-3 mt-6 text-lg font-semibold text-gray-800">Veilig en duurzaam</h3>
              <p className="mb-4 text-gray-600">
                Gemaakt van hoogwaardige, kindvriendelijke materialen die voldoen aan alle Europese veiligheidsnormen.
                De oplaadbare batterij gaat tot 4 uur mee op een enkele lading, zodat er voldoende speeltijd is.
              </p>

              <div className="mt-6 rounded-lg bg-orange-50 p-4">
                <h3 className="mb-2 text-lg font-semibold text-[#FF6A00]">
                  ✅ Waarom kiezen voor de Intelligente Educatieve AI Robot?
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>Stimuleert cognitieve ontwikkeling en taalvaardigheid</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>Maakt leren leuk door interactieve functies</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>Veilig en duurzaam ontwerp voor langdurig gebruik</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>Eenvoudig te bedienen voor zowel kinderen als ouders</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "specificaties" && (
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-bold text-gray-800">Technische specificaties</h2>
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        Afmetingen
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">15 x 10 x 25 cm</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        Gewicht
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">450 gram</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        Batterij
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Oplaadbare Li-ion 2000mAh</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        Speelduur
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Tot 4 uur</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        Oplaadtijd
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2-3 uur</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        Connectiviteit
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Bluetooth 5.0</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        Compatibiliteit
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">iOS 12+ / Android 8.0+</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        Materiaal
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">ABS-kunststof (BPA-vrij)</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        Leeftijdsadvies
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">3-8 jaar</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        Inhoud verpakking
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        Robot, USB-oplaadkabel, handleiding
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        Garantie
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2 jaar</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex flex-col items-start justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-5 w-5 ${star <= 4.7 ? "fill-[#FFA500] text-[#FFA500]" : "fill-gray-200 text-gray-200"}`}
                        />
                      ))}
                      <span className="ml-2 text-sm font-medium text-[#333]">4,7 / 5</span>
                    </div>
                  </div>
                  <span className="text-gray-600">Gebaseerd op 23 beoordelingen</span>
                </div>
                <button className="rounded-md bg-[#FFA500]/10 px-4 py-2 text-sm font-medium text-[#FFA500] hover:bg-[#FFA500]/20">
                  Schrijf een review
                </button>
              </div>

              <div className="divide-y divide-gray-200">
                {[
                  {
                    id: "r1",
                    author: "Thomas Bakker",
                    rating: 5,
                    date: "15 januari 2025",
                    comment:
                      "Deze robot is een schot in de roos voor mijn dochter die moeite heeft met rekenen. De speelse manier waarop de robot sommen aanbiedt heeft haar zelfvertrouwen enorm geholpen. Top product!",
                  },
                  {
                    id: "r2",
                    author: "Laura Smit",
                    rating: 4,
                    date: "28 februari 2025",
                    comment:
                      "Leuke robot met veel functies. De spraakherkenning werkt goed, maar soms moet je commando's herhalen. De educatieve inhoud is van hoge kwaliteit en mijn zoon van 6 is er dol op.",
                  },
                  {
                    id: "r3",
                    author: "Esther Visser",
                    rating: 5,
                    date: "17 maart 2025",
                    comment:
                      "Geweldige educatieve robot! Mijn tweeling van 4 jaar leert er veel van en ze vinden het nog leuk ook. De app werkt intuïtief en biedt veel extra mogelijkheden. Zeer tevreden met deze aankoop.",
                  },
                  {
                    id: "r4",
                    author: "Mark de Boer",
                    rating: 4,
                    date: "22 april 2025",
                    comment:
                      "Een leuk cadeau voor mijn zoon. Hij vindt de dansbewegingen en liedjes geweldig. De batterij gaat iets minder lang mee dan beloofd, maar verder een prima product. Zou het zeker aanraden.",
                  },
                  {
                    id: "r5",
                    author: "Sandra Jansen",
                    rating: 5,
                    date: "5 mei 2025",
                    comment:
                      "Mijn dochter van 5 is helemaal weg van deze robot! Ze speelt er elke dag mee en leert spelenderwijs nieuwe woorden en rekensommen. De spraakherkenning werkt verrassend goed, zelfs met haar kinderlijke uitspraak.",
                  },
                ].map((review) => (
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
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${star <= review.rating ? "fill-[#FFA500] text-[#FFA500]" : "fill-gray-200 text-gray-200"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-[#333]">Veelgestelde vragen</h2>
          <div className="space-y-4">
            {[
              {
                question: "Vanaf welke leeftijd is deze robot geschikt?",
                answer:
                  "De Educatieve AI Robot is ontworpen voor kinderen vanaf 3 jaar. De educatieve inhoud groeit mee met je kind tot ongeveer 8 jaar.",
              },
              {
                question: "Hoe lang gaat de batterij mee?",
                answer:
                  "De oplaadbare batterij gaat bij normaal gebruik ongeveer 4 uur mee. Het volledig opladen duurt 2-3 uur via de meegeleverde USB-kabel.",
              },
              {
                question: "Heeft de robot een app nodig om te werken?",
                answer:
                  "De robot werkt zelfstandig zonder app, maar voor extra functies en updates is er een optionele app beschikbaar voor iOS en Android.",
              },
              {
                question: "In welke talen kan de robot communiceren?",
                answer:
                  "De robot ondersteunt standaard Nederlands en Engels. Via software-updates kunnen in de toekomst meer talen worden toegevoegd.",
              },
              {
                question: "Is de robot veilig voor jonge kinderen?",
                answer:
                  "Ja, de robot is gemaakt van BPA-vrij materiaal en voldoet aan alle Europese veiligheidsnormen voor speelgoed (EN 71). Er zijn geen kleine onderdelen die losgemaakt kunnen worden.",
              },
            ].map((faq, index) => (
              <div key={index} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-medium text-gray-900">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-[#333]">Gerelateerde producten</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              {
                id: "aijh-rc-robot-hond",
                title: "AiJH RC Robot Hond",
                price: 34.95,
                rating: 4.8,
                image: "/placeholder.svg?height=300&width=300&text=AiJH+RC+Robot+Hond",
              },
              {
                id: "ai-educatieve-tablet",
                title: "AI Educatieve Tablet",
                price: 89.95,
                rating: 4.0,
                image: "/placeholder.svg?height=300&width=300&text=AI+Educatieve+Tablet",
              },
              {
                id: "ai-programmeerbare-auto",
                title: "AI Programmeerbare Auto",
                price: 49.95,
                rating: 4.5,
                image: "/placeholder.svg?height=300&width=300&text=AI+Programmeerbare+Auto",
              },
              {
                id: "ai-smart-selfie-stick-c17",
                title: "AI Smart Selfie Stick C17",
                price: 29.95,
                rating: 4.6,
                image: "/images/ai-smart-selfie-stick-c17.png",
              },
            ].map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-bold text-gray-900">{product.title}</h3>
                  <div className="mb-2 flex items-center">
                    <div className="mr-2 flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${star <= product.rating ? "fill-[#FFA500] text-[#FFA500]" : "fill-gray-200 text-gray-200"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{product.rating.toFixed(1).replace(".", ",")}</span>
                  </div>
                  <div className="mt-2 text-lg font-bold text-[#FF6A00]">
                    €{product.price.toFixed(2).replace(".", ",")}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
