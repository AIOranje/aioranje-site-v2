import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart, Heart, Share2, Package } from "lucide-react"
import Header from "@/components/header"
import SelfieStickReviews from "./reviews"

export default function AISmartSelfieStickPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pb-16 dark:bg-gray-900">
        {/* Breadcrumb */}
        <div className="bg-white px-4 py-3 shadow-sm dark:bg-gray-800">
          <div className="container mx-auto flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-orange-500 dark:hover:text-orange-400">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/categorie/jongeren" className="hover:text-orange-500 dark:hover:text-orange-400">
              AI voor Jongeren
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 dark:text-white">AI Smart Selfie Stick</span>
          </div>
        </div>

        {/* Product Header Section */}
        <section className="bg-white py-8 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-700">
                <div className="aspect-square w-full">
                  <Image
                    src="/images/ai-smart-selfie-stick-hero.png"
                    alt="AI Smart Selfie Stick in gebruik met gezichtsherkenning"
                    width={800}
                    height={800}
                    className="h-full w-full object-contain"
                    priority
                  />
                </div>
                <div className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                  Nieuw
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col">
                <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                  <span className="text-white">AI</span> Smart Selfie Stick – 360° Rotatie & Gezichtsherkenning
                </h1>

                {/* Rating */}
                <div className="mb-4 flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 ${
                          star <= 4.5 ? "fill-orange-500 text-orange-500" : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">4.5 (28 reviews)</span>
                </div>

                {/* Short Description */}
                <p className="mb-6 text-gray-700 dark:text-gray-300">
                  Maak moeiteloos professionele video's en foto's met deze slimme selfie stick. Dankzij de 360° rotatie
                  en <span className="text-white">AI</span>-gezichtsherkenning blijf je altijd perfect in beeld.
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl font-bold text-orange-500">€49,95</span>
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Inclusief BTW</span>
                </div>

                {/* Actions */}
                <div className="mb-6 flex flex-wrap gap-4">
                  <button className="flex flex-1 items-center justify-center rounded-md bg-orange-500 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:flex-none sm:px-8">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Bestel nu
                  </button>
                  <button className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>

                {/* Availability */}
                <div className="mb-6 rounded-md bg-green-50 p-4 dark:bg-green-900/20">
                  <p className="flex items-center text-green-800 dark:text-green-400">
                    <span className="mr-2 flex h-2 w-2 rounded-full bg-green-500"></span>
                    Op voorraad - Vandaag besteld, morgen in huis
                  </p>
                </div>

                {/* Shipping */}
                <div className="rounded-md bg-gray-50 p-4 dark:bg-gray-700/50">
                  <p className="mb-2 font-medium text-gray-900 dark:text-white">Verzending:</p>
                  <ul className="mb-4 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>✅ Gratis verzending bij bestellingen boven €35</li>
                    <li>✅ 30 dagen niet-goed-geld-terug garantie</li>
                    <li>✅ 2 jaar garantie</li>
                  </ul>

                  <div className="mt-3 border-t border-gray-200 pt-3 dark:border-gray-600">
                    <div className="mb-2 flex items-center">
                      <Package className="mr-2 h-4 w-4 text-orange-500" />
                      <span className="font-medium text-gray-900 dark:text-white">Onze Verzendbelofte</span>
                    </div>
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      Bij AIOranje gaat elke <strong>donderdag</strong>, <strong>vrijdag</strong> en{" "}
                      <strong>zaterdag</strong> een verse lading AI-innovatie de deur uit!
                    </p>
                    <p className="mt-1 text-xs text-gray-700 dark:text-gray-300">
                      Zo heb je jouw slimme AI-gadget precies op tijd voor het weekend in huis!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              Belangrijkste kenmerken
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "🔄",
                  title: "360° automatische rotatie",
                  description:
                    "De selfie stick draait automatisch om je te volgen, zodat je altijd perfect in beeld blijft.",
                },
                {
                  icon: "🤖",
                  title: (
                    <>
                      <span className="text-white">AI</span>-gezichts- en objectherkenning
                    </>
                  ),
                  description:
                    "Geavanceerde AI herkent gezichten en objecten, en zorgt ervoor dat ze altijd in het midden van het frame blijven.",
                },
                {
                  icon: "📱",
                  title: "Compatibel met Android en iOS",
                  description: "Werkt naadloos met alle moderne smartphones, zowel Android als iOS.",
                },
                {
                  icon: "🔋",
                  title: "Ingebouwde batterij",
                  description: "Tot 10 uur gebruik op een enkele lading, perfect voor een dag vol avonturen.",
                },
                {
                  icon: "🎮",
                  title: "Bluetooth-afstandsbediening",
                  description: "Bedien je camera op afstand met de meegeleverde Bluetooth-afstandsbediening.",
                },
                {
                  icon: "📏",
                  title: "Verstelbare hoogte",
                  description: "Pas de hoogte aan tot 200 cm voor de perfecte hoek en compositie.",
                },
                {
                  icon: "🧳",
                  title: "Compact en draagbaar",
                  description: "Lichtgewicht ontwerp dat gemakkelijk in je tas past, ideaal voor onderweg.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-transform hover:scale-105 dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="mb-4 text-4xl">{feature.icon}</div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="bg-white py-12 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              Bekijk de <span className="text-white">AI</span> Smart Selfie Stick in actie
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
              Bekijk onze officiële demonstratievideo om te zien hoe de <span className="text-white">AI</span> Smart
              Selfie Stick werkt in verschillende situaties.
            </p>
          </div>
        </section>

        {/* Product Gallery */}
        <section className="bg-white py-12 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              Productafbeeldingen
            </h2>
            <div className="max-w-sm mx-auto">
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                <Image
                  src="/images/ai-smart-selfie-stick-remote-guide.png"
                  alt="Handleiding voor de afstandsbediening van de AI Smart Selfie Stick"
                  width={400}
                  height={800}
                  className="h-auto w-full object-contain"
                />
                <p className="mt-3 text-center text-sm text-gray-600 dark:text-gray-400">
                  Overzicht van de functies van de afstandsbediening
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Description */}
        <section className="bg-white py-12 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Productbeschrijving</h2>
              <div className="prose max-w-none text-gray-700 dark:text-gray-300">
                <p>
                  De{" "}
                  <strong>
                    <span className="text-white">AI</span> Smart Selfie Stick
                  </strong>{" "}
                  is de perfecte metgezel voor content creators, vloggers en iedereen die graag professioneel ogende
                  foto's en video's maakt. Met geavanceerde <span className="text-white">AI</span>-technologie neemt
                  deze selfie stick het zware werk uit handen, zodat jij je kunt concentreren op het creëren van
                  geweldige content.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                  Altijd perfect in beeld dankzij <span className="text-white">AI</span>
                </h3>
                <p>
                  De ingebouwde <span className="text-white">AI</span>-technologie herkent gezichten en objecten en
                  zorgt ervoor dat ze altijd in het midden van het frame blijven. De 360° automatische rotatie volgt je
                  bewegingen, zodat je altijd perfect in beeld blijft, zelfs als je beweegt. Dit maakt het ideaal voor
                  dansvideo's, tutorials, vlogs en meer.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                  Veelzijdig en gebruiksvriendelijk
                </h3>
                <p>
                  De selfie stick is compatibel met vrijwel alle moderne smartphones, zowel Android als iOS. De
                  verstelbare hoogte tot 200 cm geeft je de flexibiliteit om de perfecte hoek en compositie te vinden
                  voor elke situatie. De meegeleverde Bluetooth-afstandsbediening maakt het eenvoudig om opnames te
                  starten en te stoppen zonder je telefoon aan te raken.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                  Multifunctionele afstandsbediening
                </h3>
                <p>
                  De bijgeleverde afstandsbediening is meer dan alleen een knop om foto's te maken. Met de pijltoetsen
                  kun je de richting van de selfie stick besturen, terwijl de liketoets je helpt om snel te pauzeren of
                  content te liken. De speciale cameratoets maakt het vastleggen van het perfecte moment eenvoudig, en
                  met de scrollfunctie blader je moeiteloos door je korte filmpjes. Perfect voor beauty-vloggers,
                  content creators en social media enthousiastelingen!
                </p>

                <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Duurzaam en betrouwbaar</h3>
                <p>
                  Met een batterijduur van 5-10 uur op een enkele lading is de <span className="text-white">AI</span>{" "}
                  Smart Selfie Stick klaar voor een dag vol avonturen. Het compacte en draagbare ontwerp maakt het
                  gemakkelijk om mee te nemen, terwijl de robuuste constructie zorgt voor duurzaamheid en
                  betrouwbaarheid.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Wat zit er in de doos?</h3>
                <ul className="list-disc pl-5">
                  <li>
                    <span className="text-white">AI</span> Smart Selfie Stick
                  </li>
                  <li>Bluetooth-afstandsbediening met multifunctionele knoppen</li>
                  <li>USB-C oplaadkabel</li>
                  <li>Universele telefoonhouder</li>
                  <li>Gebruikershandleiding</li>
                  <li>Draagtas</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="bg-white py-12 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Klantbeoordelingen</h2>
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <div className="mb-6 flex flex-col items-start justify-between space-y-4 border-b border-gray-200 pb-6 sm:flex-row sm:items-center sm:space-y-0">
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-5 w-5 ${
                              star <= 4.5 ? "fill-orange-500 text-orange-500" : "fill-gray-200 text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        4.5 uit 5 sterren | 28 beoordelingen
                      </span>
                    </div>
                  </div>
                  <button className="rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                    Schrijf een review
                  </button>
                </div>

                <SelfieStickReviews />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-center text-white shadow-lg">
              <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
                Klaar om je content naar een hoger niveau te tillen?
              </h2>
              <p className="mb-6 text-lg">
                Bestel nu de <span className="text-white">AI</span> Smart Selfie Stick en maak moeiteloos professionele
                video's en foto's.
              </p>
              <button className="inline-flex items-center rounded-md bg-white px-8 py-3 text-base font-medium text-orange-600 transition-colors hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Bestel nu voor €49,95
              </button>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="bg-white py-12 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              Gerelateerde producten
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "<span class='text-black'>AI</span> Selfie Drone Mini",
                  price: "€129,99",
                  rating: 4.2,
                  image: "/placeholder.svg?height=300&width=300&text=AI+Selfie+Drone+Mini",
                },
                {
                  title: "Smart Social Media Assistant",
                  price: "€89,95",
                  rating: 4.0,
                  image: "/placeholder.svg?height=300&width=300&text=Smart+Social+Media+Assistant",
                },
                {
                  title: "Draagbare Ring Light Pro",
                  price: "€39,95",
                  rating: 4.7,
                  image: "/placeholder.svg?height=300&width=300&text=Draagbare+Ring+Light+Pro",
                },
                {
                  title: "Bluetooth Audio Recorder",
                  price: "€59,95",
                  rating: 4.5,
                  image: "/placeholder.svg?height=300&width=300&text=Bluetooth+Audio+Recorder",
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="p-4">
                    <div className="mb-3 aspect-square overflow-hidden rounded-md bg-gray-100">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        width={300}
                        height={300}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <h3
                      className="mb-1 text-base font-semibold text-gray-900 dark:text-white"
                      dangerouslySetInnerHTML={{ __html: product.title }}
                    ></h3>
                    <div className="mb-2 flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= product.rating ? "fill-orange-500 text-orange-500" : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                      <span className="ml-1 text-xs text-gray-500">({Math.floor(Math.random() * 50) + 10})</span>
                    </div>
                    <p className="text-lg font-bold text-orange-500">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
