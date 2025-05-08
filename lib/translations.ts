export type Language = "nl" | "en" | "de" | "fr" | "es" | "it" | "pl" | "sv"

export type TranslationKey =
  | "home"
  | "contact"
  | "language"
  | "cart"
  | "openMenu"
  | "closeMenu"
  | "search"
  | "products"
  | "about"
  | "addToCart"
  | "checkout"
  // Hero section
  | "welcome"
  | "goodMorning"
  | "goodAfternoon"
  | "goodEvening"
  | "goodNight"
  | "heroSubtitle"
  // Categories
  | "ourCategories"
  | "discoverProducts"
  | "aiForChildren"
  | "aiForChildrenDesc"
  | "aiForTeens"
  | "aiForTeensDesc"
  | "aiForAdults"
  | "aiForAdultsDesc"
  // Products
  | "ourProducts"
  | "discoverGadgets"
  | "description"
  | "features"
  | "smartRobotDog"
  | "smartRobotDogDesc"
  | "aiSelfieDrone"
  | "aiSelfieDroneDesc"
  | "smartHomeAssistant"
  | "smartHomeAssistantDesc"
  | "aiTranslator"
  | "aiTranslatorDesc"
  | "educationalRobot"
  | "educationalRobotDesc"
  | "aiFitnessTracker"
  | "aiFitnessTrackerDesc"
  | "aiSmartSelfieStick"
  | "aiSmartSelfieStickDesc"
  // New products section
  | "newProductsMonthly"
  | "innovationText"
  | "noNewsletters"
  | "stayUpdated"
  | "followInstagram"
  | "discoverLaunches"
  | "followOnInstagram"
  | "viewNewProducts"
  // App banner
  | "downloadApp"
  | "appSubtitle"
  | "appStore"
  | "googlePlay"
  // Customer service
  | "aiCustomerService"
  | "customerServiceDesc"
  | "reachUs"
  | "chatOnWebsite"
  | "email"
  | "whatsappService"
  | "customerServiceHours"
  // About section
  | "aboutUs"
  | "aboutSlogan"
  | "aboutText1"
  | "aboutText2"
  | "whyWeDo"
  | "whyWeDoText"
  | "whyAIOranje"
  | "whyAIOranjeText"
  // Footer
  | "navigation"
  | "categories"
  | "aiForChildren"
  | "aiForTeens"
  | "aiForAdults"
  | "shippingPromise"
  | "shippingDays"
  | "shippingText"
  | "followUs"
  | "newsletter"
  | "stayUpdatedProducts"
  | "yourEmail"
  | "subscribe"
  | "allRightsReserved"
  | "privacyPolicy"
  | "termsConditions"
  | "cookiePolicy"
  // Chat widget
  | "askQuestion"
  | "chatWithUs"
  | "helpYouWith"
  | "lauraTyping"
  | "send"
  | "typeQuestion"
  | "welcomeLaura"
  | "lauraIntro"
  | "lauraCapabilities"
  | "frequentlyAskedQuestions"
  | "closeChat"
  | "openChat"
  | "lauraFromAIOranje"

export const languageNames: Record<Language, string> = {
  nl: "Nederlands",
  en: "English",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  it: "Italiano",
  pl: "Polski",
  sv: "Svenska",
}

export const translations: Record<Language, Record<TranslationKey, string>> = {
  nl: {
    // Header
    home: "Home",
    contact: "Contact",
    language: "Taal",
    cart: "Winkelwagen",
    openMenu: "Menu openen",
    closeMenu: "Menu sluiten",
    search: "Zoeken",
    products: "Producten",
    about: "Over ons",
    addToCart: "In winkelwagen",
    checkout: "Afrekenen",

    // Hero section
    welcome: "Welkom!",
    goodMorning: "Goedemorgen",
    goodAfternoon: "Goedemiddag",
    goodEvening: "Goedenavond",
    goodNight: "Goede nacht",
    heroSubtitle: "Welkom bij AIOranje – dé winkel voor slimme AI-gadgets voor jong en oud.",

    // Categories
    ourCategories: "Onze Categorieën",
    discoverProducts: "Ontdek onze AI-producten voor elke leeftijd en behoefte",
    aiForChildren: "AI voor Kinderen",
    aiForChildrenDesc: "Speelgoed en robots die kinderen spelenderwijs technologie laten ontdekken.",
    aiForTeens: "AI voor Jongeren",
    aiForTeensDesc: "Trendy AI-gadgets voor tieners, van selfie-sticks tot slimme camera's.",
    aiForAdults: "AI voor Volwassenen",
    aiForAdultsDesc: "Handige AI-tools en accessoires voor thuis en op kantoor.",

    // Products
    ourProducts: "Onze Producten",
    discoverGadgets: "Ontdek onze nieuwste AI-gadgets en slimme technologie",
    description: "Omschrijving",
    features: "Kenmerken",
    smartRobotDog: "Slimme Robot Hond",
    smartRobotDogDesc:
      "Deze interactieve robot hond reageert op commando's, leert nieuwe trucjes en is de perfecte speelkameraad voor kinderen.",
    aiSelfieDrone: "AI Selfie Drone",
    aiSelfieDroneDesc:
      "Maak perfecte selfies en video's met deze compacte drone die je gezicht volgt en automatisch de beste hoek kiest.",
    smartHomeAssistant: "Slimme Thuisassistent",
    smartHomeAssistantDesc:
      "Deze AI-assistent beheert je smart home, beantwoordt vragen en helpt je bij dagelijkse taken met geavanceerde spraakherkenning.",
    aiTranslator: "AI Taalvertaler",
    aiTranslatorDesc:
      "Vertaal gesprekken in realtime met deze draagbare vertaler die meer dan 40 talen ondersteunt en offline werkt.",
    educationalRobot: "Slimme Leerrobot",
    educationalRobotDesc:
      "Deze educatieve robot helpt kinderen bij het leren programmeren, wiskunde en logisch denken op een speelse manier.",
    aiFitnessTracker: "AI Fitnesstracker",
    aiFitnessTrackerDesc:
      "Deze geavanceerde fitnesstracker analyseert je bewegingen en geeft persoonlijk advies om je workouts te optimaliseren.",
    aiSmartSelfieStick: "AI Smart Selfie Stick",
    aiSmartSelfieStickDesc:
      "Maak moeiteloos professionele video's en foto's met deze slimme selfie stick. Dankzij de 360° rotatie en AI-gezichtsherkenning blijf je altijd perfect in beeld.",

    // New products section
    newProductsMonthly: "Elke maand nieuwe slimme AI-producten",
    innovationText:
      "Bij AIOranje draait alles om innovatie.\nWe voegen elke maand nieuwe slimme producten toe aan onze collectie.",
    noNewsletters: "We sturen je géén opdringerige nieuwsbrieven.",
    stayUpdated: "Maar wil je wél op de hoogte blijven?",
    followInstagram: "Volg ons dan op Instagram — daar zijn we actief!",
    discoverLaunches: "Ontdek productlanceringen, sneak peeks, behind-the-scenes en meer.",
    followOnInstagram: "Volg ons op Instagram",
    viewNewProducts: "Bekijk nieuwe producten",

    // App banner
    downloadApp: "📲 Download nu onze nieuwe app!",
    appSubtitle: "🔗 AIOranje.nl – Alles voor de slimme toekomst",
    appStore: "App Store",
    googlePlay: "Google Play",

    // Customer service
    aiCustomerService: "Onze AI-klantenservice staat voor u klaar",
    customerServiceDesc:
      "Heeft u vragen over onze producten of diensten? Onze geavanceerde AI-klantenservice assistenten helpen u graag verder, 24/7 en met de persoonlijke touch die u van een mens zou verwachten.",
    reachUs: "U kunt ons bereiken via:",
    chatOnWebsite: "De chat rechtsonder op deze website",
    email: "E-mail: info@aioranje.nl",
    whatsappService: "WhatsApp klantenservice",
    customerServiceHours: "Onze AI-klantenservice is 24/7 bereikbaar, met extra ondersteuning van 9:00 tot 22:00 uur.",

    // About section
    aboutUs: "Over ons",
    aboutSlogan: "Innovatieve AI-technologie met Nederlandse service.",
    aboutText1:
      "Bij AIOranje.nl combineren we geavanceerde AI-technologie met een innovatief bedrijfsmodel. Onze volledig geautomatiseerde systemen en AI-gestuurde processen stellen ons in staat om met een minimale fysieke bezetting maximale service te bieden. Ons team bestaat uit de meest geavanceerde digitale medewerkers, aangestuurd door de nieuwste AI-technologie.",
    aboutText2:
      "Van slimme oordopjes die realtime vertalen tot educatieve robothonden voor kinderen — onze AI-selectiealgoritmes kiezen zorgvuldig de meest innovatieve producten, terwijl onze digitale assistenten zorgen voor een naadloze klantervaring van bestelling tot bezorging.",
    whyWeDo: "Waarom we dit doen",
    whyWeDoText: "Wij geloven dat technologie pas écht krachtig is als het begrijpelijk, betaalbaar en leuk wordt.",
    whyAIOranje: "Waarom AIOranje?",
    whyAIOranjeText:
      "We zijn 100% Nederlands, denken grensverleggend, en kiezen alleen producten waar we zelf enthousiast van worden.",

    // Footer
    navigation: "Navigatie",
    categories: "Categorieën",
    shippingPromise: "Onze Verzendbelofte",
    shippingDays: "Bij AIOranje gaat elke donderdag, vrijdag en zaterdag een verse lading AI-innovatie de deur uit!",
    shippingText: "Zo heb je jouw slimme AI-gadget precies op tijd voor het weekend in huis!",
    followUs: "Volg ons",
    newsletter: "Nieuwsbrief",
    stayUpdatedProducts: "Blijf op de hoogte van onze nieuwste producten",
    yourEmail: "Je e-mailadres",
    subscribe: "Aanmelden",
    allRightsReserved: "© 2025 AIOranje.nl – Alle rechten voorbehouden.",
    privacyPolicy: "Privacybeleid",
    termsConditions: "Algemene voorwaarden",
    cookiePolicy: "Cookiebeleid",
    // Chat widget
    askQuestion: "Stel hier uw vraag",
    chatWithUs: "Chat met ons",
    helpYouWith: "Hoe kan ik je vandaag helpen?",
    lauraTyping: "Laura typt...",
    send: "Verstuur",
    typeQuestion: "Typ je vraag aan Laura...",
    welcomeLaura: "Hallo, ik ben Laura de Vries!",
    lauraIntro:
      "Als AI-klantenservice specialist bij AIOranje help ik je graag met al je vragen over onze producten en diensten.",
    lauraCapabilities:
      "Met mijn geavanceerde kennis van technologie en mijn programmering voor AI-producten kan ik je persoonlijk advies geven over welke slimme gadgets het beste bij jouw behoeften passen.",
    frequentlyAskedQuestions: "Veelgestelde vragen:",
    closeChat: "Sluit chat",
    openChat: "Open chat",
    lauraFromAIOranje: "Laura de Vries van AIOranje",
  },

  en: {
    // Header
    home: "Home",
    contact: "Contact",
    language: "Language",
    cart: "Shopping Cart",
    openMenu: "Open Menu",
    closeMenu: "Close Menu",
    search: "Search",
    products: "Products",
    about: "About Us",
    addToCart: "Add to Cart",
    checkout: "Checkout",

    // Hero section
    welcome: "Welcome!",
    goodMorning: "Good Morning",
    goodAfternoon: "Good Afternoon",
    goodEvening: "Good Evening",
    goodNight: "Good Night",
    heroSubtitle: "Welcome to AIOranje – the store for smart AI gadgets for young and old.",

    // Categories
    ourCategories: "Our Categories",
    discoverProducts: "Discover our AI products for every age and need",
    aiForChildren: "AI for Children",
    aiForChildrenDesc: "Toys and robots that let children discover technology through play.",
    aiForTeens: "AI for Teens",
    aiForTeensDesc: "Trendy AI gadgets for teenagers, from selfie sticks to smart cameras.",
    aiForAdults: "AI for Adults",
    aiForAdultsDesc: "Useful AI tools and accessories for home and office.",

    // Products
    ourProducts: "Our Products",
    discoverGadgets: "Discover our latest AI gadgets and smart technology",
    description: "Description",
    features: "Features",
    smartRobotDog: "Smart Robot Dog",
    smartRobotDogDesc:
      "This interactive robot dog responds to commands, learns new tricks, and is the perfect playmate for children.",
    aiSelfieDrone: "AI Selfie Drone",
    aiSelfieDroneDesc:
      "Take perfect selfies and videos with this compact drone that follows your face and automatically chooses the best angle.",
    smartHomeAssistant: "Smart Home Assistant",
    smartHomeAssistantDesc:
      "This AI assistant manages your smart home, answers questions, and helps with daily tasks using advanced speech recognition.",
    aiTranslator: "AI Language Translator",
    aiTranslatorDesc:
      "Translate conversations in real-time with this portable translator that supports more than 40 languages and works offline.",
    educationalRobot: "Educational Robot",
    educationalRobotDesc:
      "This educational robot helps children learn programming, math, and logical thinking in a playful way.",
    aiFitnessTracker: "AI Fitness Tracker",
    aiFitnessTrackerDesc:
      "This advanced fitness tracker analyzes your movements and provides personalized advice to optimize your workouts.",
    aiSmartSelfieStick: "AI Smart Selfie Stick",
    aiSmartSelfieStickDesc:
      "Effortlessly create professional videos and photos with this smart selfie stick. Thanks to 360° rotation and AI facial recognition, you always stay perfectly in frame.",

    // New products section
    newProductsMonthly: "New smart AI products every month",
    innovationText: "At AIOranje, it's all about innovation.\nWe add new smart products to our collection every month.",
    noNewsletters: "We don't send you pushy newsletters.",
    stayUpdated: "But do you want to stay updated?",
    followInstagram: "Then follow us on Instagram — that's where we're active!",
    discoverLaunches: "Discover product launches, sneak peeks, behind-the-scenes and more.",
    followOnInstagram: "Follow us on Instagram",
    viewNewProducts: "View new products",

    // App banner
    downloadApp: "📲 Download our new app now!",
    appSubtitle: "🔗 AIOranje.nl – Everything for the smart future",
    appStore: "App Store",
    googlePlay: "Google Play",

    // Customer service
    aiCustomerService: "Our AI customer service is ready to help you",
    customerServiceDesc:
      "Do you have questions about our products or services? Our advanced AI customer service assistants are happy to help you, 24/7 and with the personal touch you would expect from a human.",
    reachUs: "You can reach us via:",
    chatOnWebsite: "The chat at the bottom right of this website",
    email: "Email: info@aioranje.nl",
    whatsappService: "WhatsApp customer service",
    customerServiceHours: "Our AI customer service is available 24/7, with extra support from 9:00 AM to 10:00 PM.",

    // About section
    aboutUs: "About us",
    aboutSlogan: "Innovative AI technology with Dutch service.",
    aboutText1:
      "At AIOranje.nl, we combine advanced AI technology with an innovative business model. Our fully automated systems and AI-driven processes allow us to provide maximum service with minimal physical staffing. Our team consists of the most advanced digital employees, powered by the latest AI technology.",
    aboutText2:
      "From smart earbuds that translate in real-time to educational robot dogs for children — our AI selection algorithms carefully choose the most innovative products, while our digital assistants ensure a seamless customer experience from order to delivery.",
    whyWeDo: "Why we do this",
    whyWeDoText:
      "We believe that technology only becomes truly powerful when it's understandable, affordable, and fun.",
    whyAIOranje: "Why AIOranje?",
    whyAIOranjeText:
      "We are 100% Dutch, think outside the box, and only choose products that we are enthusiastic about ourselves.",

    // Footer
    navigation: "Navigation",
    categories: "Categories",
    shippingPromise: "Our Shipping Promise",
    shippingDays: "At AIOranje, a fresh batch of AI innovation goes out every Thursday, Friday, and Saturday!",
    shippingText: "This way, you'll have your smart AI gadget just in time for the weekend!",
    followUs: "Follow us",
    newsletter: "Newsletter",
    stayUpdatedProducts: "Stay updated on our latest products",
    yourEmail: "Your email address",
    subscribe: "Subscribe",
    allRightsReserved: "© 2025 AIOranje.nl – All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsConditions: "Terms and Conditions",
    cookiePolicy: "Cookie Policy",
    // Chat widget
    askQuestion: "Ask your question here",
    chatWithUs: "Chat with us",
    helpYouWith: "How can I help you today?",
    lauraTyping: "Laura is typing...",
    send: "Send",
    typeQuestion: "Type your question to Laura...",
    welcomeLaura: "Hello, I'm Laura de Vries!",
    lauraIntro:
      "As an AI customer service specialist at AIOranje, I'm happy to help you with all your questions about our products and services.",
    lauraCapabilities:
      "With my advanced knowledge of technology and my programming for AI products, I can give you personal advice on which smart gadgets best suit your needs.",
    frequentlyAskedQuestions: "Frequently asked questions:",
    closeChat: "Close chat",
    openChat: "Open chat",
    lauraFromAIOranje: "Laura de Vries from AIOranje",
  },

  de: {
    // Header
    home: "Startseite",
    contact: "Kontakt",
    language: "Sprache",
    cart: "Warenkorb",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    search: "Suchen",
    products: "Produkte",
    about: "Über uns",
    addToCart: "In den Warenkorb",
    checkout: "Zur Kasse",

    // Hero section
    welcome: "Willkommen!",
    goodMorning: "Guten Morgen",
    goodAfternoon: "Guten Tag",
    goodEvening: "Guten Abend",
    goodNight: "Gute Nacht",
    heroSubtitle: "Willkommen bei AIOranje – dem Geschäft für intelligente KI-Gadgets für Jung und Alt.",

    // Categories
    ourCategories: "Unsere Kategorien",
    discoverProducts: "Entdecken Sie unsere KI-Produkte für jedes Alter und jeden Bedarf",
    aiForChildren: "KI für Kinder",
    aiForChildrenDesc: "Spielzeug und Roboter, die Kindern spielerisch Technologie entdecken lassen.",
    aiForTeens: "KI für Jugendliche",
    aiForTeensDesc: "Trendige KI-Gadgets für Teenager, von Selfie-Sticks bis hin zu intelligenten Kameras.",
    aiForAdults: "KI für Erwachsene",
    aiForAdultsDesc: "Nützliche KI-Tools und Zubehör für zu Hause und im Büro.",

    // Products
    ourProducts: "Unsere Produkte",
    discoverGadgets: "Entdecken Sie unsere neuesten KI-Gadgets und intelligente Technologie",
    description: "Beschreibung",
    features: "Eigenschaften",
    smartRobotDog: "Intelligenter Roboterhund",
    smartRobotDogDesc:
      "Dieser interaktive Roboterhund reagiert auf Befehle, lernt neue Tricks und ist der perfekte Spielkamerad für Kinder.",
    aiSelfieDrone: "KI-Selfie-Drohne",
    aiSelfieDroneDesc:
      "Machen Sie perfekte Selfies und Videos mit dieser kompakten Drohne, die Ihr Gesicht verfolgt und automatisch den besten Winkel wählt.",
    smartHomeAssistant: "Intelligenter Heimassistent",
    smartHomeAssistantDesc:
      "Dieser KI-Assistent verwaltet Ihr Smart Home, beantwortet Fragen und hilft bei täglichen Aufgaben mit fortschrittlicher Spracherkennung.",
    aiTranslator: "KI-Sprachübersetzer",
    aiTranslatorDesc:
      "Übersetzen Sie Gespräche in Echtzeit mit diesem tragbaren Übersetzer, der mehr als 40 Sprachen unterstützt und offline funktioniert.",
    educationalRobot: "Lernroboter",
    educationalRobotDesc:
      "Dieser Lernroboter hilft Kindern, Programmieren, Mathematik und logisches Denken auf spielerische Weise zu lernen.",
    aiFitnessTracker: "KI-Fitness-Tracker",
    aiFitnessTrackerDesc:
      "Dieser fortschrittliche Fitness-Tracker analysiert Ihre Bewegungen und gibt personalisierte Ratschläge zur Optimierung Ihrer Workouts.",
    aiSmartSelfieStick: "KI-Smart-Selfie-Stick",
    aiSmartSelfieStickDesc:
      "Erstellen Sie mühelos professionelle Videos und Fotos mit diesem intelligenten Selfie-Stick. Dank 360°-Rotation und KI-Gesichtserkennung bleiben Sie immer perfekt im Bild.",

    // New products section
    newProductsMonthly: "Jeden Monat neue intelligente KI-Produkte",
    innovationText:
      "Bei AIOranje dreht sich alles um Innovation.\nWir fügen jeden Monat neue intelligente Produkte zu unserer Kollektion hinzu.",
    noNewsletters: "Wir senden Ihnen KEINE aufdringlichen Newsletter.",
    stayUpdated: "Aber möchten Sie trotzdem auf dem Laufenden bleiben?",
    followInstagram: "Dann folgen Sie uns auf Instagram — dort sind wir aktiv!",
    discoverLaunches: "Entdecken Sie Produkteinführungen, Sneak Peeks, Blicke hinter die Kulissen und mehr.",
    followOnInstagram: "Folgen Sie uns auf Instagram",
    viewNewProducts: "Neue Produkte ansehen",

    // App banner
    downloadApp: "📲 Laden Sie jetzt unsere neue App herunter!",
    appSubtitle: "🔗 AIOranje.nl – Alles für die intelligente Zukunft",
    appStore: "App Store",
    googlePlay: "Google Play",

    // Customer service
    aiCustomerService: "Unser KI-Kundenservice steht Ihnen zur Verfügung",
    customerServiceDesc:
      "Haben Sie Fragen zu unseren Produkten oder Dienstleistungen? Unsere fortschrittlichen KI-Kundendienstassistenten helfen Ihnen gerne weiter, rund um die Uhr und mit dem persönlichen Touch, den Sie von einem Menschen erwarten würden.",
    reachUs: "Sie können uns erreichen über:",
    chatOnWebsite: "Den Chat unten rechts auf dieser Website",
    email: "E-Mail: info@aioranje.nl",
    whatsappService: "WhatsApp-Kundenservice",
    customerServiceHours:
      "Unser KI-Kundenservice ist rund um die Uhr erreichbar, mit zusätzlicher Unterstützung von 9:00 bis 22:00 Uhr.",

    // About section
    aboutUs: "Über uns",
    aboutSlogan: "Innovative KI-Technologie mit niederländischem Service.",
    aboutText1:
      "Bei AIOranje.nl kombinieren wir fortschrittliche KI-Technologie mit einem innovativen Geschäftsmodell. Unsere vollautomatisierten Systeme und KI-gesteuerten Prozesse ermöglichen es uns, mit minimaler physischer Besetzung maximalen Service zu bieten. Unser Team besteht aus den fortschrittlichsten digitalen Mitarbeitern, angetrieben von der neuesten KI-Technologie.",
    aboutText2:
      "Von intelligenten Ohrhörern, die in Echtzeit übersetzen, bis hin zu lehrreichen Roboterhunden für Kinder — unsere KI-Auswahlalgorithmen wählen sorgfältig die innovativsten Produkte aus, während unsere digitalen Assistenten für ein nahtloses Kundenerlebnis von der Bestellung bis zur Lieferung sorgen.",
    whyWeDo: "Warum wir das tun",
    whyWeDoText:
      "Wir glauben, dass Technologie erst dann wirklich mächtig wird, wenn sie verständlich, erschwinglich und unterhaltsam ist.",
    whyAIOranje: "Warum AIOranje?",
    whyAIOranjeText:
      "Wir sind 100% niederländisch, denken grenzüberschreitend und wählen nur Produkte aus, für die wir uns selbst begeistern.",

    // Footer
    navigation: "Navigation",
    categories: "Kategorien",
    shippingPromise: "Unser Versandversprechen",
    shippingDays: "Bei AIOranje geht jeden Donnerstag, Freitag und Samstag eine frische Ladung KI-Innovation raus!",
    shippingText: "So haben Sie Ihr intelligentes KI-Gadget genau rechtzeitig zum Wochenende zu Hause!",
    followUs: "Folgen Sie uns",
    newsletter: "Newsletter",
    stayUpdatedProducts: "Bleiben Sie über unsere neuesten Produkte informiert",
    yourEmail: "Ihre E-Mail-Adresse",
    subscribe: "Anmelden",
    allRightsReserved: "© 2025 AIOranje.nl – Alle Rechte vorbehalten.",
    privacyPolicy: "Datenschutzrichtlinie",
    termsConditions: "Allgemeine Geschäftsbedingungen",
    cookiePolicy: "Cookie-Richtlinie",
    // Chat widget
    askQuestion: "Stellen Sie hier Ihre Frage",
    chatWithUs: "Chatten Sie mit uns",
    helpYouWith: "Wie kann ich Ihnen heute helfen?",
    lauraTyping: "Laura schreibt...",
    send: "Senden",
    typeQuestion: "Schreiben Sie Ihre Frage an Laura...",
    welcomeLaura: "Hallo, ich bin Laura de Vries!",
    lauraIntro:
      "Als KI-Kundendienstspezialistin bei AIOranje helfe ich Ihnen gerne bei allen Fragen zu unseren Produkten und Dienstleistungen.",
    lauraCapabilities:
      "Mit meinem fortgeschrittenen Wissen über Technologie und meiner Programmierung für KI-Produkte kann ich Ihnen persönliche Ratschläge geben, welche intelligenten Gadgets am besten zu Ihren Bedürfnissen passen.",
    frequentlyAskedQuestions: "Häufig gestellte Fragen:",
    closeChat: "Chat schließen",
    openChat: "Chat öffnen",
    lauraFromAIOranje: "Laura de Vries von AIOranje",
  },

  fr: {
    // Header
    home: "Accueil",
    contact: "Contact",
    language: "Langue",
    cart: "Panier",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    search: "Rechercher",
    products: "Produits",
    about: "À propos",
    addToCart: "Ajouter au panier",
    checkout: "Commander",

    // Hero section
    welcome: "Bienvenue !",
    goodMorning: "Bonjour",
    goodAfternoon: "Bon après-midi",
    goodEvening: "Bonsoir",
    goodNight: "Bonne nuit",
    heroSubtitle: "Bienvenue chez AIOranje – le magasin de gadgets IA intelligents pour petits et grands.",

    // Categories
    ourCategories: "Nos Catégories",
    discoverProducts: "Découvrez nos produits IA pour tous les âges et tous les besoins",
    aiForChildren: "IA pour Enfants",
    aiForChildrenDesc: "Jouets et robots qui permettent aux enfants de découvrir la technologie en s'amusant.",
    aiForTeens: "IA pour Adolescents",
    aiForTeensDesc: "Gadgets IA tendance pour adolescents, des perches à selfie aux caméras intelligentes.",
    aiForAdults: "IA pour Adultes",
    aiForAdultsDesc: "Outils et accessoires IA utiles pour la maison et le bureau.",

    // Products
    ourProducts: "Nos Produits",
    discoverGadgets: "Découvrez nos derniers gadgets IA et technologies intelligentes",
    description: "Description",
    features: "Caractéristiques",
    smartRobotDog: "Chien Robot Intelligent",
    smartRobotDogDesc:
      "Ce chien robot interactif répond aux commandes, apprend de nouveaux tours et est le compagnon de jeu parfait pour les enfants.",
    aiSelfieDrone: "Drone Selfie IA",
    aiSelfieDroneDesc:
      "Prenez des selfies et des vidéos parfaits avec ce drone compact qui suit votre visage et choisit automatiquement le meilleur angle.",
    smartHomeAssistant: "Assistant Maison Intelligente",
    smartHomeAssistantDesc:
      "Cet assistant IA gère votre maison intelligente, répond aux questions et vous aide dans vos tâches quotidiennes grâce à la reconnaissance vocale avancée.",
    aiTranslator: "Traducteur Linguistique IA",
    aiTranslatorDesc:
      "Traduisez des conversations en temps réel avec ce traducteur portable qui prend en charge plus de 40 langues et fonctionne hors ligne.",
    educationalRobot: "Robot Éducatif",
    educationalRobotDesc:
      "Ce robot éducatif aide les enfants à apprendre la programmation, les mathématiques et la pensée logique de manière ludique.",
    aiFitnessTracker: "Tracker Fitness IA",
    aiFitnessTrackerDesc:
      "Ce tracker fitness avancé analyse vos mouvements et fournit des conseils personnalisés pour optimiser vos entraînements.",
    aiSmartSelfieStick: "Perche à Selfie Intelligente IA",
    aiSmartSelfieStickDesc:
      "Créez sans effort des vidéos et des photos professionnelles avec cette perche à selfie intelligente. Grâce à la rotation à 360° et à la reconnaissance faciale IA, vous restez toujours parfaitement dans le cadre.",

    // New products section
    newProductsMonthly: "Nouveaux produits IA intelligents chaque mois",
    innovationText:
      "Chez AIOranje, tout tourne autour de l'innovation.\nNous ajoutons chaque mois de nouveaux produits intelligents à notre collection.",
    noNewsletters: "Nous ne vous envoyons PAS de newsletters intrusives.",
    stayUpdated: "Mais souhaitez-vous rester informé ?",
    followInstagram: "Alors suivez-nous sur Instagram — c'est là que nous sommes actifs !",
    discoverLaunches: "Découvrez les lancements de produits, les aperçus exclusifs, les coulisses et plus encore.",
    followOnInstagram: "Suivez-nous sur Instagram",
    viewNewProducts: "Voir les nouveaux produits",

    // App banner
    downloadApp: "📲 Téléchargez notre nouvelle application maintenant !",
    appSubtitle: "🔗 AIOranje.nl – Tout pour l'avenir intelligent",
    appStore: "App Store",
    googlePlay: "Google Play",

    // Customer service
    aiCustomerService: "Notre service client IA est prêt à vous aider",
    customerServiceDesc:
      "Vous avez des questions sur nos produits ou services ? Nos assistants de service client IA avancés sont heureux de vous aider, 24h/24 et 7j/7, avec la touche personnelle que vous attendriez d'un humain.",
    reachUs: "Vous pouvez nous joindre via :",
    chatOnWebsite: "Le chat en bas à droite de ce site",
    email: "Email : info@aioranje.nl",
    whatsappService: "Service client WhatsApp",
    customerServiceHours:
      "Notre service client IA est disponible 24h/24 et 7j/7, avec un support supplémentaire de 9h00 à 22h00.",

    // About section
    aboutUs: "À propos de nous",
    aboutSlogan: "Technologie IA innovante avec service néerlandais.",
    aboutText1:
      "Chez AIOranje.nl, nous combinons la technologie IA avancée avec un modèle d'entreprise innovant. Nos systèmes entièrement automatisés et nos processus pilotés par l'IA nous permettent de fournir un service maximal avec un personnel physique minimal. Notre équipe est composée des employés numériques les plus avancés, alimentés par la dernière technologie IA.",
    aboutText2:
      "Des écouteurs intelligents qui traduisent en temps réel aux chiens robots éducatifs pour enfants — nos algorithmes de sélection IA choisissent soigneusement les produits les plus innovants, tandis que nos assistants numériques assurent une expérience client sans faille de la commande à la livraison.",
    whyWeDo: "Pourquoi nous faisons cela",
    whyWeDoText:
      "Nous croyons que la technologie ne devient vraiment puissante que lorsqu'elle est compréhensible, abordable et amusante.",
    whyAIOranje: "Pourquoi AIOranje ?",
    whyAIOranjeText:
      "Nous sommes 100% néerlandais, pensons hors des sentiers battus et ne choisissons que des produits qui nous enthousiasment nous-mêmes.",

    // Footer
    navigation: "Navigation",
    categories: "Catégories",
    shippingPromise: "Notre Promesse d'Expédition",
    shippingDays: "Chez AIOranje, un nouveau lot d'innovation IA part chaque jeudi, vendredi et samedi !",
    shippingText: "Ainsi, vous aurez votre gadget IA intelligent juste à temps pour le week-end !",
    followUs: "Suivez-nous",
    newsletter: "Newsletter",
    stayUpdatedProducts: "Restez informé de nos derniers produits",
    yourEmail: "Votre adresse e-mail",
    subscribe: "S'abonner",
    allRightsReserved: "© 2025 AIOranje.nl – Tous droits réservés.",
    privacyPolicy: "Politique de Confidentialité",
    termsConditions: "Conditions Générales",
    cookiePolicy: "Politique des Cookies",
    // Chat widget
    askQuestion: "Posez votre question ici",
    chatWithUs: "Chattez avec nous",
    helpYouWith: "Comment puis-je vous aider aujourd'hui ?",
    lauraTyping: "Laura est en train d'écrire...",
    send: "Envoyer",
    typeQuestion: "Tapez votre question à Laura...",
    welcomeLaura: "Bonjour, je suis Laura de Vries !",
    lauraIntro:
      "En tant que spécialiste du service client IA chez AIOranje, je suis heureuse de vous aider avec toutes vos questions sur nos produits et services.",
    lauraCapabilities:
      "Avec ma connaissance avancée de la technologie et ma programmation pour les produits IA, je peux vous donner des conseils personnels sur les gadgets intelligents qui conviennent le mieux à vos besoins.",
    frequentlyAskedQuestions: "Questions fréquemment posées :",
    closeChat: "Fermer le chat",
    openChat: "Ouvrir le chat",
    lauraFromAIOranje: "Laura de Vries d'AIOranje",
  },

  es: {
    // Header
    home: "Inicio",
    contact: "Contacto",
    language: "Idioma",
    cart: "Carrito",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    search: "Buscar",
    products: "Productos",
    about: "Sobre nosotros",
    addToCart: "Añadir al carrito",
    checkout: "Finalizar compra",

    // Hero section
    welcome: "¡Bienvenido!",
    goodMorning: "Buenos días",
    goodAfternoon: "Buenas tardes",
    goodEvening: "Buenas noches",
    goodNight: "Buenas noches",
    heroSubtitle: "Bienvenido a AIOranje – la tienda de gadgets inteligentes de IA para jóvenes y mayores.",

    // Categories
    ourCategories: "Nuestras Categorías",
    discoverProducts: "Descubre nuestros productos de IA para todas las edades y necesidades",
    aiForChildren: "IA para Niños",
    aiForChildrenDesc: "Juguetes y robots que permiten a los niños descubrir la tecnología jugando.",
    aiForTeens: "IA para Jóvenes",
    aiForTeensDesc: "Gadgets de IA de moda para adolescentes, desde palos selfie hasta cámaras inteligentes.",
    aiForAdults: "IA para Adultos",
    aiForAdultsDesc: "Herramientas y accesorios de IA útiles para el hogar y la oficina.",

    // Products
    ourProducts: "Nuestros Productos",
    discoverGadgets: "Descubre nuestros últimos gadgets de IA y tecnología inteligente",
    description: "Descripción",
    features: "Características",
    smartRobotDog: "Perro Robot Inteligente",
    smartRobotDogDesc:
      "Este perro robot interactivo responde a comandos, aprende nuevos trucos y es el compañero de juego perfecto para niños.",
    aiSelfieDrone: "Dron Selfie IA",
    aiSelfieDroneDesc:
      "Toma selfies y videos perfectos con este dron compacto que sigue tu rostro y elige automáticamente el mejor ángulo.",
    smartHomeAssistant: "Asistente de Hogar Inteligente",
    smartHomeAssistantDesc:
      "Este asistente de IA gestiona tu hogar inteligente, responde preguntas y te ayuda con tareas diarias utilizando reconocimiento de voz avanzado.",
    aiTranslator: "Traductor de Idiomas IA",
    aiTranslatorDesc:
      "Traduce conversaciones en tiempo real con este traductor portátil que admite más de 40 idiomas y funciona sin conexión.",
    educationalRobot: "Robot Educativo",
    educationalRobotDesc:
      "Este robot educativo ayuda a los niños a aprender programación, matemáticas y pensamiento lógico de manera lúdica.",
    aiFitnessTracker: "Rastreador de Fitness IA",
    aiFitnessTrackerDesc:
      "Este rastreador de fitness avanzado analiza tus movimientos y proporciona consejos personalizados para optimizar tus entrenamientos.",
    aiSmartSelfieStick: "Palo Selfie Inteligente IA",
    aiSmartSelfieStickDesc:
      "Crea sin esfuerzo videos y fotos profesionales con este palo selfie inteligente. Gracias a la rotación de 360° y al reconocimiento facial IA, siempre permaneces perfectamente en el encuadre.",

    // New products section
    newProductsMonthly: "Nuevos productos inteligentes de IA cada mes",
    innovationText:
      "En AIOranje, todo gira en torno a la innovación.\nAñadimos nuevos productos inteligentes a nuestra colección cada mes.",
    noNewsletters: "NO te enviamos newsletters intrusivos.",
    stayUpdated: "¿Pero quieres mantenerte actualizado?",
    followInstagram: "¡Entonces síguenos en Instagram — ahí es donde estamos activos!",
    discoverLaunches: "Descubre lanzamientos de productos, adelantos exclusivos, detrás de escenas y más.",
    followOnInstagram: "Síguenos en Instagram",
    viewNewProducts: "Ver nuevos productos",

    // App banner
    downloadApp: "📲 ¡Descarga nuestra nueva app ahora!",
    appSubtitle: "🔗 AIOranje.nl – Todo para el futuro inteligente",
    appStore: "App Store",
    googlePlay: "Google Play",

    // Customer service
    aiCustomerService: "Nuestro servicio al cliente IA está listo para ayudarte",
    customerServiceDesc:
      "¿Tienes preguntas sobre nuestros productos o servicios? Nuestros avanzados asistentes de servicio al cliente IA están encantados de ayudarte, 24/7 y con el toque personal que esperarías de un humano.",
    reachUs: "Puedes contactarnos a través de:",
    chatOnWebsite: "El chat en la parte inferior derecha de este sitio web",
    email: "Email: info@aioranje.nl",
    whatsappService: "Servicio al cliente por WhatsApp",
    customerServiceHours: "Nuestro servicio al cliente IA está disponible 24/7, con soporte adicional de 9:00 a 22:00.",

    // About section
    aboutUs: "Sobre nosotros",
    aboutSlogan: "Tecnología IA innovadora con servicio holandés.",
    aboutText1:
      "En AIOranje.nl, combinamos tecnología IA avanzada con un modelo de negocio innovador. Nuestros sistemas totalmente automatizados y procesos impulsados por IA nos permiten proporcionar un servicio máximo con personal físico mínimo. Nuestro equipo consiste en los empleados digitales más avanzados, impulsados por la última tecnología IA.",
    aboutText2:
      "Desde auriculares inteligentes que traducen en tiempo real hasta perros robot educativos para niños — nuestros algoritmos de selección IA eligen cuidadosamente los productos más innovadores, mientras que nuestros asistentes digitales aseguran una experiencia de cliente perfecta desde el pedido hasta la entrega.",
    whyWeDo: "Por qué hacemos esto",
    whyWeDoText:
      "Creemos que la tecnología solo se vuelve realmente poderosa cuando es comprensible, asequible y divertida.",
    whyAIOranje: "¿Por qué AIOranje?",
    whyAIOranjeText:
      "Somos 100% holandeses, pensamos fuera de lo convencional y solo elegimos productos que nos entusiasman a nosotros mismos.",

    // Footer
    navigation: "Navegación",
    categories: "Categorías",
    shippingPromise: "Nuestra Promesa de Envío",
    shippingDays: "¡En AIOranje, un nuevo lote de innovación IA sale cada jueves, viernes y sábado!",
    shippingText: "¡De esta manera, tendrás tu gadget inteligente de IA justo a tiempo para el fin de semana!",
    followUs: "Síguenos",
    newsletter: "Boletín",
    stayUpdatedProducts: "Mantente actualizado sobre nuestros últimos productos",
    yourEmail: "Tu dirección de email",
    subscribe: "Suscribirse",
    allRightsReserved: "© 2025 AIOranje.nl – Todos los derechos reservados.",
    privacyPolicy: "Política de Privacidad",
    termsConditions: "Términos y Condiciones",
    cookiePolicy: "Política de Cookies",
    // Chat widget
    askQuestion: "Haga su pregunta aquí",
    chatWithUs: "Chatea con nosotros",
    helpYouWith: "¿Cómo puedo ayudarte hoy?",
    lauraTyping: "Laura está escribiendo...",
    send: "Enviar",
    typeQuestion: "Escribe tu pregunta a Laura...",
    welcomeLaura: "¡Hola, soy Laura de Vries!",
    lauraIntro:
      "Como especialista en servicio al cliente de IA en AIOranje, estoy encantada de ayudarte con todas tus preguntas sobre nuestros productos y servicios.",
    lauraCapabilities:
      "Con mi conocimiento avanzado de tecnología y mi programación para productos de IA, puedo darte consejos personales sobre qué gadgets inteligentes se adaptan mejor a tus necesidades.",
    frequentlyAskedQuestions: "Preguntas frecuentes:",
    closeChat: "Cerrar chat",
    openChat: "Abrir chat",
    lauraFromAIOranje: "Laura de Vries de AIOranje",
  },

  it: {
    // Header
    home: "Home",
    contact: "Contatti",
    language: "Lingua",
    cart: "Carrello",
    openMenu: "Apri menu",
    closeMenu: "Chiudi menu",
    search: "Cerca",
    products: "Prodotti",
    about: "Chi siamo",
    addToCart: "Aggiungi al carrello",
    checkout: "Procedi all'acquisto",

    // Hero section
    welcome: "Benvenuto!",
    goodMorning: "Buongiorno",
    goodAfternoon: "Buon pomeriggio",
    goodEvening: "Buonasera",
    goodNight: "Buonanotte",
    heroSubtitle: "Benvenuto in AIOranje – il negozio di gadget intelligenti AI per giovani e anziani.",

    // Categories
    ourCategories: "Le Nostre Categorie",
    discoverProducts: "Scopri i nostri prodotti AI per ogni età ed esigenza",
    aiForChildren: "AI per Bambini",
    aiForChildrenDesc: "Giocattoli e robot che permettono ai bambini di scoprire la tecnologia giocando.",
    aiForTeens: "AI per Adolescenti",
    aiForTeensDesc: "Gadget AI alla moda per adolescenti, dai bastoni selfie alle fotocamere intelligenti.",
    aiForAdults: "AI per Adulti",
    aiForAdultsDesc: "Strumenti e accessori AI utili per la casa e l'ufficio.",

    // Products
    ourProducts: "I Nostri Prodotti",
    discoverGadgets: "Scopri i nostri ultimi gadget AI e tecnologia intelligente",
    description: "Descrizione",
    features: "Caratteristiche",
    smartRobotDog: "Cane Robot Intelligente",
    smartRobotDogDesc:
      "Questo cane robot interattivo risponde ai comandi, impara nuovi trucchi ed è il compagno di gioco perfetto per i bambini.",
    aiSelfieDrone: "Drone Selfie AI",
    aiSelfieDroneDesc:
      "Scatta selfie e video perfetti con questo drone compatto che segue il tuo viso e sceglie automaticamente la migliore angolazione.",
    smartHomeAssistant: "Assistente Casa Intelligente",
    smartHomeAssistantDesc:
      "Questo assistente AI gestisce la tua casa intelligente, risponde alle domande e ti aiuta con le attività quotidiane utilizzando il riconoscimento vocale avanzato.",
    aiTranslator: "Traduttore Linguistico AI",
    aiTranslatorDesc:
      "Traduci conversazioni in tempo reale con questo traduttore portatile che supporta più di 40 lingue e funziona offline.",
    educationalRobot: "Robot Educativo",
    educationalRobotDesc:
      "Questo robot educativo aiuta i bambini a imparare programmazione, matematica e pensiero logico in modo divertente.",
    aiFitnessTracker: "Tracker Fitness AI",
    aiFitnessTrackerDesc:
      "Questo tracker fitness avanzato analizza i tuoi movimenti e fornisce consigli personalizzati per ottimizzare i tuoi allenamenti.",
    aiSmartSelfieStick: "Bastone Selfie Intelligente AI",
    aiSmartSelfieStickDesc:
      "Crea senza sforzo video e foto professionali con questo bastone selfie intelligente. Grazie alla rotazione a 360° e al riconoscimento facciale AI, rimani sempre perfettamente nell'inquadratura.",

    // New products section
    newProductsMonthly: "Nuovi prodotti intelligenti AI ogni mese",
    innovationText:
      "In AIOranje, tutto ruota attorno all'innovazione.\nAggiungiamo nuovi prodotti intelligenti alla nostra collezione ogni mese.",
    noNewsletters: "NON ti inviamo newsletter invadenti.",
    stayUpdated: "Ma vuoi rimanere aggiornato?",
    followInstagram: "Allora seguici su Instagram — è lì che siamo attivi!",
    discoverLaunches: "Scopri lanci di prodotti, anteprime esclusive, dietro le quinte e altro ancora.",
    followOnInstagram: "Seguici su Instagram",
    viewNewProducts: "Visualizza nuovi prodotti",

    // App banner
    downloadApp: "📲 Scarica ora la nostra nuova app!",
    appSubtitle: "🔗 AIOranje.nl – Tutto per il futuro intelligente",
    appStore: "App Store",
    googlePlay: "Google Play",

    // Customer service
    aiCustomerService: "Il nostro servizio clienti AI è pronto ad aiutarti",
    customerServiceDesc:
      "Hai domande sui nostri prodotti o servizi? I nostri assistenti avanzati del servizio clienti AI sono felici di aiutarti, 24/7 e con il tocco personale che ti aspetteresti da un umano.",
    reachUs: "Puoi contattarci tramite:",
    chatOnWebsite: "La chat in basso a destra di questo sito web",
    email: "Email: info@aioranje.nl",
    whatsappService: "Servizio clienti WhatsApp",
    customerServiceHours:
      "Il nostro servizio clienti AI è disponibile 24/7, con supporto aggiuntivo dalle 9:00 alle 22:00.",

    // About section
    aboutUs: "Chi siamo",
    aboutSlogan: "Tecnologia AI innovativa con servizio olandese.",
    aboutText1:
      "In AIOranje.nl, combiniamo tecnologia AI avanzata con un modello di business innovativo. I nostri sistemi completamente automatizzati e i processi guidati dall'AI ci permettono di fornire il massimo servizio con personale fisico minimo. Il nostro team è composto dai dipendenti digitali più avanzati, alimentati dall'ultima tecnologia AI.",
    aboutText2:
      "Dagli auricolari intelligenti che traducono in tempo reale ai cani robot educativi per bambini — i nostri algoritmi di selezione AI scelgono attentamente i prodotti più innovativi, mentre i nostri assistenti digitali assicurano un'esperienza cliente senza interruzioni dall'ordine alla consegna.",
    whyWeDo: "Perché lo facciamo",
    whyWeDoText:
      "Crediamo che la tecnologia diventi veramente potente solo quando è comprensibile, accessibile e divertente.",
    whyAIOranje: "Perché AIOranje?",
    whyAIOranjeText:
      "Siamo 100% olandesi, pensiamo fuori dagli schemi e scegliamo solo prodotti che entusiasmano noi stessi.",

    // Footer
    navigation: "Navigazione",
    categories: "Categorie",
    shippingPromise: "La Nostra Promessa di Spedizione",
    shippingDays: "In AIOranje, un nuovo lotto di innovazione AI parte ogni giovedì, venerdì e sabato!",
    shippingText: "In questo modo, avrai il tuo gadget intelligente AI giusto in tempo per il weekend!",
    followUs: "Seguici",
    newsletter: "Newsletter",
    stayUpdatedProducts: "Rimani aggiornato sui nostri ultimi prodotti",
    yourEmail: "Il tuo indirizzo email",
    subscribe: "Iscriviti",
    allRightsReserved: "© 2025 AIOranje.nl – Tutti i diritti riservati.",
    privacyPolicy: "Informativa sulla Privacy",
    termsConditions: "Termini e Condizioni",
    cookiePolicy: "Politica dei Cookie",
    // Chat widget
    askQuestion: "Fai la tua domanda qui",
    chatWithUs: "Chatta con noi",
    helpYouWith: "Come posso aiutarti oggi?",
    lauraTyping: "Laura sta scrivendo...",
    send: "Invia",
    typeQuestion: "Scrivi la tua domanda a Laura...",
    welcomeLaura: "Ciao, sono Laura de Vries!",
    lauraIntro:
      "Come specialista del servizio clienti AI di AIOranje, sono felice di aiutarti con tutte le tue domande sui nostri prodotti e servizi.",
    lauraCapabilities:
      "Con la mia conoscenza avanzata della tecnologia e la mia programmazione per prodotti AI, posso darti consigli personali su quali gadget intelligenti si adattano meglio alle tue esigenze.",
    frequentlyAskedQuestions: "Domande frequenti:",
    closeChat: "Chiudi chat",
    openChat: "Apri chat",
    lauraFromAIOranje: "Laura de Vries di AIOranje",
  },

  pl: {
    // Header
    home: "Strona główna",
    contact: "Kontakt",
    language: "Język",
    cart: "Koszyk",
    openMenu: "Otwórz menu",
    closeMenu: "Zamknij menu",
    search: "Szukaj",
    products: "Produkty",
    about: "O nas",
    addToCart: "Dodaj do koszyka",
    checkout: "Do kasy",

    // Hero section
    welcome: "Witamy!",
    goodMorning: "Dzień dobry",
    goodAfternoon: "Dzień dobry",
    goodEvening: "Dobry wieczór",
    goodNight: "Dobranoc",
    heroSubtitle: "Witamy w AIOranje – sklepie z inteligentnymi gadżetami AI dla młodych i starszych.",

    // Categories
    ourCategories: "Nasze Kategorie",
    discoverProducts: "Odkryj nasze produkty AI dla każdego wieku i potrzeby",
    aiForChildren: "AI dla Dzieci",
    aiForChildrenDesc: "Zabawki i roboty, które pozwalają dzieciom odkrywać technologię poprzez zabawę.",
    aiForTeens: "AI dla Nastolatków",
    aiForTeensDesc: "Modne gadżety AI dla nastolatków, od kijków do selfie po inteligentne aparaty.",
    aiForAdults: "AI dla Dorosłych",
    aiForAdultsDesc: "Przydatne narzędzia i akcesoria AI do domu i biura.",

    // Products
    ourProducts: "Nasze Produkty",
    discoverGadgets: "Odkryj nasze najnowsze gadżety AI i inteligentną technologię",
    description: "Opis",
    features: "Funkcje",
    smartRobotDog: "Inteligentny Pies Robot",
    smartRobotDogDesc:
      "Ten interaktywny pies robot reaguje na komendy, uczy się nowych sztuczek i jest idealnym towarzyszem zabaw dla dzieci.",
    aiSelfieDrone: "Dron Selfie AI",
    aiSelfieDroneDesc:
      "Rób idealne selfie i filmy z tym kompaktowym dronem, który śledzi twoją twarz i automatycznie wybiera najlepszy kąt.",
    smartHomeAssistant: "Inteligentny Asystent Domowy",
    smartHomeAssistantDesc:
      "Ten asystent AI zarządza twoim inteligentnym domem, odpowiada na pytania i pomaga w codziennych zadaniach za pomocą zaawansowanego rozpoznawania mowy.",
    aiTranslator: "Tłumacz Językowy AI",
    aiTranslatorDesc:
      "Tłumacz rozmowy w czasie rzeczywistym za pomocą tego przenośnego tłumacza, który obsługuje ponad 40 języków i działa offline.",
    educationalRobot: "Robot Edukacyjny",
    educationalRobotDesc:
      "Ten robot edukacyjny pomaga dzieciom uczyć się programowania, matematyki i logicznego myślenia w zabawny sposób.",
    aiFitnessTracker: "Tracker Fitness AI",
    aiFitnessTrackerDesc:
      "Ten zaawansowany tracker fitness analizuje twoje ruchy i dostarcza spersonalizowanych porad, aby zoptymalizować twoje treningi.",
    aiSmartSelfieStick: "Inteligentny Kijek do Selfie AI",
    aiSmartSelfieStickDesc:
      "Twórz bez wysiłku profesjonalne filmy i zdjęcia za pomocą tego inteligentnego kijka do selfie. Dzięki obrotowi 360° i rozpoznawaniu twarzy AI, zawsze pozostajesz idealnie w kadrze.",

    // New products section
    newProductsMonthly: "Nowe inteligentne produkty AI co miesiąc",
    innovationText:
      "W AIOranje wszystko kręci się wokół innowacji.\nCo miesiąc dodajemy nowe inteligentne produkty do naszej kolekcji.",
    noNewsletters: "NIE wysyłamy nachalnych newsletterów.",
    stayUpdated: "Ale chcesz być na bieżąco?",
    followInstagram: "Śledź nas na Instagramie — tam jesteśmy aktywni!",
    discoverLaunches: "Odkryj premiery produktów, zapowiedzi, kulisy i więcej.",
    followOnInstagram: "Śledź nas na Instagramie",
    viewNewProducts: "Zobacz nowe produkty",

    // App banner
    downloadApp: "📲 Pobierz teraz naszą nową aplikację!",
    appSubtitle: "🔗 AIOranje.nl – Wszystko dla inteligentnej przyszłości",
    appStore: "App Store",
    googlePlay: "Google Play",

    // Customer service
    aiCustomerService: "Nasza obsługa klienta AI jest gotowa, aby Ci pomóc",
    customerServiceDesc:
      "Masz pytania dotyczące naszych produktów lub usług? Nasi zaawansowani asystenci obsługi klienta AI z przyjemnością Ci pomogą, 24/7 i z osobistym podejściem, którego oczekiwałbyś od człowieka.",
    reachUs: "Możesz się z nami skontaktować przez:",
    chatOnWebsite: "Czat w prawym dolnym rogu tej strony",
    email: "Email: info@aioranje.nl",
    whatsappService: "Obsługa klienta WhatsApp",
    customerServiceHours: "Nasza obsługa klienta AI jest dostępna 24/7, z dodatkowym wsparciem od 9:00 do 22:00.",

    // About section
    aboutUs: "O nas",
    aboutSlogan: "Innowacyjna technologia AI z holenderską obsługą.",
    aboutText1:
      "W AIOranje.nl łączymy zaawansowaną technologię AI z innowacyjnym modelem biznesowym. Nasze w pełni zautomatyzowane systemy i procesy sterowane przez AI pozwalają nam zapewnić maksymalną obsługę przy minimalnej obsadzie fizycznej. Nasz zespół składa się z najbardziej zaawansowanych pracowników cyfrowych, napędzanych najnowszą technologią AI.",
    aboutText2:
      "Od inteligentnych słuchawek, które tłumaczą w czasie rzeczywistym, po edukacyjne psy roboty dla dzieci — nasze algorytmy wyboru AI starannie wybierają najbardziej innowacyjne produkty, podczas gdy nasi cyfrowi asystenci zapewniają płynne doświadczenie klienta od zamówienia do dostawy.",
    whyWeDo: "Dlaczego to robimy",
    whyWeDoText:
      "Wierzymy, że technologia staje się naprawdę potężna dopiero wtedy, gdy jest zrozumiała, przystępna cenowo i zabawna.",
    whyAIOranje: "Dlaczego AIOranje?",
    whyAIOranjeText:
      "Jesteśmy w 100% holenderscy, myślimy nieszablonowo i wybieramy tylko produkty, które sami nas ekscytują.",

    // Footer
    navigation: "Nawigacja",
    categories: "Kategorie",
    shippingPromise: "Nasza Obietnica Wysyłki",
    shippingDays: "W AIOranje świeża porcja innowacji AI wychodzi co czwartek, piątek i sobotę!",
    shippingText: "W ten sposób będziesz mieć swój inteligentny gadżet AI dokładnie na czas na weekend!",
    followUs: "Śledź nas",
    newsletter: "Newsletter",
    stayUpdatedProducts: "Bądź na bieżąco z naszymi najnowszymi produktami",
    yourEmail: "Twój adres email",
    subscribe: "Zapisz się",
    allRightsReserved: "© 2025 AIOranje.nl – Wszelkie prawa zastrzeżone.",
    privacyPolicy: "Polityka Prywatności",
    termsConditions: "Warunki Korzystania",
    cookiePolicy: "Polityka Cookies",
    // Chat widget
    askQuestion: "Zadaj pytanie tutaj",
    chatWithUs: "Czatuj z nami",
    helpYouWith: "Jak mogę Ci dzisiaj pomóc?",
    lauraTyping: "Laura pisze...",
    send: "Wyślij",
    typeQuestion: "Wpisz swoje pytanie do Laury...",
    welcomeLaura: "Cześć, jestem Laura de Vries!",
    lauraIntro:
      "Jako specjalistka obsługi klienta AI w AIOranje, z przyjemnością pomogę Ci we wszystkich pytaniach dotyczących naszych produktów i usług.",
    lauraCapabilities:
      "Dzięki mojej zaawansowanej wiedzy o technologii i programowaniu dla produktów AI, mogę udzielić Ci osobistych porad, które inteligentne gadżety najlepiej pasują do Twoich potrzeb.",
    frequentlyAskedQuestions: "Często zadawane pytania:",
    closeChat: "Zamknij czat",
    openChat: "Otwórz czat",
    lauraFromAIOranje: "Laura de Vries z AIOranje",
  },

  sv: {
    // Header
    home: "Hem",
    contact: "Kontakt",
    language: "Språk",
    cart: "Varukorg",
    openMenu: "Öppna meny",
    closeMenu: "Stäng meny",
    search: "Sök",
    products: "Produkter",
    about: "Om oss",
    addToCart: "Lägg i varukorgen",
    checkout: "Till kassan",

    // Hero section
    welcome: "Välkommen!",
    goodMorning: "God morgon",
    goodAfternoon: "God eftermiddag",
    goodEvening: "God kväll",
    goodNight: "God natt",
    heroSubtitle: "Välkommen till AIOranje – butiken för smarta AI-prylar för unga och gamla.",

    // Categories
    ourCategories: "Våra Kategorier",
    discoverProducts: "Upptäck våra AI-produkter för alla åldrar och behov",
    aiForChildren: "AI för Barn",
    aiForChildrenDesc: "Leksaker och robotar som låter barn upptäcka teknik genom lek.",
    aiForTeens: "AI för Tonåringar",
    aiForTeensDesc: "Trendiga AI-prylar för tonåringar, från selfiepinnar till smarta kameror.",
    aiForAdults: "AI för Vuxna",
    aiForAdultsDesc: "Användbara AI-verktyg och tillbehör för hemmet och kontoret.",

    // Products
    ourProducts: "Våra Produkter",
    discoverGadgets: "Upptäck våra senaste AI-prylar och smart teknik",
    description: "Beskrivning",
    features: "Funktioner",
    smartRobotDog: "Smart Robothund",
    smartRobotDogDesc:
      "Denna interaktiva robothund reagerar på kommandon, lär sig nya trick och är den perfekta lekkamraten för barn.",
    aiSelfieDrone: "AI-Selfiedrone",
    aiSelfieDroneDesc:
      "Ta perfekta selfies och videor med denna kompakta drone som följer ditt ansikte och automatiskt väljer den bästa vinkeln.",
    smartHomeAssistant: "Smart Hemassistent",
    smartHomeAssistantDesc:
      "Denna AI-assistent hanterar ditt smarta hem, svarar på frågor och hjälper dig med dagliga uppgifter med avancerad röstigenkänning.",
    aiTranslator: "AI-Språköversättare",
    aiTranslatorDesc:
      "Översätt konversationer i realtid med denna bärbara översättare som stöder mer än 40 språk och fungerar offline.",
    educationalRobot: "Utbildningsrobot",
    educationalRobotDesc:
      "Denna utbildningsrobot hjälper barn att lära sig programmering, matematik och logiskt tänkande på ett lekfullt sätt.",
    aiFitnessTracker: "AI-Fitnesstracker",
    aiFitnessTrackerDesc:
      "Denna avancerade fitnesstracker analyserar dina rörelser och ger personliga råd för att optimera dina träningspass.",
    aiSmartSelfieStick: "AI-Smart Selfiepinne",
    aiSmartSelfieStickDesc:
      "Skapa professionella videor och foton utan ansträngning med denna smarta selfiepinne. Tack vare 360° rotation och AI-ansiktsigenkänning förblir du alltid perfekt i bild.",

    // New products section
    newProductsMonthly: "Nya smarta AI-produkter varje månad",
    innovationText:
      "På AIOranje handlar allt om innovation.\nVi lägger till nya smarta produkter i vår kollektion varje månad.",
    noNewsletters: "Vi skickar INTE påträngande nyhetsbrev.",
    stayUpdated: "Men vill du hålla dig uppdaterad?",
    followInstagram: "Följ oss då på Instagram — där är vi aktiva!",
    discoverLaunches: "Upptäck produktlanseringar, smygtittar, bakom kulisserna och mer.",
    followOnInstagram: "Följ oss på Instagram",
    viewNewProducts: "Visa nya produkter",

    // App banner
    downloadApp: "📲 Ladda ner vår nya app nu!",
    appSubtitle: "🔗 AIOranje.nl – Allt för den smarta framtiden",
    appStore: "App Store",
    googlePlay: "Google Play",

    // Customer service
    aiCustomerService: "Vår AI-kundtjänst är redo att hjälpa dig",
    customerServiceDesc:
      "Har du frågor om våra produkter eller tjänster? Våra avancerade AI-kundtjänstassistenter hjälper dig gärna, dygnet runt och med den personliga touchen du skulle förvänta dig från en människa.",
    reachUs: "Du kan nå oss via:",
    chatOnWebsite: "Chatten längst ner till höger på denna webbplats",
    email: "E-post: info@aioranje.nl",
    whatsappService: "WhatsApp kundtjänst",
    customerServiceHours: "Vår AI-kundtjänst är tillgänglig dygnet runt, med extra support från 9:00 till 22:00.",

    // About section
    aboutUs: "Om oss",
    aboutSlogan: "Innovativ AI-teknik med holländsk service.",
    aboutText1:
      "På AIOranje.nl kombinerar vi avancerad AI-teknik med en innovativ affärsmodell. Våra helt automatiserade system och AI-drivna processer gör det möjligt för oss att ge maximal service med minimal fysisk bemanning. Vårt team består av de mest avancerade digitala medarbetarna, drivna av den senaste AI-tekniken.",
    aboutText2:
      "Från smarta hörlurar som översätter i realtid till pedagogiska robothundar för barn — våra AI-urvalsalgoritmer väljer noggrant de mest innovativa produkterna, medan våra digitala assistenter säkerställer en sömlös kundupplevelse från beställning till leverans.",
    whyWeDo: "Varför vi gör detta",
    whyWeDoText: "Vi tror att teknik blir verkligt kraftfull först när den är begriplig, prisvärd och rolig.",
    whyAIOranje: "Varför AIOranje?",
    whyAIOranjeText:
      "Vi är 100% holländska, tänker utanför boxen och väljer bara produkter som vi själva är entusiastiska över.",

    // Footer
    navigation: "Navigation",
    categories: "Kategorier",
    shippingPromise: "Vårt Leveranslöfte",
    shippingDays: "På AIOranje går en ny omgång AI-innovation ut varje torsdag, fredag och lördag!",
    shippingText: "På så sätt har du din smarta AI-pryl precis i tid till helgen!",
    followUs: "Följ oss",
    newsletter: "Nyhetsbrev",
    stayUpdatedProducts: "Håll dig uppdaterad om våra senaste produkter",
    yourEmail: "Din e-postadress",
    subscribe: "Prenumerera",
    allRightsReserved: "© 2025 AIOranje.nl – Alla rättigheter förbehållna.",
    privacyPolicy: "Integritetspolicy",
    termsConditions: "Villkor",
    cookiePolicy: "Cookie-policy",
    // Chat widget
    askQuestion: "Ställ din fråga här",
    chatWithUs: "Chatta med oss",
    helpYouWith: "Hur kan jag hjälpa dig idag?",
    lauraTyping: "Laura skriver...",
    send: "Skicka",
    typeQuestion: "Skriv din fråga till Laura...",
    welcomeLaura: "Hej, jag är Laura de Vries!",
    lauraIntro:
      "Som AI-kundtjänstspecialist på AIOranje hjälper jag dig gärna med alla dina frågor om våra produkter och tjänster.",
    lauraCapabilities:
      "Med min avancerade kunskap om teknik och min programmering för AI-produkter kan jag ge dig personliga råd om vilka smarta prylar som passar dina behov bäst.",
    frequentlyAskedQuestions: "Vanliga frågor:",
    closeChat: "Stäng chatten",
    openChat: "Öppna chatten",
    lauraFromAIOranje: "Laura de Vries från AIOranje",
  },
}
