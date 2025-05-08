import Header from "@/components/header"
import Link from "next/link"

export default function CareerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 px-4 py-12 dark:bg-gray-900 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {/* Header met achtergrond */}
          {/* <div className="relative mb-12 overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-16 text-center text-white shadow-lg sm:py-20">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10"></div>
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10"></div>
            <h1 className="relative z-10 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Werken bij AIOranje
            </h1>
            <p className="relative z-10 mx-auto mt-4 max-w-2xl text-lg">
              Ontdek onze innovatieve werkomgeving en hoe jij deel kunt uitmaken van onze toekomst
            </p>
          </div> */}

          {/* Eenvoudige testpagina */}
          <div className="rounded-xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Werken bij AIOranje</h1>
            <p className="text-gray-700 dark:text-gray-300">
              Welkom op de "Werken bij ons" pagina. Als je deze tekst kunt zien, werkt de routing correct.
            </p>
            <div className="mt-6">
              <Link
                href="/"
                className="inline-flex items-center rounded-md bg-[#FFA500] px-4 py-2 text-white transition-colors hover:bg-[#FFA500]/90"
              >
                Terug naar home
              </Link>
            </div>
          </div>

          {/* Terug naar home link */}
          {/* <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-[#FFA500] hover:text-[#FFA500]/80">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Terug naar home
            </Link>
          </div> */}

          {/* Bedrijfscultuur sectie */}
          {/* <section className="mb-12 rounded-xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <div className="mb-6 flex items-center">
              <Users className="mr-3 h-8 w-8 text-[#FFA500]" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Onze Bedrijfscultuur</h2>
            </div>

            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Bij AIOranje geloven we in een revolutionaire aanpak: een perfecte synergie tussen AI-technologie en
              menselijk talent. Onze cultuur is gebouwd op innovatie, duurzaamheid en toegankelijkheid. We maken
              geavanceerde technologie begrijpelijk en bruikbaar voor iedereen.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-700/50">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFA500]/10 text-[#FFA500]">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Innovatie</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We omarmen nieuwe ideeën en technologieën, en moedigen creatief denken aan in alles wat we doen.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-700/50">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFA500]/10 text-[#FFA500]">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Samenwerking</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Mens en AI werken naadloos samen, waarbij we elkaars sterke punten benutten voor optimale resultaten.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-700/50">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFA500]/10 text-[#FFA500]">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Kwaliteit</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We streven naar uitmuntendheid in alles wat we doen, van productselectie tot klantenservice.
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-[#FFA500]/10 p-6">
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Onze Visie</h3>
              <p className="italic text-gray-700 dark:text-gray-300">
                "Bij AIOranje geloven we dat de toekomst van werk ligt in de perfecte balans tussen menselijke
                creativiteit en AI-efficiëntie. We bouwen aan een organisatie waar beide elementen elkaar versterken,
                resulterend in een werkplek die zowel innovatief als menselijk is."
              </p>
              <p className="mt-2 text-right text-gray-700 dark:text-gray-300">— Directie, AIOranje</p>
            </div>
          </section> */}

          {/* Talent Pool sectie */}
          {/* <section className="mb-12 rounded-xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <div className="mb-6 flex items-center">
              <Users className="mr-3 h-8 w-8 text-[#FFA500]" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">AIOranje Talent Pool</h2>
            </div>

            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Hoewel we momenteel geen specifieke vacatures hebben, zijn we altijd op zoek naar getalenteerde mensen die
              onze passie voor AI en innovatie delen. Door je aan te melden bij onze Talent Pool, ben je de eerste die
              hoort over nieuwe mogelijkheden binnen AIOranje.
            </p>

            <div className="mb-8 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-700/50">
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Hoe werkt de Talent Pool?</h3>

              <ol className="ml-6 list-decimal space-y-3 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Meld je aan</strong> - Stuur je CV en een korte motivatie naar{" "}
                  <a href="mailto:werken@aioranje.nl" className="text-[#FFA500] hover:underline">
                    werken@aioranje.nl
                  </a>
                </li>
                <li>
                  <strong>Blijf op de hoogte</strong> - We houden je op de hoogte van ontwikkelingen binnen AIOranje
                </li>
                <li>
                  <strong>Toekomstige mogelijkheden</strong> - Wanneer er mogelijkheden ontstaan die bij jouw profiel
                  passen, nemen we direct contact met je op
                </li>
                <li>
                  <strong>Projectbasis</strong> - Soms werken we met professionals op projectbasis voor specifieke
                  initiatieven
                </li>
              </ol>
            </div>

            <div className="mb-8">
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Expertisegebieden</h3>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <div className="rounded-full bg-[#FFA500]/10 px-4 py-2 text-center text-[#FFA500]">
                  AI & Machine Learning
                </div>
                <div className="rounded-full bg-[#FFA500]/10 px-4 py-2 text-center text-[#FFA500]">Webontwikkeling</div>
                <div className="rounded-full bg-[#FFA500]/10 px-4 py-2 text-center text-[#FFA500]">UX/UI Design</div>
                <div className="rounded-full bg-[#FFA500]/10 px-4 py-2 text-center text-[#FFA500]">Klantenservice</div>
                <div className="rounded-full bg-[#FFA500]/10 px-4 py-2 text-center text-[#FFA500]">
                  Productmanagement
                </div>
                <div className="rounded-full bg-[#FFA500]/10 px-4 py-2 text-center text-[#FFA500]">
                  Marketing & Communicatie
                </div>
                <div className="rounded-full bg-[#FFA500]/10 px-4 py-2 text-center text-[#FFA500]">Logistiek</div>
                <div className="rounded-full bg-[#FFA500]/10 px-4 py-2 text-center text-[#FFA500]">Administratie</div>
                <div className="rounded-full bg-[#FFA500]/10 px-4 py-2 text-center text-[#FFA500]">
                  Technische Support
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
              <h3 className="mb-3 text-xl font-semibold">Meld je aan voor onze Talent Pool</h3>
              <p className="mb-4">
                Stuur je CV en een korte motivatie naar{" "}
                <a href="mailto:werken@aioranje.nl" className="font-bold underline hover:text-white/90">
                  werken@aioranje.nl
                </a>{" "}
                en vertel ons waarom jij geïnteresseerd bent in AIOranje.
              </p>
              <div className="flex justify-end">
                <a
                  href="mailto:werken@aioranje.nl"
                  className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-orange-600 transition-colors hover:bg-orange-50"
                >
                  <Send className="mr-2 h-4 w-4" />
                  E-mail ons nu
                </a>
              </div>
            </div>
          </section> */}

          {/* Ambassadeursprogramma sectie */}
          {/* <section className="mb-12 rounded-xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <div className="mb-6 flex items-center">
              <Award className="mr-3 h-8 w-8 text-[#FFA500]" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">AIOranje Ambassadeursprogramma</h2>
            </div>

            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Ben je enthousiast over AI-technologie en onze producten? Word dan ambassadeur van AIOranje! Als
              ambassadeur deel je je passie voor innovatieve technologie met anderen en help je ons merk te versterken.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-700/50">
                <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">Wat doet een ambassadeur?</h3>
                <ul className="ml-5 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Deelt ervaringen met AIOranje producten op sociale media</li>
                  <li>Test nieuwe producten en geeft feedback</li>
                  <li>Vertegenwoordigt AIOranje op evenementen (optioneel)</li>
                  <li>Helpt andere gebruikers met vragen over producten</li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-700/50">
                <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                  Voordelen voor ambassadeurs
                </h3>
                <ul className="ml-5 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Vroege toegang tot nieuwe producten</li>
                  <li>Exclusieve kortingen op het AIOranje assortiment</li>
                  <li>Uitnodigingen voor speciale evenementen</li>
                  <li>Erkenning op onze website en sociale media</li>
                  <li>Netwerkmogelijkheden met andere tech-enthousiastelingen</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg bg-[#FFA500]/10 p-6">
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                Interesse in het ambassadeursprogramma?
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Stuur een e-mail naar{" "}
                <a href="mailto:ambassadeurs@aioranje.nl" className="text-[#FFA500] hover:underline">
                  ambassadeurs@aioranje.nl
                </a>{" "}
                met een korte introductie over jezelf en waarom je een goede ambassadeur zou zijn voor AIOranje.
              </p>
            </div>
          </section> */}

          {/* Testimonials sectie */}
          {/* <section className="mb-12 rounded-xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <div className="mb-6 flex items-center">
              <MessageSquare className="mr-3 h-8 w-8 text-[#FFA500]" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Wat Zeggen Onze Teamleden</h2>
            </div>

            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-700/50">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-[#FFA500]/20">
                    <Image
                      src="/placeholder.svg?height=48&width=48&text=MV"
                      alt="Martijn V."
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Martijn V.</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">AI Product Specialist</p>
                  </div>
                </div>
                <p className="italic text-gray-700 dark:text-gray-300">
                  "Werken bij AIOranje betekent dat je altijd op de voorhoede van technologie staat. Wat ik het meest
                  waardeer is hoe we AI gebruiken om onze eigen werkprocessen te verbeteren, waardoor we ons kunnen
                  concentreren op wat echt belangrijk is: het vinden van de beste producten voor onze klanten."
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-700/50">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-[#FFA500]/20">
                    <Image
                      src="/placeholder.svg?height=48&width=48&text=SK"
                      alt="Sophie K."
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Sophie K.</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">UX Designer</p>
                  </div>
                </div>
                <p className="italic text-gray-700 dark:text-gray-300">
                  "De combinatie van creatieve vrijheid en technologische innovatie maakt AIOranje een unieke werkplek.
                  Ik waardeer hoe we menselijke creativiteit combineren met AI-efficiëntie om gebruikerservaringen te
                  creëren die echt impact hebben."
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-700/50">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-[#FFA500]/20">
                    <Image
                      src="/placeholder.svg?height=48&width=48&text=RD"
                      alt="Robin D."
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Robin D.</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Logistiek Coördinator</p>
                  </div>
                </div>
                <p className="italic text-gray-700 dark:text-gray-300">
                  "De manier waarop AIOranje technologie inzet om logistieke processen te optimaliseren is echt
                  indrukwekkend. Onze AI-systemen maken mijn werk efficiënter, waardoor ik me kan richten op het
                  oplossen van complexere uitdagingen en het verbeteren van de klanttevredenheid."
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-700/50">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-[#FFA500]/20">
                    <Image
                      src="/placeholder.svg?height=48&width=48&text=JB"
                      alt="Jasmijn B."
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Jasmijn B.</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Klantenservice Specialist</p>
                  </div>
                </div>
                <p className="italic text-gray-700 dark:text-gray-300">
                  "Als klantenservice specialist werk ik nauw samen met onze AI-assistenten. Het is fascinerend om te
                  zien hoe we samen betere resultaten behalen dan elk afzonderlijk zou kunnen. De combinatie van
                  menselijke empathie en AI-efficiëntie zorgt voor een superieure klantervaring."
                </p>
              </div>
            </div>
          </section> */}

          {/* Voorbeeld rollen sectie */}
          {/* <section className="mb-12 rounded-xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <div className="mb-6 flex items-center">
              <Users className="mr-3 h-8 w-8 text-[#FFA500]" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Rollen binnen AIOranje</h2>
            </div>

            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Onderstaande rollen geven een indruk van de diverse functies binnen ons bedrijf. Deze posities zijn niet
              noodzakelijkerwijs vacant, maar tonen de breedte van expertise die ons team kenmerkt.
            </p>

            <div className="mb-6 space-y-4">
              <div className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#FFA500]/20 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700/50">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">AI Product Specialist</h3>
                <p className="mb-2 text-gray-700 dark:text-gray-300">
                  Blijft op de hoogte van de nieuwste AI-gadgets en traint onze AI-klantenservice om klanten te
                  adviseren over de beste producten voor hun behoeften.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#FFA500]/10 px-3 py-1 text-xs font-medium text-[#FFA500]">
                    Productkennis
                  </span>
                  <span className="rounded-full bg-[#FFA500]/10 px-3 py-1 text-xs font-medium text-[#FFA500]">
                    AI-training
                  </span>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#FFA500]/20 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700/50">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Front-end Developer</h3>
                <p className="mb-2 text-gray-700 dark:text-gray-300">
                  Werkt aan de AIOranje webshop om deze gebruiksvriendelijker en mooier te maken, en werkt samen met
                  onze AI-systemen om de gebruikerservaring te optimaliseren.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#FFA500]/10 px-3 py-1 text-xs font-medium text-[#FFA500]">
                    Web Development
                  </span>
                  <span className="rounded-full bg-[#FFA500]/10 px-3 py-1 text-xs font-medium text-[#FFA500]">
                    UX/UI
                  </span>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#FFA500]/20 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700/50">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Klantenservice Specialist</h3>
                <p className="mb-2 text-gray-700 dark:text-gray-300">
                  Het menselijke gezicht achter onze AI-klantenservice, helpt bij het trainen en verbeteren van onze
                  digitale assistenten die klanten ondersteunen.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#FFA500]/10 px-3 py-1 text-xs font-medium text-[#FFA500]">
                    Klantenservice
                  </span>
                  <span className="rounded-full bg-[#FFA500]/10 px-3 py-1 text-xs font-medium text-[#FFA500]">
                    AI-training
                  </span>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#FFA500]/20 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700/50">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Logistiek Coördinator</h3>
                <p className="mb-2 text-gray-700 dark:text-gray-300">
                  Houdt toezicht op de AI-gestuurde orderpicking en verzending in ons distributiecentrum, en zorgt
                  ervoor dat de juiste producten op tijd bij onze klanten aankomen.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#FFA500]/10 px-3 py-1 text-xs font-medium text-[#FFA500]">
                    Logistiek
                  </span>
                  <span className="rounded-full bg-[#FFA500]/10 px-3 py-1 text-xs font-medium text-[#FFA500]">
                    Procesoptimalisatie
                  </span>
                </div>
              </div>
            </div>
          </section> */}

          {/* Call to Action */}
          {/* <div className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-center text-white shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Deel Uitmaken van AIOranje's Toekomst?</h2>
            <p className="mb-6 text-lg">
              Of je nu geïnteresseerd bent in onze Talent Pool, ons Ambassadeursprogramma, of gewoon meer wilt weten
              over AIOranje, we horen graag van je!
            </p>
            <a
              href="mailto:werken@aioranje.nl"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-base font-medium text-orange-600 transition-colors hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"
            >
              <Send className="mr-2 h-5 w-5" />
              Neem contact met ons op
            </a>
          </div> */}
        </div>
      </main>
    </>
  )
}
