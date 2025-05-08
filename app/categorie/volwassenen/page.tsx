import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Check } from "lucide-react"

export default function VolwassenenPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">AI voor Volwassenen</h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600">
          Ontdek onze collectie handige AI-tools en accessoires die speciaal ontworpen zijn om uw dagelijkse taken thuis
          en op kantoor efficiënter en gemakkelijker te maken.
        </p>
      </div>

      {/* Uitgelicht product */}
      <div className="mb-16 rounded-xl bg-gradient-to-r from-orange-50 to-orange-100 p-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">ChatGPT AI Mouse</h2>
            <p className="mb-6 text-lg text-gray-700">
              Onze nieuwste innovatie: een slimme muis met ingebouwde AI-assistentie voor vertaling, voice typing, code
              generatie en meer. Perfect voor professionals en thuiswerkers.
            </p>
            <div className="mb-6 space-y-3">
              <div className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-orange-500" />
                <span>Realtime AI-vertaling tussen meerdere talen</span>
              </div>
              <div className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-orange-500" />
                <span>Voice typing en intelligente tekstgeneratie</span>
              </div>
              <div className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-orange-500" />
                <span>Code generatie voor ontwikkelaars</span>
              </div>
              <div className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-orange-500" />
                <span>Bluetooth connectiviteit voor meerdere apparaten</span>
              </div>
            </div>
            <div>
              <Link href="/product/chatgpt-ai-mouse">
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Bekijk product <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
              <Image
                src="/images/chatgpt-ai-mouse-2.png"
                alt="ChatGPT AI Mouse"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Andere producten in deze categorie */}
      <div className="mb-12">
        <h2 className="mb-8 text-2xl font-bold text-gray-900">Meer AI-producten voor volwassenen</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1 max-w-md mx-auto">
          <Card className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src="/images/chatgpt-ai-mouse.png" alt="ChatGPT AI Mouse" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="mb-2 text-xl font-bold">ChatGPT AI Mouse</h3>
              <p className="mb-4 text-gray-600">
                Slimme muis met AI-vertaling, voice typing en meer voor efficiënter werken.
              </p>
              <div className="flex justify-between">
                <span className="font-bold text-orange-500">€39,95</span>
                <Link href="/product/chatgpt-ai-mouse">
                  <Button variant="outline" size="sm">
                    Bekijk details
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Voordelen sectie */}
      <div className="rounded-xl bg-gray-50 p-8">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">Waarom kiezen voor onze AI-producten?</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Verhoogde productiviteit</h3>
            <p className="text-gray-600">
              Onze AI-tools helpen u tijd te besparen en efficiënter te werken door repetitieve taken te automatiseren.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Veilig en betrouwbaar</h3>
            <p className="text-gray-600">
              Alle AI-functionaliteit werkt lokaal op uw apparaat, waardoor uw gegevens veilig en privé blijven.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Meertalige ondersteuning</h3>
            <p className="text-gray-600">
              Onze producten ondersteunen meerdere talen, perfect voor internationale communicatie en samenwerking.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
