import Header from "@/components/header"
import Image from "next/image"
import AppDownloadBanner from "@/components/app-download-banner"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white px-4 py-12 dark:bg-gray-900 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {/* Header met achtergrond */}
          <div className="relative mb-12 overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-16 text-center text-white shadow-lg sm:py-20">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10"></div>
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10"></div>
            <h1 className="relative z-10 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Over ons</h1>
          </div>

          {/* Intro sectie */}
          <section className="mb-12 rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800 sm:p-8">
            <div className="mb-6 flex items-center">
              <span className="mr-3 text-3xl">🧠</span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                Over <span className="text-orange-500">AIOranje.nl</span>
              </h2>
            </div>
            <p className="mb-4 italic text-gray-600 dark:text-gray-300">
              Passie voor slimme technologie. Vertrouwd vanuit Nederland.
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Bij AIOranje.nl zijn wij met ons digitale team dagelijks bezig met wat ons het meest fascineert:
              kunstmatige intelligentie. De razendsnelle ontwikkelingen in AI brengen een nieuwe wereld van
              mogelijkheden — en wij willen die toegankelijk maken voor iedereen.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Van slimme oordopjes die realtime vertalen, tot educatieve robothonden voor kinderen, slimme camera's voor
              social media-liefhebbers, en innovatieve accessoires voor thuis en op kantoor — bij ons vind je de
              nieuwste AI-producten, met zorg geselecteerd en altijd up-to-date.
            </p>
          </section>

          {/* Team foto sectie */}
          <section className="mb-12 overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-800">
            <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-2">
              {/* Grote foto links - nu de buitenkant van het kantoor */}
              <div className="overflow-hidden rounded-lg md:row-span-2">
                <Image
                  src="/images/aioranje-exterior.jpg"
                  alt="Het AIOranje kantoorgebouw"
                  width={600}
                  height={800}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>

              {/* Twee foto's rechts onder elkaar */}
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/images/aioranje-canteen.png"
                  alt="De AIOranje kantine met medewerkers"
                  width={400}
                  height={300}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/images/aioranje-office-computers.jpg"
                  alt="Het AIOranje computerruimte met medewerkers"
                  width={400}
                  height={300}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Ons AI-team</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Bij AIOranje werkt een geavanceerd team van AI-gestuurde specialisten die dagelijks bezig zijn met het
                analyseren, selecteren en ondersteunen van de nieuwste AI-producten. Onze digitale werkplek weerspiegelt
                onze merkidentiteit - modern, efficiënt en met een vleugje oranje!
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                We zijn trots op ons diverse netwerk van AI-experts, van productspecialisten tot klantenservice
                assistenten, allemaal met één gemeenschappelijk doel: jou helpen de perfecte AI-oplossing te vinden voor
                jouw behoeften.
              </p>
            </div>
          </section>

          {/* Productie faciliteit sectie */}
          <section className="mb-12 overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-800">
            <div className="flex justify-center p-4 sm:p-6">
              <div className="w-3/4">
                <Image
                  src="/images/aioranje-production.jpg"
                  alt="De AIOranje productie faciliteit"
                  width={800}
                  height={600}
                  className="h-auto w-full rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Onze geautomatiseerde productie</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Naast ons digitale kantoor beschikt AIOranje over een volledig geautomatiseerde productie- en assemblage
                faciliteit waar onze producten met AI-gestuurde precisie worden samengesteld en getest. Hier werken onze
                geavanceerde robotsystemen in een omgeving die volledig is afgestemd op kwaliteit en nauwkeurigheid.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Onze AI-gestuurde productielijn draagt met trots de AIOranje kleuren en zorgt ervoor dat elk product dat
                onze faciliteit verlaat voldoet aan de hoogste standaarden. Van assemblage tot kwaliteitscontrole - we
                hebben het hele proces geautomatiseerd om de beste ervaring voor onze klanten te garanderen.
              </p>
            </div>
          </section>

          {/* Magazijn sectie */}
          <section className="mb-12 overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-800">
            <div className="flex justify-center p-4 sm:p-6">
              <div className="w-3/4">
                <Image
                  src="/images/aioranje-warehouse.jpeg"
                  alt="Het AIOranje distributiecentrum"
                  width={800}
                  height={600}
                  className="h-auto w-full rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                Ons AI-gestuurde distributiecentrum
              </h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                In ons state-of-the-art distributiecentrum komen alle digitale onderdelen van AIOranje samen. Hier
                worden bestellingen met AI-precisie verwerkt, verpakt en klaargezet voor bezorging. Met een geavanceerd
                voorraadbeheersysteem kunnen we snel leveren en altijd aan de vraag voldoen.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Ons logistieke AI-systeem zorgt ervoor dat elk pakket met digitale zorg wordt behandeld en correct wordt
                voorbereid voor transport. De efficiënte geautomatiseerde werkprocessen stellen ons in staat om
                bestellingen binnen 24 uur te verwerken en klaar te maken voor verzending.
              </p>
            </div>
          </section>

          {/* Bezorging sectie */}
          <section className="mb-12 overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-800">
            <div className="flex justify-center p-4 sm:p-6">
              <div className="w-3/4">
                <Image
                  src="/images/aioranje-delivery.jpg"
                  alt="AIOranje bezorgservice concept"
                  width={800}
                  height={600}
                  className="h-auto w-full rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Onze bezorgservice</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Bij AIOranje geloven we dat de ervaring niet stopt bij het maken van geweldige producten. Daarom hebben
                we een innovatief bezorgconcept ontwikkeld dat we momenteel implementeren via zorgvuldig geselecteerde
                bezorgpartners. Onze visie: herkenbare, 100% elektrische oranje busjes die door een combinatie van
                getrainde bezorgers en AI-gestuurde routeoptimalisatie de beste ervaring leveren.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Onze bezorgpartners zorgen voor een snelle en betrouwbare levering van je bestelling. Voor vragen over
                onze producten en hulp bij de installatie bieden we uitgebreide online ondersteuning via onze website en
                klantenservice. Deze digitale aanpak maakt het verschil en zorgt ervoor dat je snel en efficiënt aan de
                slag kunt met je nieuwe AI-gadget. Door samen te werken met duurzame bezorgdiensten dragen we bij aan
                een schonere leefomgeving - volledig in lijn met onze groene visie.
              </p>
            </div>
          </section>

          {/* Transport Hub sectie */}
          <section className="mb-12 overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-800">
            <div className="flex justify-center p-4 sm:p-6">
              <div className="w-3/4">
                <Image
                  src="/images/aioranje-truck-new.png"
                  alt="AIOranje transportvisie visualisatie"
                  width={800}
                  height={600}
                  className="h-auto w-full rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Onze Logistieke Toekomstvisie</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                <em>
                  Bovenstaande visualisatie toont ons merkidentiteitsconcept voor toekomstige logistieke oplossingen.
                </em>{" "}
                In onze visie voor de toekomst van AIOranje zien we een netwerk van herkenbare oranje
                transportvoertuigen die Nederland verbinden met onze strategisch gelegen City Hubs. Dit conceptuele
                model illustreert hoe we efficiënte distributie voor ons zien.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Momenteel werken we met geselecteerde logistieke partners die onze producten van A naar B brengen, maar
                we blijven innoveren in hoe we deze samenwerking kunnen optimaliseren. Onze AI-algoritmes berekenen de
                meest efficiënte routes en leveringstijden, waardoor we nu al een uitstekende service kunnen bieden
                terwijl we werken aan onze toekomstplannen.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                In onze visie voor duurzame logistiek combineren we grotere transportvoertuigen voor lange afstanden met
                compacte elektrische bezorgvoertuigen voor de laatste kilometers. Dit two-tier bezorgconcept is ons
                ideaalbeeld om snelle en betrouwbare levering te garanderen, terwijl we tegelijkertijd onze ecologische
                voetafdruk verkleinen. Duurzaamheid is geen bijzaak voor AIOranje, maar een kernwaarde die in alle
                aspecten van ons bedrijf is verweven.
              </p>
            </div>
          </section>

          {/* Waarom we dit doen sectie */}
          <section className="mb-12 rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800 sm:p-8">
            <div className="mb-6 flex items-center">
              <span className="mr-3 text-3xl">🚀</span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                Waarom we dit <span className="text-orange-500">doen</span>
              </h2>
            </div>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Wij geloven dat technologie pas écht krachtig is als het begrijpelijk, betaalbaar en leuk wordt.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Daarom delen we onze passie door AI-producten aan te bieden die niet alleen slim zijn, maar ook
              gebruiksvriendelijk, mooi vormgegeven en direct inzetbaar in het dagelijks leven.
            </p>
          </section>

          {/* Waarom AIOranje sectie */}
          <section className="mb-12 rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800 sm:p-8">
            <div className="mb-6 flex items-center">
              <span className="mr-3 text-3xl">🟠</span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                Waarom <span className="text-orange-500">AIOranje</span>?
              </h2>
            </div>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 dark:text-gray-300">
              <li>We zijn 100% Nederlands, maar denken grensverleggend</li>
              <li>We kiezen alleen producten waar we zelf enthousiast van worden</li>
              <li>We leveren snel uit eigen voorraad</li>
              <li>En we staan altijd klaar om je te helpen — via WhatsApp, Instagram of gewoon per e-mail</li>
            </ul>
          </section>

          {/* Wat je mag verwachten sectie */}
          <section className="mb-12 rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800 sm:p-8">
            <div className="mb-6 flex items-center">
              <span className="mr-3 text-3xl">📦</span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                Wat je van ons mag <span className="text-orange-500">verwachten</span>
              </h2>
            </div>
            <p className="mb-4 text-gray-700 dark:text-gray-300">Bij AIOranje koop je geen product.</p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">Je haalt een stukje toekomst in huis.</p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Met service en betrokkenheid zoals je van een Nederlands merk mag verwachten.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              En elke maand opnieuw vind je bij ons nieuwe slimme technologie, klaar om ontdekt te worden.
            </p>
          </section>

          {/* Afsluiting */}
          <div className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-center text-white shadow-lg sm:p-8">
            <p className="text-xl font-medium sm:text-2xl">
              Welkom bij AIOranje.nl – jouw thuis voor slimme producten met een oranje hart.
            </p>
          </div>
        </div>
      </main>

      <AppDownloadBanner />
    </>
  )
}
