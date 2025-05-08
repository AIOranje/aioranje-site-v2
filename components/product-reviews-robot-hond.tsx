"use client"

import { useState } from "react"
import { Star, ThumbsUp, Filter, ChevronDown, ChevronUp } from "lucide-react"

interface Review {
  id: number
  author: string
  rating: number
  date: string
  title: string
  content: string
  helpful: number
  verified: boolean
}

const robotHondReviews: Review[] = [
  {
    id: 1,
    author: "Sander Bakker",
    rating: 5,
    date: "5 mei 2025",
    title: "Geweldig cadeau voor mijn zoon!",
    content:
      "Mijn zoon van 8 is helemaal weg van deze robot hond. De dansfunctie is zijn favoriet en hij speelt er elke dag mee. De batterij gaat ook lang mee, wat erg fijn is. Zeker een aanrader voor kinderen die van technologie houden!",
    helpful: 18,
    verified: true,
  },
  {
    id: 2,
    author: "Lisa van Dijk",
    rating: 4,
    date: "3 mei 2025",
    title: "Leuk speelgoed met veel functies",
    content:
      "Gekocht als cadeau voor mijn dochter. Ze is er erg blij mee! De afstandsbediening is eenvoudig te gebruiken, zelfs voor jonge kinderen. Ik geef 4 sterren omdat de instructies wat duidelijker hadden gekund.",
    helpful: 12,
    verified: true,
  },
  {
    id: 3,
    author: "Martijn de Groot",
    rating: 5,
    date: "30 april 2025",
    title: "Indrukwekkende AI-technologie",
    content:
      "Als tech-liefhebber ben ik onder de indruk van wat deze robot hond allemaal kan. De bewegingen zijn vloeiend en de reactie op commando's is snel. Mijn kinderen vinden het geweldig en leren spelenderwijs over technologie.",
    helpful: 24,
    verified: true,
  },
  {
    id: 4,
    author: "Emma Jansen",
    rating: 3,
    date: "28 april 2025",
    title: "Leuk maar batterij laadt snel leeg",
    content:
      "De robot hond is leuk en mijn zoon geniet ervan, maar de batterij gaat bij intensief gebruik maar ongeveer een uur mee in plaats van de beloofde 2 uur. Verder werken alle functies prima en is het een leuk cadeau.",
    helpful: 9,
    verified: true,
  },
  {
    id: 5,
    author: "Thomas Visser",
    rating: 5,
    date: "25 april 2025",
    title: "Beste speelgoed van het jaar!",
    content:
      "Deze robot hond is het beste speelgoed dat ik in lange tijd heb gekocht. Mijn kinderen zijn er dol op en het houdt ze urenlang bezig. De stunts en dansbewegingen zijn echt indrukwekkend. Zeer tevreden met deze aankoop!",
    helpful: 31,
    verified: true,
  },
  {
    id: 6,
    author: "Sophie Mulder",
    rating: 4,
    date: "22 april 2025",
    title: "Leuk cadeau voor technologie-fans",
    content:
      "Gekocht als cadeau en het was een groot succes! De robot hond is stevig gebouwd en kan tegen een stootje. De LED-verlichting is ook erg leuk, vooral in het donker. Een ster minder omdat het geluid wat hard is zonder volumeknop.",
    helpful: 7,
    verified: true,
  },
  {
    id: 7,
    author: "Bram Hendriks",
    rating: 5,
    date: "18 april 2025",
    title: "Geweldige klantenservice",
    content:
      "Niet alleen is de robot hond fantastisch, maar ook de klantenservice van AIOranje is top! We hadden een klein probleem met de afstandsbediening en ze hebben het meteen opgelost. Het product zelf is geweldig en mijn zoon is er dol op.",
    helpful: 15,
    verified: true,
  },
  {
    id: 8,
    author: "Anouk de Vries",
    rating: 4,
    date: "15 april 2025",
    title: "Leerzaam en leuk",
    content:
      "Deze robot hond is een geweldige manier om kinderen te introduceren in de wereld van technologie en AI. Mijn dochter van 7 vindt het geweldig en stelt veel vragen over hoe het werkt. De bediening is intuïtief en kindvriendelijk.",
    helpful: 19,
    verified: true,
  },
  {
    id: 9,
    author: "Niels van der Berg",
    rating: 3,
    date: "12 april 2025",
    title: "Goed maar kan beter",
    content:
      "De robot hond is leuk, maar ik had wat meer verwacht van de AI-functies. Soms reageert hij niet goed op commando's. De dansfunctie en stunts werken wel prima en mijn kinderen vinden het alsnog erg leuk speelgoed.",
    helpful: 8,
    verified: true,
  },
  {
    id: 10,
    author: "Laura Smit",
    rating: 5,
    date: "8 april 2025",
    title: "Perfect verjaardagscadeau",
    content:
      "Gekocht voor de verjaardag van mijn zoon en het was een schot in de roos! Hij speelt er elke dag mee en laat het aan al zijn vrienden zien. De robot hond is stevig, reageert goed op de afstandsbediening en de batterij gaat lang mee.",
    helpful: 22,
    verified: true,
  },
  {
    id: 11,
    author: "Jeroen Bakker",
    rating: 4,
    date: "5 april 2025",
    title: "Verrassend goed",
    content:
      "Ik was eerst sceptisch over een robot speelgoed, maar deze heeft me positief verrast. De bewegingen zijn natuurlijk en de interactie is leuk. Mijn dochter is er helemaal weg van. Alleen jammer dat de handleiding wat beperkt is.",
    helpful: 11,
    verified: true,
  },
  {
    id: 12,
    author: "Marieke Jansen",
    rating: 5,
    date: "2 april 2025",
    title: "Uren speelplezier",
    content:
      "Deze robot hond zorgt voor uren speelplezier! Mijn zoon van 9 is er helemaal gek op en zelfs mijn tienerdochter vindt het leuk. De verschillende functies houden het interessant en de bediening is eenvoudig. Zeer tevreden met deze aankoop!",
    helpful: 17,
    verified: true,
  },
  {
    id: 13,
    author: "Peter de Jong",
    rating: 4,
    date: "28 maart 2025",
    title: "Goede prijs-kwaliteitverhouding",
    content:
      "Voor deze prijs krijg je veel waar voor je geld. De robot hond heeft veel functies en is stevig gebouwd. De afstandsbediening werkt goed en de oplaadbare batterij is een pluspunt. Een ster minder omdat het opladen wat lang duurt.",
    helpful: 14,
    verified: true,
  },
  {
    id: 14,
    author: "Femke Visser",
    rating: 5,
    date: "25 maart 2025",
    title: "Fantastisch speelgoed",
    content:
      "Deze robot hond is fantastisch! Mijn zoon speelt er elke dag mee en ontdekt steeds nieuwe functies. De dansbewegingen zijn erg grappig en de LED-verlichting maakt het extra speciaal. Zeker een aanrader voor kinderen die van technologie houden.",
    helpful: 26,
    verified: true,
  },
  {
    id: 15,
    author: "Bas van Leeuwen",
    rating: 3,
    date: "20 maart 2025",
    title: "Leuk maar wat luidruchtig",
    content:
      "De robot hond is leuk en mijn kinderen genieten ervan, maar hij maakt wel veel geluid. Een volumeknop zou fijn zijn geweest. Verder werken alle functies goed en is het een leuk cadeau voor kinderen die van robots houden.",
    helpful: 7,
    verified: true,
  },
  {
    id: 16,
    author: "Esther Mulder",
    rating: 5,
    date: "15 maart 2025",
    title: "Geweldig educatief speelgoed",
    content:
      "Deze robot hond is niet alleen leuk, maar ook educatief. Mijn kinderen leren over programmeren en technologie terwijl ze spelen. De verschillende functies houden het interessant en de bediening is kindvriendelijk. Zeer tevreden!",
    helpful: 20,
    verified: true,
  },
  {
    id: 17,
    author: "Tim Hendriks",
    rating: 4,
    date: "10 maart 2025",
    title: "Leuk cadeau voor technologie-fans",
    content:
      "Als oom heb ik deze robot hond gekocht voor mijn neefje en hij is er dolblij mee. De robot is stevig, reageert goed op commando's en de stunts zijn indrukwekkend. Een ster minder omdat de batterij wat vaker opgeladen moet worden dan verwacht.",
    helpful: 13,
    verified: true,
  },
  {
    id: 18,
    author: "Linda de Vries",
    rating: 5,
    date: "5 maart 2025",
    title: "Beste aankoop van het jaar",
    content:
      "Deze robot hond is de beste aankoop die ik dit jaar heb gedaan voor mijn kinderen. Ze spelen er elke dag mee en vervelen zich nooit. De verschillende functies en mogelijkheden maken het een veelzijdig speelgoed dat lang meegaat.",
    helpful: 29,
    verified: true,
  },
  {
    id: 19,
    author: "Mark Janssen",
    rating: 4,
    date: "28 februari 2025",
    title: "Goed alternatief voor een echt huisdier",
    content:
      "Voor gezinnen die geen echt huisdier kunnen hebben, is deze robot hond een leuk alternatief. Mijn dochter vindt het geweldig en zorgt er goed voor. De interactieve functies maken het speels en de bediening is eenvoudig.",
    helpful: 16,
    verified: true,
  },
  {
    id: 20,
    author: "Sanne Bakker",
    rating: 5,
    date: "22 februari 2025",
    title: "Indrukwekkende technologie",
    content:
      "De technologie in deze robot hond is echt indrukwekkend. De bewegingen zijn vloeiend en natuurlijk, en de reactie op commando's is snel. Mijn zoon is gefascineerd door alle functies en mogelijkheden. Een geweldig cadeau voor nieuwsgierige kinderen!",
    helpful: 23,
    verified: true,
  },
  {
    id: 21,
    author: "Wouter de Boer",
    rating: 4,
    date: "15 februari 2025",
    title: "Leuk en duurzaam",
    content:
      "Deze robot hond is niet alleen leuk, maar ook duurzaam gemaakt. De materialen voelen stevig aan en de oplaadbare batterij is milieuvriendelijk. Mijn kinderen spelen er graag mee en ontdekken steeds nieuwe functies.",
    helpful: 10,
    verified: true,
  },
  {
    id: 22,
    author: "Iris van Dijk",
    rating: 5,
    date: "8 februari 2025",
    title: "Perfecte mix van plezier en leren",
    content:
      "Deze robot hond biedt de perfecte mix van plezier en leren. Mijn kinderen hebben veel plezier met de dansfuncties en stunts, maar leren tegelijkertijd over technologie en robotica. Een geweldige investering in hun ontwikkeling!",
    helpful: 27,
    verified: true,
  },
  {
    id: 23,
    author: "Dennis Smit",
    rating: 4,
    date: "1 februari 2025",
    title: "Verrassend veelzijdig",
    content:
      "Ik ben verrast door hoe veelzijdig deze robot hond is. Er zijn zoveel verschillende functies en mogelijkheden dat mijn kinderen er nog steeds nieuwe dingen mee ontdekken. De bediening is intuïtief en de batterijduur is redelijk goed.",
    helpful: 15,
    verified: true,
  },
  {
    id: 24,
    author: "Marloes Jansen",
    rating: 5,
    date: "25 januari 2025",
    title: "Geweldig wintercadeau",
    content:
      "Gekocht als wintercadeau voor mijn kinderen en het was een groot succes! De robot hond houdt ze bezig tijdens regenachtige dagen en ze vinden het geweldig om alle functies te ontdekken. De kwaliteit is uitstekend en de prijs is het waard.",
    helpful: 21,
    verified: true,
  },
]

export default function ProductReviewsRobotHond() {
  const [sortBy, setSortBy] = useState<"date" | "rating">("date")
  const [filterRating, setFilterRating] = useState<number | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  // Calculate average rating
  const averageRating = robotHondReviews.reduce((acc, review) => acc + review.rating, 0) / robotHondReviews.length

  // Count reviews by rating
  const ratingCounts = robotHondReviews.reduce(
    (acc, review) => {
      acc[review.rating] = (acc[review.rating] || 0) + 1
      return acc
    },
    {} as Record<number, number>,
  )

  // Sort and filter reviews
  const sortedAndFilteredReviews = [...robotHondReviews]
    .filter((review) => (filterRating ? review.rating === filterRating : true))
    .sort((a, b) => {
      if (sortBy === "date") {
        // Convert Dutch date format to sortable format
        const dateA = a.date.split(" ")[0] + " " + a.date.split(" ")[1] + " " + a.date.split(" ")[2]
        const dateB = b.date.split(" ")[0] + " " + b.date.split(" ")[1] + " " + b.date.split(" ")[2]

        // For Dutch month names, we need a custom sorting function
        const monthOrder: Record<string, number> = {
          januari: 1,
          februari: 2,
          maart: 3,
          april: 4,
          mei: 5,
          juni: 6,
          juli: 7,
          augustus: 8,
          september: 9,
          oktober: 10,
          november: 11,
          december: 12,
        }

        const dayA = Number.parseInt(a.date.split(" ")[0])
        const monthA = monthOrder[a.date.split(" ")[1]]
        const yearA = Number.parseInt(a.date.split(" ")[2])

        const dayB = Number.parseInt(b.date.split(" ")[0])
        const monthB = monthOrder[b.date.split(" ")[1]]
        const yearB = Number.parseInt(b.date.split(" ")[2])

        if (yearA !== yearB) return yearB - yearA
        if (monthA !== monthB) return monthB - monthA
        return dayB - dayA
      } else {
        return b.rating - a.rating
      }
    })

  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <div className="mb-2 flex items-center">
              <span className="text-3xl font-bold">{averageRating.toFixed(1)}</span>
              <div className="ml-2 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${
                      star <= Math.round(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-500">Gebaseerd op {robotHondReviews.length} beoordelingen</p>

            <div className="mt-4 space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center">
                  <button
                    onClick={() => setFilterRating(filterRating === rating ? null : rating)}
                    className={`flex w-16 items-center ${
                      filterRating === rating ? "font-bold text-orange-600" : "text-gray-600"
                    }`}
                  >
                    <span>{rating}</span>
                    <Star className="ml-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </button>
                  <div className="ml-2 h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-yellow-400"
                      style={{
                        width: `${((ratingCounts[rating] || 0) / robotHondReviews.length) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span className="ml-2 w-8 text-xs text-gray-500">{ratingCounts[rating] || 0}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-4 text-center text-gray-700 dark:text-gray-300">
              Onze klanten zijn zeer tevreden over de AiJH RC Robot Hond. Bekijk hieronder hun ervaringen.
            </p>
            <button className="mx-auto rounded-md bg-orange-600 px-4 py-2 text-white hover:bg-orange-700">
              Schrijf een beoordeling
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center text-gray-700 dark:text-gray-300"
          >
            <Filter className="mr-2 h-4 w-4" />
            Filters
            {showFilters ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
          </button>

          <div className="flex items-center">
            <span className="mr-2 text-sm text-gray-500">Sorteren op:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "date" | "rating")}
              className="rounded-md border border-gray-300 bg-white px-2 py-1 text-sm dark:border-gray-600 dark:bg-gray-700"
            >
              <option value="date">Meest recent</option>
              <option value="rating">Hoogste waardering</option>
            </select>
          </div>
        </div>

        {showFilters && (
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => setFilterRating(null)}
              className={`rounded-full px-3 py-1 text-xs ${
                filterRating === null
                  ? "bg-orange-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
              }`}
            >
              Alle beoordelingen
            </button>
            {[5, 4, 3, 2, 1].map((rating) => (
              <button
                key={rating}
                onClick={() => setFilterRating(filterRating === rating ? null : rating)}
                className={`flex items-center rounded-full px-3 py-1 text-xs ${
                  filterRating === rating
                    ? "bg-orange-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
                }`}
              >
                {rating} <Star className="ml-1 h-3 w-3" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {sortedAndFilteredReviews.length > 0 ? (
          sortedAndFilteredReviews.map((review) => (
            <div
              key={review.id}
              className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  {review.verified && (
                    <span className="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800">
                      Geverifieerde aankoop
                    </span>
                  )}
                </div>
                <span className="text-xs text-gray-500">{review.date}</span>
              </div>

              <h4 className="mb-1 font-medium text-gray-900 dark:text-white">{review.title}</h4>
              <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">{review.content}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{review.author}</span>
                </div>
                <button className="flex items-center text-xs text-gray-500 hover:text-gray-700">
                  <ThumbsUp className="mr-1 h-3 w-3" />
                  Nuttig ({review.helpful})
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="rounded-lg border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
            <p className="text-gray-500">Geen beoordelingen gevonden met de huidige filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}
