import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"

export default function AISmartSelfieStickC17Page() {
  return (
    <>
      <Header />
      <main className="bg-[#fff7f0] min-h-screen">
        {/* Advertentie als hoofdafbeelding */}
        <div className="container mx-auto px-4 py-8">
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
              href="/product/ai-smart-selfie-stick-c17/info"
              className="inline-flex items-center rounded-2xl bg-[#f37021] px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-[#e05e0f]"
            >
              Bestel nu voor €59,95
            </Link>
          </div>
        </div>

        {/* Productdetails sectie */}
        <section className="container mx-auto px-4 py-8">
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Productdetails</h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-semibold text-[#f37021]">Kenmerken</h3>
                <ul className="space-y-3">
                  {[
                    "AI-gezichtsherkenning & tracking",
                    "360° automatische rotatie",
                    "Draadloze afstandsbediening",
                    "64 inch uitschuifbaar",
                    "4-poot statief voor stabiliteit",
                    "Geschikt voor iOS & Android",
                    "Batterijduur tot 8 uur",
                    "Lichtgewicht en compact design",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-[#f37021]">✔</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold text-[#f37021]">Beschrijving</h3>
                <p className="mb-4">
                  De{" "}
                  <strong>
                    <span className="text-white">AI</span> Smart Selfie Stick C17
                  </strong>{" "}
                  is de ultieme tool voor content creators, vloggers en iedereen die perfecte selfies en video's wil
                  maken. Deze geavanceerde selfie stick combineert state-of-the-art{" "}
                  <span className="text-white">AI</span>-technologie met praktische functionaliteit.
                </p>
                <p className="mb-4">
                  Dankzij de ingebouwde <span className="text-white">AI</span>-camera herkent de C17 automatisch
                  gezichten en houdt deze in het midden van het frame. De 360° automatische rotatie zorgt ervoor dat je
                  altijd perfect in beeld blijft, zelfs wanneer je beweegt.
                </p>
                <p>
                  De C17 kan worden uitgeschoven tot 64 inch (162 cm) en beschikt over een ingebouwd 4-poot statief voor
                  maximale stabiliteit. Gebruik hem als handheld selfie stick of zet hem neer voor handsfree opnames.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/product/ai-smart-selfie-stick-c17/info"
                className="inline-flex items-center rounded-2xl bg-[#f37021] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[#e05e0f]"
              >
                Meer informatie en bestellen
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
