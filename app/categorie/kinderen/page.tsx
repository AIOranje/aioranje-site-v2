import type { Metadata } from "next"
import Link from "next/link"
import { ShoppingCart, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Producten voor Kinderen | AIOranje",
  description: "Ontdek onze collectie AI-producten speciaal ontworpen voor kinderen. Educatief, veilig en leuk!",
}

export default function KinderenPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900">AI Producten voor Kinderen</h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
              Ontdek onze collectie AI-producten speciaal ontworpen voor kinderen. Educatief, veilig en leuk!
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">Onze Producten</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Product Card 1 - Educatieve AI Robot (NEW) */}
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg">
              <Link href="/product/educatieve-ai-robot">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=300&text=Educatieve+AI+Robot"
                    alt="Educatieve AI Robot"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </Link>
              <div className="p-6">
                <Link href="/product/educatieve-ai-robot">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Educatieve AI Robot</h3>
                </Link>
                <div className="mb-4 flex items-center">
                  <div className="mr-2 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${star <= 4.7 ? "fill-[#FFA500] text-[#FFA500]" : "fill-gray-200 text-gray-200"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">4,7 (23 reviews)</span>
                </div>
                <p className="mb-4 text-gray-600">
                  Interactieve educatieve robot met spraakherkenning en leerzame modules voor taal, rekenen en algemene
                  kennis. Perfect voor kinderen van 3-8 jaar.
                </p>
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-[#FF6A00]">€44,95</span>
                  <span className="text-sm text-green-600">Op voorraad</span>
                </div>
                <button className="flex w-full items-center justify-center rounded-lg bg-[#FF6A00] px-4 py-2 text-white transition-colors hover:bg-[#FF6A00]/90">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  In winkelwagen
                </button>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg">
              <Link href="/product/aijh-rc-robot-hond">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=300&text=AiJH+RC+Robot+Hond"
                    alt="AiJH RC Robot Hond"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </Link>
              <div className="p-6">
                <Link href="/product/aijh-rc-robot-hond">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">AiJH RC Robot Hond</h3>
                </Link>
                <div className="mb-4 flex items-center">
                  <div className="mr-2 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-[#FFA500] text-[#FFA500]" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">4,8 (24 reviews)</span>
                </div>
                <p className="mb-4 text-gray-600">
                  Interactieve AI-robot hond die danst, stunts uitvoert en reageert op commando's. Perfect voor kinderen
                  vanaf 6 jaar.
                </p>
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-[#FF6A00]">€34,95</span>
                  <span className="text-sm text-green-600">Op voorraad</span>
                </div>
                <button className="flex w-full items-center justify-center rounded-lg bg-[#FF6A00] px-4 py-2 text-white transition-colors hover:bg-[#FF6A00]/90">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  In winkelwagen
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">Waarom AI-speelgoed voor kinderen?</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-[#FF6A00]">Educatieve waarde</h3>
              <p className="text-gray-600">
                Onze AI-producten zijn ontworpen om kinderen spelenderwijs te laten leren, waardoor ze belangrijke
                vaardigheden ontwikkelen.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-[#FF6A00]">Veilig ontwerp</h3>
              <p className="text-gray-600">
                Alle producten zijn gemaakt van kindvriendelijke materialen en voldoen aan de strengste
                veiligheidsnormen.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-[#FF6A00]">Toekomstgericht</h3>
              <p className="text-gray-600">
                Bereid kinderen voor op de toekomst door ze al vroeg kennis te laten maken met AI-technologie op een
                leuke manier.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-[#FF6A00]">Interactief spelen</h3>
              <p className="text-gray-600">
                Moedigt actief en interactief spelen aan in plaats van passief schermgebruik, wat beter is voor de
                ontwikkeling.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-[#FF6A00]">Duurzaam</h3>
              <p className="text-gray-600">
                Onze producten zijn gemaakt om lang mee te gaan en groeien mee met de ontwikkeling van je kind.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-[#FF6A00]">Ouderlijk toezicht</h3>
              <p className="text-gray-600">
                Veel van onze producten bieden instellingen voor ouderlijk toezicht, zodat je controle houdt over het
                gebruik.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">Veelgestelde vragen</h2>
          <div className="mx-auto max-w-3xl divide-y divide-gray-200 rounded-lg bg-white shadow-md">
            <div className="p-6">
              <h3 className="mb-2 text-lg font-medium text-gray-900">
                Vanaf welke leeftijd zijn deze producten geschikt?
              </h3>
              <p className="text-gray-600">
                Onze producten zijn geschikt voor verschillende leeftijden, meestal vanaf 4 jaar. Bij elk product staat
                de aanbevolen leeftijd vermeld.
              </p>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-lg font-medium text-gray-900">Zijn deze producten veilig voor kinderen?</h3>
              <p className="text-gray-600">
                Ja, al onze producten voldoen aan de Europese veiligheidsnormen en zijn gemaakt van kindvriendelijke
                materialen.
              </p>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-lg font-medium text-gray-900">Hebben deze producten internet nodig?</h3>
              <p className="text-gray-600">
                Sommige producten werken volledig offline, terwijl andere een internetverbinding nodig hebben voor
                bepaalde functies. Dit staat duidelijk vermeld bij de productspecificaties.
              </p>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-lg font-medium text-gray-900">Wat is de garantie op deze producten?</h3>
              <p className="text-gray-600">
                Al onze producten hebben een standaard garantie van 1 jaar tegen fabricagefouten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">Ontdek de wereld van AI met je kind</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              Bekijk onze collectie AI-producten voor kinderen en maak leren leuk en interactief!
            </p>
            <Link
              href="/product/educatieve-ai-robot"
              className="inline-block rounded-lg bg-white px-8 py-3 text-lg font-medium text-[#FF6A00] transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"
            >
              Bekijk onze nieuwste educatieve robot
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
