import Image from "next/image"
import Link from "next/link"
import { Smartphone, ArrowRight } from "lucide-react"
import Header from "@/components/header"

export default function AIVoorJongerenPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pb-16 dark:bg-gray-900">
        {/* Categorie Header */}
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-12 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                <Smartphone className="h-8 w-8" />
              </div>
            </div>
            <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">AI voor Jongeren</h1>
            <p className="mx-auto max-w-2xl text-lg">
              Trendy AI-gadgets voor tieners en jongvolwassenen, van selfie-sticks tot slimme camera's en meer.
            </p>
          </div>
        </section>

        {/* Featured Product - AI Smart Selfie Stick */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg">
                <div className="grid grid-cols-1 items-center gap-6 p-6 md:grid-cols-2 md:p-8 lg:gap-12 lg:p-12">
                  <div className="text-white">
                    <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                      AI Smart Selfie Stick – 360° Rotatie & Gezichtsherkenning
                    </h2>
                    <p className="mb-6 text-lg">
                      Maak moeiteloos professionele video's en foto's met deze slimme selfie stick. Dankzij de 360°
                      rotatie en AI-gezichtsherkenning blijf je altijd perfect in beeld.
                    </p>

                    <ul className="mb-8 space-y-4">
                      <li className="flex items-center">
                        <span className="mr-3 text-2xl">🔄</span>
                        <span>360° automatische rotatie</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-3 text-2xl">🤖</span>
                        <span>AI-gezichts- en objectherkenning</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-3 text-2xl">📱</span>
                        <span>Compatibel met Android en iOS</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-3 text-2xl">🔋</span>
                        <span>Ingebouwde batterij voor 5-10 uur gebruik</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-3 text-2xl">🎮</span>
                        <span>Inclusief Bluetooth-afstandsbediening</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-3 text-2xl">📏</span>
                        <span>Verstelbare hoogte tot 200 cm</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-3 text-2xl">🧳</span>
                        <span>Compact en draagbaar ontwerp</span>
                      </li>
                    </ul>

                    <div className="mb-6">
                      <span className="text-3xl font-bold">€49,95</span>
                    </div>

                    <Link
                      href="/product/ai-smart-selfie-stick"
                      className="inline-flex items-center rounded-md bg-white px-6 py-3 text-base font-medium text-orange-600 transition-colors hover:bg-orange-50"
                    >
                      🛒 Bestel nu
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>

                  <div className="flex justify-center">
                    <div className="relative h-[400px] w-[300px]">
                      <Image
                        src="/placeholder.svg?height=400&width=300&text=AI+Smart+Selfie+Stick"
                        alt="AI Smart Selfie Stick"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-12 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              Bekijk de AI Smart Selfie Stick in actie
            </h2>
            <div className="mx-auto max-w-3xl overflow-hidden rounded-xl bg-black shadow-lg">
              <div className="relative aspect-video w-full">
                <video
                  className="w-full h-full"
                  controls
                  poster="/placeholder.svg?height=720&width=1280&text=AI+Smart+Selfie+Stick+Video"
                >
                  <source src="/videos/AIOranje_Video_VoiceOver_Klaar.mp4" type="video/mp4" />
                  Je browser ondersteunt geen video's. Download de video{" "}
                  <a href="/videos/AIOranje_Video_VoiceOver_Klaar.mp4">hier</a>.
                </video>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
              Bekijk onze officiële demonstratievideo om te zien hoe de AI Smart Selfie Stick werkt in verschillende
              situaties.
            </p>
          </div>
        </section>

        {/* Product Gallery */}
        <section className="bg-white py-12 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              Bekijk de AI Smart Selfie Stick in detail
            </h2>
            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Selfie+Stick+Hoofdafbeelding"
                    alt="AI Smart Selfie Stick"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Selfie+Stick+tijdens+vloggen"
                    alt="AI Smart Selfie Stick in gebruik tijdens vloggen"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Bedieningselementen+detail"
                    alt="Detailfoto van de bedieningselementen"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advertentie met afbeelding uit de upload */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Advertentie Content */}
            <div className="overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/images/ai-smart-selfie-stick-c17.png"
                alt="AI Smart Selfie Stick C17 Advertentie"
                width={1200}
                height={1800}
                className="h-auto w-full"
                priority
              />
            </div>

            {/* Actieknoppen */}
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/product/ai-smart-selfie-stick"
                className="inline-block rounded-2xl bg-[#1a1a1a] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-gray-800"
              >
                Meer info
              </Link>
              <Link
                href="/product/ai-smart-selfie-stick"
                className="inline-flex items-center rounded-2xl bg-[#f37021] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[#e05e0f]"
              >
                Bestel nu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Andere Producten voor Jongeren */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              Andere AI-producten voor jongeren
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "AI Selfie Drone Mini",
                  description:
                    "Compacte drone die je gezicht volgt en automatisch de beste hoek kiest voor perfecte selfies en video's.",
                  price: "€129,99",
                  image: "/placeholder.svg?height=300&width=400&text=AI+Selfie+Drone+Mini",
                },
                {
                  title: "Smart Social Media Assistant",
                  description:
                    "AI-tool die je helpt bij het maken en bewerken van content voor sociale media, met automatische filters en effecten.",
                  price: "€89,95",
                  image: "/placeholder.svg?height=300&width=400&text=Smart+Social+Media+Assistant",
                },
                {
                  title: "AI Music Creator Pro",
                  description:
                    "Creëer je eigen muziek met behulp van AI. Componeer beats, melodieën en volledige nummers zonder muzikale ervaring.",
                  price: "€149,99",
                  image: "/placeholder.svg?height=300&width=400&text=AI+Music+Creator+Pro",
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="relative h-48 overflow-hidden rounded-t-lg bg-gray-100">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-4">
                    <div className="mb-2 flex items-start justify-between">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{product.title}</h3>
                      <p className="text-lg font-bold text-orange-500">{product.price}</p>
                    </div>

                    <p className="mb-4 flex-1 text-sm text-gray-600 dark:text-gray-300">{product.description}</p>

                    <div className="mt-auto flex space-x-2">
                      <button className="flex flex-1 items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                        Bekijk product
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-white py-12 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-center text-white shadow-lg">
              <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Ontdek alle AI-gadgets voor jongeren</h2>
              <p className="mb-6 text-lg">
                Van slimme selfie-tools tot AI-gestuurde content creators - vind de nieuwste technologie voor jongeren
                bij AIOranje.
              </p>
              <Link
                href="/categorie/jongeren/alle-producten"
                className="inline-flex items-center rounded-md bg-white px-8 py-3 text-base font-medium text-orange-600 transition-colors hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"
              >
                Bekijk alle producten
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
