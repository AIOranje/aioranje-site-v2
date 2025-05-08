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

interface ProductReviewsProps {
  reviews: Review[]
}

export default function ProductReviews({ reviews }: ProductReviewsProps) {
  const [sortBy, setSortBy] = useState<"date" | "rating">("date")
  const [filterRating, setFilterRating] = useState<number | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  // Calculate average rating
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length

  // Count reviews by rating
  const ratingCounts = reviews.reduce(
    (acc, review) => {
      acc[review.rating] = (acc[review.rating] || 0) + 1
      return acc
    },
    {} as Record<number, number>,
  )

  // Sort and filter reviews
  const sortedAndFilteredReviews = [...reviews]
    .filter((review) => (filterRating ? review.rating === filterRating : true))
    .sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
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
            <p className="text-sm text-gray-500">Gebaseerd op {reviews.length} beoordelingen</p>

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
                        width: `${((ratingCounts[rating] || 0) / reviews.length) * 100}%`,
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
              Onze klanten zijn zeer tevreden over de ChatGPT AI Mouse. Bekijk hieronder hun ervaringen.
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
