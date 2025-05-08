import type { Metadata } from "next"
import { ShoppingCart, Star } from "lucide-react"
import ProductReviewsRobotHond from "@/components/product-reviews-robot-hond"

export const metadata: Metadata = {
  title: "AiJH RC Robot Hond – AIOranje.nl",
  description:
    "Ontdek de AiJH RC Stunt Robot Hond – Slim, Dansend & Vol Actie! Jouw nieuwe interactieve speelkameraad vol AI-magie.",
}

export default function RobotHondPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="mb-4 text-4xl font-bold text-[#FF6A00]">AiJH RC Stunt Robot Hond</h1>
              <h2 className="mb-6 text-2xl font-medium text-gray-700">Slim, Dansend & Vol Actie!</h2>
              <p className="mb-8 text-lg text-gray-600">🐶 Jouw nieuwe interactieve speelkameraad vol AI-magie.</p>
              <div className="mb-6 flex items-center">
                <div className="mr-2 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-[#FFA500] text-[#FFA500]" />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-600">4,8 uit 5 - 24 beoordelingen</span>
              </div>
              <div className="mb-8">
                <span className="text-3xl font-bold text-[#FF6A00]">€34,95</span>
                <span className="ml-2 text-sm text-gray-500">Inclusief BTW</span>
              </div>
              <button className="flex w-full max-w-xs items-center justify-center rounded-lg bg-[#FF6A00] px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-[#FF6A00]/90 focus:outline-none focus:ring-2 focus:ring-[#FF6A00] focus:ring-offset-2 md:w-auto">
                <ShoppingCart className="mr-2 h-5 w-5" />
                In winkelwagen
              </button>
              <p className="mt-4 text-sm text-gray-500">
                Vandaag besteld, binnen 2-3 dagen in huis. Inclusief USB-kabel en afstandsbediening.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/placeholder.svg?height=400&width=400&text=AiJH+RC+Robot+Hond"
                alt="AiJH RC Robot Hond"
                className="h-auto max-w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">🔍 Belangrijkste kenmerken</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-[#FF6A00]">🤖 Interactieve AI-besturing</h3>
              <p className="text-gray-600">
                Reageert op afstandsbediening en gebaren voor een interactieve speelervaring.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-[#FF6A00]">🎵 Dans & Muziekfunctie</h3>
              <p className="text-gray-600">Speelt muziek en voert coole dansmoves uit om kinderen te vermaken.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-[#FF6A00]">🔁 Stuntautonomie</h3>
              <p className="text-gray-600">
                Kan salto's, spins en andere coole tricks uitvoeren voor eindeloos plezier.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-[#FF6A00]">🗣️ Geluid & Licht</h3>
              <p className="text-gray-600">
                Realistische hondengeluiden en LED-verlichting voor een levendige ervaring.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-[#FF6A00]">🎮 Inclusief afstandsbediening</h3>
              <p className="text-gray-600">Bestuur alle functies zelf met de gebruiksvriendelijke afstandsbediening.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-[#FF6A00]">🔋 Oplaadbare batterij</h3>
              <p className="text-gray-600">Milieuvriendelijk en handig met USB-oplaadmogelijkheid.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Images Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">🖼️ Productgalerij</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <img
              src="/placeholder.svg?height=300&width=300&text=Robot+Hond+Vooraanzicht"
              alt="Robot Hond Vooraanzicht"
              className="h-auto w-full rounded-lg shadow-md"
            />
            <img
              src="/placeholder.svg?height=300&width=300&text=Robot+Hond+Dansend"
              alt="Robot Hond in actie tijdens dansen"
              className="h-auto w-full rounded-lg shadow-md"
            />
            <img
              src="/placeholder.svg?height=300&width=300&text=Afstandsbediening"
              alt="Afstandsbediening en LED-verlichting"
              className="h-auto w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">🎥 Bekijk de robot in actie</h2>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-lg shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="h-[400px] w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Robot Hond Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">⭐ Klantbeoordelingen</h2>
          <ProductReviewsRobotHond />
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-orange-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
            ✅ Waarom kiezen voor de AiJH RC Robot Hond?
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-[#FF6A00]">Stimuleert creatief spelen</h3>
              <p className="text-gray-600">
                Moedigt kinderen aan om actief en creatief te spelen in plaats van passief schermgebruik.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-[#FF6A00]">Technologie & plezier</h3>
              <p className="text-gray-600">Perfect evenwicht tussen moderne technologie en ouderwets speelplezier.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-[#FF6A00]">Gebruiksvriendelijk</h3>
              <p className="text-gray-600">Eenvoudig te bedienen voor jong én oud, zonder ingewikkelde installatie.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-[#FF6A00]">Veilig ontwerp</h3>
              <p className="text-gray-600">
                Gemaakt van duurzame, kindvriendelijke materialen die tegen een stootje kunnen.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-[#FF6A00]">AI-speelgoed</h3>
              <p className="text-gray-600">
                Brengt AI-technologie tot leven in huis op een leuke en educatieve manier.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-[#FF6A00]">Ideaal cadeau</h3>
              <p className="text-gray-600">Perfect verjaardags- of feestdagcadeau voor kinderen vanaf 6 jaar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-center text-white shadow-lg">
            <h2 className="mb-4 text-3xl font-bold">Klaar om plezier te maken?</h2>
            <p className="mb-6 text-lg">Bestel nu de AiJH RC Robot Hond en breng AI-plezier in huis!</p>
            <button className="rounded-lg bg-white px-8 py-3 text-lg font-medium text-[#FF6A00] transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500">
              🛒 Bestel nu voor €34,95
            </button>
            <p className="mt-4 text-sm">
              Vandaag besteld, binnen 2-3 dagen in huis. Inclusief USB-kabel en afstandsbediening.
            </p>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">📋 Specificaties</h2>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-lg bg-white shadow-md">
            <div className="divide-y divide-gray-200">
              <div className="grid grid-cols-3 px-6 py-4">
                <span className="font-medium text-gray-500">Leeftijd</span>
                <span className="col-span-2 text-gray-900">6+ jaar</span>
              </div>
              <div className="grid grid-cols-3 px-6 py-4">
                <span className="font-medium text-gray-500">Afmetingen</span>
                <span className="col-span-2 text-gray-900">20 x 15 x 25 cm</span>
              </div>
              <div className="grid grid-cols-3 px-6 py-4">
                <span className="font-medium text-gray-500">Gewicht</span>
                <span className="col-span-2 text-gray-900">450 gram</span>
              </div>
              <div className="grid grid-cols-3 px-6 py-4">
                <span className="font-medium text-gray-500">Batterij</span>
                <span className="col-span-2 text-gray-900">Oplaadbaar via USB, 2 uur speeltijd</span>
              </div>
              <div className="grid grid-cols-3 px-6 py-4">
                <span className="font-medium text-gray-500">Materiaal</span>
                <span className="col-span-2 text-gray-900">ABS-plastic, kindvriendelijk</span>
              </div>
              <div className="grid grid-cols-3 px-6 py-4">
                <span className="font-medium text-gray-500">Inhoud pakket</span>
                <span className="col-span-2 text-gray-900">Robot hond, afstandsbediening, USB-kabel, handleiding</span>
              </div>
              <div className="grid grid-cols-3 px-6 py-4">
                <span className="font-medium text-gray-500">Garantie</span>
                <span className="col-span-2 text-gray-900">1 jaar fabrieksgarantie</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
