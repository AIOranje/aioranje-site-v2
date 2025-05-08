import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ShoppingCart, Star, Package } from "lucide-react"
import Header from "@/components/header"

export default function AISmartSelfieStickC17InfoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fff7f0] pb-16">
        {/* Breadcrumb */}
        <div className="bg-white px-4 py-3 shadow-sm">
          <div className="container mx-auto flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-[#f37021]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/categorie/jongeren" className="hover:text-[#f37021]">
              AI voor Jongeren
            </Link>
            <span className="mx-2">/</span>
            <Link href="/product/ai-smart-selfie-stick-c17" className="hover:text-[#f37021]">
              AI Smart Selfie Stick C17
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Meer info</span>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Link
            href="/product/ai-smart-selfie-stick-c17"
            className="mb-6 inline-flex items-center text-[#f37021] hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Terug naar product
          </Link>

          <div className="rounded-xl bg-white p-6 shadow-md">
            <h1 className="mb-6 text-3xl font-bold text-gray-900">AI Smart Selfie Stick C17 - Productinformatie</h1>

            <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="/images/ai-smart-selfie-stick-c17.png"
                    alt="AI Smart Selfie Stick C17"
                    width={1200}
                    height={1800}
                    className="h-auto w-full"
                    priority
                  />
                </div>
              </div>

              <div>
                <div className="mb-4 flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 ${star <= 4.5 ? "fill-[#f37021] text-[#f37021]" : "fill-gray-200 text-gray-200"}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">4.5 (32 reviews)</span>
                </div>

                <div className="mb-4">
                  <span className="text-3xl font-bold text-[#f37021]">€59,95</span>
                  <span className="ml-2 text-sm text-gray-600">Inclusief BTW</span>
                </div>

                <div className="mb-4 rounded-lg border border-gray-200 bg-gray-50 p-3">
                  <div className="mb-2 flex items-center">
                    <Package className="mr-2 h-4 w-4 text-[#f37021]" />
                    <span className="font-medium text-gray-900">Onze Verzendbelofte</span>
                  </div>
                  <p className="text-xs text-gray-700">
                    Bij AIOranje gaat elke <strong>donderdag</strong>, <strong>vrijdag</strong> en{" "}
                    <strong>zaterdag</strong> een verse lading AI-innovatie de deur uit!
                  </p>
                  <p className="mt-1 text-xs text-gray-700">
                    Zo heb je jouw slimme AI-gadget precies op tijd voor het weekend in huis!
                  </p>
                </div>

                <p className="mb-6 text-gray-700">
                  De AI Smart Selfie Stick C17 is de nieuwste innovatie in selfie-technologie. Met geavanceerde
                  AI-gezichtsherkenning en automatische tracking blijf je altijd perfect in beeld, zelfs als je beweegt.
                </p>

                <h2 className="mb-3 text-xl font-semibold text-gray-900">Belangrijkste kenmerken:</h2>
                <ul className="mb-6 space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-[#f37021]">✔</span>
                    <span>
                      <strong>AI-gezichtsherkenning & tracking:</strong> Volgt automatisch je gezicht en houdt je in het
                      midden van het frame
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[#f37021]">✔</span>
                    <span>
                      <strong>360° automatische rotatie:</strong> Draait soepel in alle richtingen om je bewegingen te
                      volgen
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[#f37021]">✔</span>
                    <span>
                      <strong>Draadloze bediening:</strong> Bluetooth-afstandsbediening voor eenvoudige bediening
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[#f37021]">✔</span>
                    <span>
                      <strong>64 inch uitschuifbaar:</strong> Verstelbare lengte voor de perfecte opnamehoek
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[#f37021]">✔</span>
                    <span>
                      <strong>4-poot statief:</strong> Stabiele basis voor handsfree opnames
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[#f37021]">✔</span>
                    <span>
                      <strong>Geschikt voor iOS & Android:</strong> Universele compatibiliteit met alle smartphones
                    </span>
                  </li>
                </ul>

                <button className="flex items-center rounded-2xl bg-[#f37021] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[#e05e0f]">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  In winkelwagen
                </button>
              </div>
            </div>

            <div className="mt-12 border-t border-gray-200 pt-8">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Productbeschrijving</h2>
              <div className="prose max-w-none text-gray-700">
                <p>
                  De <strong>AI Smart Selfie Stick C17</strong> is de ultieme tool voor content creators, vloggers en
                  iedereen die perfecte selfies en video's wil maken. Deze geavanceerde selfie stick combineert
                  state-of-the-art AI-technologie met praktische functionaliteit.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-gray-900">Intelligente gezichtsherkenning</h3>
                <p>
                  Dankzij de ingebouwde AI-camera herkent de C17 automatisch gezichten en houdt deze in het midden van
                  het frame. De 360° automatische rotatie zorgt ervoor dat je altijd perfect in beeld blijft, zelfs
                  wanneer je beweegt. Dit maakt het ideaal voor dansvideo's, tutorials, vlogs en meer.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-gray-900">Veelzijdig en stabiel</h3>
                <p>
                  De C17 kan worden uitgeschoven tot 64 inch (162 cm) en beschikt over een ingebouwd 4-poot statief voor
                  maximale stabiliteit. Gebruik hem als handheld selfie stick of zet hem neer voor handsfree opnames. De
                  draadloze Bluetooth-afstandsbediening maakt het eenvoudig om foto's en video's te maken zonder je
                  telefoon aan te raken.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-gray-900">Technische specificaties</h3>
                <ul>
                  <li>Batterijduur: Tot 8 uur continu gebruik</li>
                  <li>Oplaadtijd: 1,5 uur via USB-C</li>
                  <li>Gewicht: 320 gram</li>
                  <li>Maximale telefoonbreedte: 9 cm</li>
                  <li>Bluetooth-bereik: 10 meter</li>
                  <li>Materiaal: Aluminium en hoogwaardig kunststof</li>
                </ul>

                <h3 className="mt-6 text-xl font-semibold text-gray-900">Inhoud van de verpakking</h3>
                <ul>
                  <li>AI Smart Selfie Stick C17</li>
                  <li>Bluetooth-afstandsbediening</li>
                  <li>USB-C oplaadkabel</li>
                  <li>Gebruikershandleiding</li>
                  <li>Draagtas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#f37021] px-4 py-8 text-white">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div>
            <strong className="text-lg">
              <span className="text-white">AI</span>Oranje.nl
            </strong>
            <br />
            Persoonlijke klantenservice door Laura de Vries
          </div>
          <div className="mt-4 sm:mt-0">
            <Image
              src="/images/laura-de-vries-customer-service.png"
              alt="Laura de Vries"
              width={60}
              height={60}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </footer>
    </>
  )
}
