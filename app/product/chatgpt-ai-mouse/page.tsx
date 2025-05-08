import Image from "next/image"
import { ShoppingCart, Check } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductReviews from "@/components/product-reviews"

export default function ChatGPTAIMousePage() {
  // Reviews data
  const reviews = [
    {
      id: 1,
      author: "Jan Bakker",
      rating: 5,
      date: "28 april 2025",
      title: "Revolutionaire muis voor mijn dagelijks werk",
      content:
        "Deze AI-muis heeft mijn werkproces compleet veranderd. De vertaalfunctie is ongelooflijk handig voor mijn internationale projecten. Ik hoef niet meer tussen verschillende tools te schakelen. De voice typing functie is ook zeer nauwkeurig, zelfs met mijn accent.",
      helpful: 18,
      verified: true,
    },
    {
      id: 2,
      author: "Emma de Vries",
      rating: 4,
      date: "25 april 2025",
      title: "Geweldige functies, batterij kan beter",
      content:
        "De AI-functies zijn indrukwekkend en werken zeer goed. Vooral de code generatie is een game-changer voor mij als ontwikkelaar. Enige minpunt is de batterijduur die bij intensief gebruik korter is dan verwacht. Bij normaal gebruik gaat hij ongeveer een week mee in plaats van twee weken. Desondanks een aanrader!",
      helpful: 12,
      verified: true,
    },
    {
      id: 3,
      author: "Thomas Jansen",
      rating: 5,
      date: "20 april 2025",
      title: "Perfect voor mijn studie",
      content:
        "Als student gebruik ik deze muis dagelijks voor mijn onderzoek. De vertaalfunctie helpt me bij het lezen van internationale papers en de intelligent writing functie helpt me bij het schrijven van mijn thesis. Zeer tevreden met deze aankoop!",
      helpful: 9,
      verified: true,
    },
    {
      id: 4,
      author: "Sophie Visser",
      rating: 3,
      date: "18 april 2025",
      title: "Goede muis, maar software heeft updates nodig",
      content:
        "De hardware is uitstekend en de muis voelt premium aan. De AI-functies zijn indrukwekkend maar soms traag. De software heeft af en toe updates nodig om bugs op te lossen. Ik verwacht dat dit met toekomstige updates beter wordt.",
      helpful: 7,
      verified: true,
    },
    {
      id: 5,
      author: "Luuk Smit",
      rating: 5,
      date: "15 april 2025",
      title: "Beste aankoop van het jaar",
      content:
        "Deze muis is het geld meer dan waard. De AI-functies werken verbazingwekkend goed en de ergonomie is perfect voor lange werkdagen. De speciale AI-knop is intuïtief geplaatst en de Bluetooth-verbinding is stabiel met al mijn apparaten.",
      helpful: 15,
      verified: true,
    },
    {
      id: 6,
      author: "Fleur Mulder",
      rating: 4,
      date: "10 april 2025",
      title: "Zeer tevreden, kleine leercurve",
      content:
        "Na een korte gewenningsperiode ben ik nu zeer tevreden met deze muis. De AI-functies zijn krachtig en de voice typing is nauwkeuriger dan ik had verwacht. Het kostte me wel een paar dagen om alle functies onder de knie te krijgen.",
      helpful: 6,
      verified: true,
    },
    {
      id: 7,
      author: "Bram Peters",
      rating: 5,
      date: "5 april 2025",
      title: "Onmisbaar voor mijn werk als vertaler",
      content:
        "Als professionele vertaler is deze muis een openbaring. De realtime vertaalfunctie is ongelooflijk nauwkeurig en snel. De screenshot vertaling is perfect voor documenten en afbeeldingen. Zeer aan te raden voor iedereen die met meerdere talen werkt.",
      helpful: 11,
      verified: true,
    },
    {
      id: 8,
      author: "Lieke Jacobs",
      rating: 2,
      date: "2 april 2025",
      title: "Teleurstellende batterijduur",
      content:
        "De functies zijn indrukwekkend, maar de batterij gaat bij mij maar 4-5 dagen mee in plaats van de beloofde 3 weken. Ook reageert de muis soms traag bij het activeren van de AI-functies. Hopelijk wordt dit opgelost met een firmware-update.",
      helpful: 8,
      verified: true,
    },
    {
      id: 9,
      author: "Daan Vermeulen",
      rating: 5,
      date: "28 maart 2025",
      title: "Perfecte combinatie van comfort en technologie",
      content:
        "Deze muis ligt perfect in de hand en de AI-functies zijn een game-changer. De code generatie helpt me enorm bij mijn programmeerwerk en de multi-channel switching tussen mijn laptop, tablet en desktop werkt naadloos.",
      helpful: 14,
      verified: true,
    },
    {
      id: 10,
      author: "Iris Koning",
      rating: 4,
      date: "25 maart 2025",
      title: "Zeer nuttig voor dagelijks gebruik",
      content:
        "Ik gebruik deze muis nu een maand en ben onder de indruk van de mogelijkheden. De intelligent writing functie helpt me bij het opstellen van e-mails en rapporten. De ergonomie is goed, maar voor kleine handen misschien aan de grote kant.",
      helpful: 5,
      verified: true,
    },
    {
      id: 11,
      author: "Ruben de Jong",
      rating: 5,
      date: "20 maart 2025",
      title: "Uitstekende investering voor productiviteit",
      content:
        "Deze muis heeft mijn productiviteit aanzienlijk verhoogd. De combinatie van AI-functies en ergonomisch ontwerp is perfect. De Key PPT functie voor PowerPoint is een verborgen parel die mijn presentaties veel sneller laat maken.",
      helpful: 10,
      verified: true,
    },
    {
      id: 12,
      author: "Nina van Dijk",
      rating: 3,
      date: "15 maart 2025",
      title: "Goede muis met enkele beperkingen",
      content:
        "De AI-functies zijn indrukwekkend maar werken niet altijd even goed met alle software. Met Microsoft Office werkt alles perfect, maar met sommige andere programma's zijn er compatibiliteitsproblemen. De bouwkwaliteit is wel uitstekend.",
      helpful: 7,
      verified: true,
    },
    {
      id: 13,
      author: "Lars Hendriks",
      rating: 5,
      date: "10 maart 2025",
      title: "Perfecte muis voor programmeurs",
      content:
        "Als software ontwikkelaar is deze muis een droom. De code generatie functie bespaart me dagelijks tijd en de ergonomie voorkomt RSI-klachten tijdens lange codesessies. De DPI-instellingen zijn perfect voor precisiewerk.",
      helpful: 13,
      verified: true,
    },
    {
      id: 14,
      author: "Eva Martens",
      rating: 4,
      date: "5 maart 2025",
      title: "Zeer tevreden, kleine verbeterpunten",
      content:
        "De AI-functies zijn indrukwekkend en de bouwkwaliteit is uitstekend. De voice typing werkt verrassend goed, zelfs in een rumoerige omgeving. Enige minpunt is dat de software soms updates nodig heeft voor optimale prestaties.",
      helpful: 6,
      verified: true,
    },
    {
      id: 15,
      author: "Tim Bos",
      rating: 5,
      date: "28 februari 2025",
      title: "Beste muis die ik ooit heb gebruikt",
      content:
        "Na jaren verschillende muizen te hebben geprobeerd, is dit veruit de beste. De AI-functies zijn niet alleen een gimmick maar echt nuttig in dagelijks gebruik. De ergonomie is perfect en de batterij gaat lang mee bij normaal gebruik.",
      helpful: 16,
      verified: true,
    },
    {
      id: 16,
      author: "Sanne Vos",
      rating: 2,
      date: "25 februari 2025",
      title: "Werkt niet goed met Mac",
      content:
        "Op mijn Windows-laptop werkt alles prima, maar op mijn Mac zijn er veel problemen met de AI-functies. De Bluetooth-verbinding valt regelmatig weg en de software crasht soms. Hopelijk komt er snel een update voor betere Mac-ondersteuning.",
      helpful: 9,
      verified: true,
    },
    {
      id: 17,
      author: "Joost Kuijpers",
      rating: 5,
      date: "20 februari 2025",
      title: "Onmisbaar voor internationale communicatie",
      content:
        "Als iemand die dagelijks met internationale klanten werkt, is deze muis een openbaring. De vertaalfuncties zijn nauwkeurig en snel, en de voice typing bespaart me veel tijd. De bouwkwaliteit is uitstekend en de muis voelt premium aan.",
      helpful: 12,
      verified: true,
    },
    {
      id: 18,
      author: "Marieke Willemsen",
      rating: 4,
      date: "15 februari 2025",
      title: "Zeer tevreden na een maand gebruik",
      content:
        "Na een maand dagelijks gebruik ben ik zeer tevreden met deze muis. De AI-functies werken goed en de ergonomie is uitstekend. De batterij gaat ongeveer 2 weken mee bij intensief gebruik, wat acceptabel is gezien alle functies.",
      helpful: 8,
      verified: true,
    },
    {
      id: 19,
      author: "Vincent Gerritsen",
      rating: 5,
      date: "10 februari 2025",
      title: "Game-changer voor mijn werk",
      content:
        "Deze muis heeft mijn werkproces compleet veranderd. De combinatie van AI-functies en ergonomisch ontwerp is perfect. Vooral de intelligent writing en code generatie functies zijn ongelooflijk nuttig voor mijn dagelijkse taken.",
      helpful: 14,
      verified: true,
    },
    {
      id: 20,
      author: "Laura Bosman",
      rating: 3,
      date: "5 februari 2025",
      title: "Goede muis, maar prijzig",
      content:
        "De functies zijn indrukwekkend en werken goed, maar de prijs is aan de hoge kant. De bouwkwaliteit is uitstekend en de ergonomie is goed. Voor mensen die de AI-functies echt nodig hebben is het de investering waard.",
      helpful: 7,
      verified: true,
    },
    {
      id: 21,
      author: "Niels van der Meer",
      rating: 5,
      date: "30 januari 2025",
      title: "Perfecte muis voor dagelijks gebruik",
      content:
        "Deze muis combineert comfort met geavanceerde technologie. De AI-functies zijn intuïtief en de ergonomie is perfect voor lange werkdagen. De multi-channel switching tussen verschillende apparaten werkt naadloos.",
      helpful: 11,
      verified: true,
    },
    {
      id: 22,
      author: "Femke Dijkstra",
      rating: 4,
      date: "25 januari 2025",
      title: "Zeer tevreden, kleine leercurve",
      content:
        "Het kostte me een paar dagen om alle functies te leren kennen, maar nu kan ik niet meer zonder deze muis. De AI-functies zijn krachtig en de bouwkwaliteit is uitstekend. De batterijduur is goed bij normaal gebruik.",
      helpful: 9,
      verified: true,
    },
    {
      id: 23,
      author: "Wouter Maas",
      rating: 5,
      date: "20 januari 2025",
      title: "Beste productiviteitstool die ik heb gekocht",
      content:
        "Deze muis heeft mijn productiviteit aanzienlijk verhoogd. De AI-functies werken verrassend goed en de ergonomie is perfect. De speciale AI-knop is intuïtief geplaatst en de Bluetooth-verbinding is stabiel met al mijn apparaten.",
      helpful: 15,
      verified: true,
    },
    {
      id: 24,
      author: "Anouk Verhoeven",
      rating: 4,
      date: "15 januari 2025",
      title: "Uitstekende muis met kleine verbeterpunten",
      content:
        "De AI-functies zijn indrukwekkend en de bouwkwaliteit is uitstekend. De voice typing en vertaalfuncties werken zeer goed. Het enige minpunt is dat de software soms updates nodig heeft voor optimale prestaties.",
      helpful: 10,
      verified: true,
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pb-16 dark:bg-gray-900">
        {/* Product Header */}
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-12 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">ChatGPT AI Mouse</h1>
            <p className="mx-auto max-w-2xl text-lg">
              🖱️ Vertaal moeiteloos, werk slimmer. Eén muis. Wereldwijde communicatie.
            </p>
          </div>
        </section>

        {/* Product Overview */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* Product Images */}
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-2">
                    <Image
                      src="/images/chatgpt-ai-mouse.png"
                      alt="ChatGPT AI Mouse - hoofdafbeelding"
                      width={500}
                      height={500}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                  <div className="mt-4">
                    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-2">
                      <Image
                        src="/images/chatgpt-ai-mouse-2.png"
                        alt="ChatGPT AI Mouse - extra functies"
                        width={150}
                        height={150}
                        className="h-auto w-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    ChatGPT AI Mouse – AI-Vertaling & Slimme Besturing
                  </h2>
                  <div className="mb-4 flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">(24 beoordelingen)</span>
                  </div>

                  <div className="mb-6">
                    <span className="text-3xl font-bold text-orange-600">€39,95</span>
                    <span className="ml-2 text-sm text-gray-600 line-through dark:text-gray-400">€49,95</span>
                    <span className="ml-2 rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                      20% korting
                    </span>
                  </div>

                  <div className="mb-6 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                    <h3 className="mb-2 font-semibold">Productbeschrijving</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      De ChatGPT AI Mouse combineert de functionaliteit van een hoogwaardige draadloze muis met de
                      kracht van AI. Met ingebouwde vertaalfuncties, intelligent writing, code generatie en
                      ChatGPT-integratie is dit de perfecte tool voor professionals die internationaal werken,
                      ontwikkelaars, content creators, studenten en iedereen die zijn productiviteit wil verhogen.
                    </p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      Met één klik open je specifieke webpagina's, gebruik je voice typing, genereer je code, maak je
                      PowerPoint presentaties, vertaal je tekst, pas je DPI-instellingen aan, en schakel je tussen
                      meerdere apparaten. De speciale AI-knop geeft je directe toegang tot alle slimme functies.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="mb-2 font-semibold">Belangrijkste kenmerken</h3>
                    <ul className="space-y-2">
                      {[
                        "🌍 Realtime AI-vertaling – Vertaal direct tussen meerdere talen",
                        "🎤 Voice typing – Dicteer tekst in plaats van typen",
                        "✍️ Intelligent Writing – AI-ondersteunde tekstgeneratie",
                        "💻 Code generatie – Laat AI code schrijven en voltooien",
                        "📊 Key PPT – Snelle PowerPoint-functionaliteit",
                        "🖱️ Aanpasbare DPI-instellingen – Voor precisie op elk oppervlak",
                        "📱 Bluetooth connectiviteit – Verbind draadloos met al je apparaten",
                        "🤖 Speciale AI-knop – Directe toegang tot alle slimme functies",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="mb-2 font-semibold">Levertijd</h3>
                    <p className="text-gray-700 dark:text-gray-300">Vandaag besteld, binnen 2-3 werkdagen geleverd</p>
                  </div>

                  <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
                    <button className="inline-flex items-center justify-center rounded-md bg-orange-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      In winkelwagen
                    </button>
                    <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                      Meer informatie
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Tabs */}
        <section className="bg-white py-12 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="mb-6 border-b border-gray-200 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px">
                  <li className="mr-2">
                    <a
                      href="#specificaties"
                      className="inline-block p-4 border-b-2 border-orange-600 rounded-t-lg text-orange-600"
                    >
                      Specificaties
                    </a>
                  </li>
                  <li className="mr-2">
                    <a
                      href="#reviews"
                      className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
                    >
                      Reviews
                    </a>
                  </li>
                  <li className="mr-2">
                    <a
                      href="#faq"
                      className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              <div id="specificaties" className="mb-8">
                <h3 className="mb-4 text-xl font-bold">Technische specificaties</h3>
                <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {[
                        { name: "Afmetingen", value: "11.5 x 6.2 x 3.8 cm" },
                        { name: "Gewicht", value: "85 gram" },
                        { name: "Batterijduur", value: "Tot 3 weken bij normaal gebruik" },
                        { name: "Oplaadtijd", value: "2 uur" },
                        { name: "Connectiviteit", value: "Bluetooth 5.0, USB-C" },
                        { name: "Compatibiliteit", value: "Windows 10/11, macOS 10.15+, iOS 14+, Android 10+" },
                        {
                          name: "Ondersteunde talen",
                          value:
                            "Nederlands, Engels, Duits, Frans, Spaans, Italiaans, Portugees, Chinees, Japans, Koreaans",
                        },
                        { name: "Materiaal", value: "ABS-kunststof met soft-touch afwerking" },
                        { name: "Garantie", value: "2 jaar" },
                      ].map((spec, index) => (
                        <tr key={index}>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                            {spec.name}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-xl font-bold">Wat zit er in de doos?</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>ChatGPT AI Mouse</li>
                  <li>USB-C oplaadkabel</li>
                  <li>Gebruikershandleiding</li>
                  <li>Snelstartgids</li>
                  <li>Garantiekaart</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-12 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Klantbeoordelingen</h2>
              <ProductReviews reviews={reviews} />
            </div>
          </div>
        </section>

        {/* Features Showcase */}
        <section className="py-12 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
                Ontdek alle mogelijkheden van de ChatGPT AI Mouse
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-orange-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">AI-Vertaling</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Vertaal tekst direct in meer dan 10 talen. Selecteer tekst en druk op de AI-knop om directe
                      vertalingen te krijgen zonder van applicatie te wisselen.
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-orange-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Voice Typing</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Dicteer tekst in plaats van te typen. De ingebouwde microfoon vangt je stem op en zet deze om in
                      tekst met hoge nauwkeurigheid, waardoor je sneller kunt werken.
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-orange-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Intelligent Writing</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Laat AI je helpen bij het schrijven. Genereer ideeën, voltooi zinnen, verbeter je grammatica en
                      stijl, en maak je teksten overtuigender met één druk op de knop.
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-orange-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Code Generatie</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Verhoog je productiviteit als ontwikkelaar. Genereer code-snippets, debug problemen, en krijg
                      suggesties voor optimalisatie terwijl je programmeert.
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-orange-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Key PPT</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Maak en bewerk PowerPoint presentaties sneller dan ooit. Genereer slides, voeg content toe, en pas
                      layouts aan met speciale sneltoetsen.
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-orange-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Intelligent AI Key</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      De speciale AI-knop is het centrale punt voor alle slimme functies. Eén druk geeft je toegang tot
                      het volledige scala aan AI-mogelijkheden, afhankelijk van je huidige context.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Demo */}
        <section className="py-12 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
                Bekijk de ChatGPT AI Mouse in actie
              </h2>
              <div className="overflow-hidden rounded-xl bg-black shadow-lg">
                <div className="aspect-video">
                  <Image
                    src="/placeholder.svg?height=720&width=1280&text=ChatGPT+AI+Mouse+Video+Demo"
                    alt="ChatGPT AI Mouse Video Demo"
                    width={1280}
                    height={720}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <p className="mt-4 text-center text-sm text-gray-500">
                Bekijk onze demonstratievideo om te zien hoe de ChatGPT AI Mouse werkt in verschillende situaties.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="bg-white py-12 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
                Waarom kiezen voor de ChatGPT AI Mouse?
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Je persoonlijke tolk en assistent in één",
                    description:
                      "Vertaal teksten, stel vragen en krijg direct antwoorden zonder van apparaat te wisselen.",
                  },
                  {
                    title: "Geen extra software nodig – plug & play",
                    description: "Direct gebruiksklaar na aansluiting, zonder ingewikkelde installatieprocedures.",
                  },
                  {
                    title: "Perfect voor thuiswerken en internationaal zakendoen",
                    description: "Communiceer moeiteloos met internationale collega's en klanten zonder taalbarrières.",
                  },
                  {
                    title: "AI, vertaling en ergonomie in één stijlvol product",
                    description: "Combineert geavanceerde technologie met comfort voor dagelijks gebruik.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900"
                  >
                    <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-center text-white shadow-lg">
              <h2 className="mb-4 text-2xl font-bold">Bestel nu en ontvang gratis verzending</h2>
              <p className="mb-6">
                Vandaag besteld, binnen 2-3 werkdagen geleverd. Inclusief oplaadkabel en handleiding.
              </p>
              <button className="inline-flex items-center rounded-md bg-white px-8 py-3 text-base font-medium text-orange-600 transition-colors hover:bg-orange-50">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Nu bestellen voor €39,95
              </button>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-12 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
              Gerelateerde producten
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "AI Smart Desk Organizer",
                  price: "€79,95",
                  image: "/placeholder.svg?height=300&width=300&text=AI+Smart+Desk+Organizer",
                },
                {
                  title: "AI Document Scanner Pro",
                  price: "€129,99",
                  image: "/placeholder.svg?height=300&width=300&text=AI+Document+Scanner+Pro",
                },
                {
                  title: "Smart AI Meeting Assistant",
                  price: "€149,95",
                  image: "/placeholder.svg?height=300&width=300&text=Smart+AI+Meeting+Assistant",
                },
                {
                  title: "AI Smart Selfie Stick",
                  price: "€49,95",
                  image: "/placeholder.svg?height=300&width=300&text=AI+Smart+Selfie+Stick",
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
                      width={300}
                      height={300}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">{product.title}</h3>
                    <p className="mb-4 text-lg font-bold text-orange-500">{product.price}</p>
                    <button className="mt-auto flex items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600">
                      Bekijk product
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
