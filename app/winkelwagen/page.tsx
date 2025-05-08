"use client"

import { useState } from "react"
import Link from "next/link"
import { Minus, Plus, X, ShoppingBag, ArrowRight, ChevronLeft, Package } from "lucide-react"
import Header from "@/components/header"

interface CartItem {
  id: string
  title: string
  price: number
  quantity: number
  image: string
}

export default function ShoppingCartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      title: "Slimme Robot Hond",
      price: 99.99,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "2",
      title: "AI Selfie Drone",
      price: 129.99,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
    },
  ])

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const calculateSubtotal = (price: number, quantity: number) => {
    return price * quantity
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + calculateSubtotal(item.price, item.quantity), 0)
  }

  const formatPrice = (price: number) => {
    return `€${price.toFixed(2).replace(".", ",")}`
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/" className="flex items-center text-sm text-gray-600 hover:text-orange-500">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Terug naar winkel
          </Link>
        </div>

        <h1 className="mb-8 text-3xl font-bold text-gray-800">Winkelwagen</h1>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm sm:p-8">
            <ShoppingBag className="mb-4 h-16 w-16 text-gray-300" />
            <h2 className="mb-2 text-xl font-semibold text-[#333]">Je winkelwagen is leeg</h2>
            <p className="mb-6 text-gray-600">Voeg producten toe om te beginnen met winkelen</p>
            <Link
              href="/#products"
              className="rounded-md bg-[#FFA500] px-6 py-3 text-white transition-colors hover:bg-[#FFA500]/90"
            >
              Bekijk producten
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                <div className="hidden border-b border-gray-200 p-4 sm:grid sm:grid-cols-6">
                  <div className="col-span-3 font-medium text-[#333]">Product</div>
                  <div className="text-center font-medium text-[#333]">Prijs</div>
                  <div className="text-center font-medium text-[#333]">Aantal</div>
                  <div className="text-right font-medium text-[#333]">Subtotaal</div>
                </div>

                <div className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-4 sm:grid sm:grid-cols-6 sm:items-center">
                      {/* Product info - mobile & desktop */}
                      <div className="mb-4 flex items-center sm:col-span-3 sm:mb-0">
                        <div className="relative mr-4 h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-medium text-[#333]">
                            <Link href={`/product/${item.id}`} className="hover:text-[#FFA500]">
                              {item.title}
                            </Link>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">ID: {item.id}</p>

                          {/* Mobile price */}
                          <p className="mt-1 text-sm font-medium text-[#333] sm:hidden">{formatPrice(item.price)}</p>
                        </div>
                      </div>

                      {/* Price - desktop only */}
                      <div className="hidden text-center text-[#333] sm:block">{formatPrice(item.price)}</div>

                      {/* Quantity - mobile & desktop */}
                      <div className="mb-4 flex items-center justify-center sm:mb-0">
                        <div className="flex items-center rounded-md border border-gray-300">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="flex h-8 w-8 items-center justify-center border-r border-gray-300 text-gray-600 hover:bg-gray-50"
                            aria-label="Verminder aantal"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="flex h-8 w-10 items-center justify-center text-sm text-[#333]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="flex h-8 w-8 items-center justify-center border-l border-gray-300 text-gray-600 hover:bg-gray-50"
                            aria-label="Verhoog aantal"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>

                      {/* Subtotal and remove - mobile & desktop */}
                      <div className="flex items-center justify-between sm:justify-end">
                        <span className="font-medium text-[#333] sm:text-right">
                          {formatPrice(calculateSubtotal(item.price, item.quantity))}
                        </span>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-4 text-gray-400 hover:text-red-500"
                          aria-label="Verwijder item"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-semibold text-[#333]">Overzicht</h2>

                <div className="mb-4 flex justify-between border-b border-gray-200 pb-4">
                  <span className="text-gray-600">Subtotaal</span>
                  <span className="font-medium text-[#333]">{formatPrice(calculateTotal())}</span>
                </div>

                <div className="mb-4 flex justify-between border-b border-gray-200 pb-4">
                  <span className="text-gray-600">Verzendkosten</span>
                  <span className="font-medium text-[#333]">€0,00</span>
                </div>

                <div className="mb-4 rounded-md bg-gray-50 p-3 dark:bg-gray-700/50">
                  <div className="mb-2 flex items-center">
                    <Package className="mr-2 h-4 w-4 text-[#FFA500]" />
                    <span className="font-medium text-[#333] dark:text-white">Onze Verzendbelofte</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    Bij AIOranje gaat elke <strong>donderdag</strong>, <strong>vrijdag</strong> en{" "}
                    <strong>zaterdag</strong> een verse lading AI-innovatie de deur uit!
                  </p>
                  <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
                    Zo heb je jouw slimme AI-gadget precies op tijd voor het weekend in huis!
                  </p>
                </div>

                <div className="mb-6 flex justify-between">
                  <span className="text-lg font-semibold text-[#333]">Totaal</span>
                  <span className="text-lg font-bold text-[#FFA500]">{formatPrice(calculateTotal())}</span>
                </div>

                <button className="flex w-full items-center justify-center rounded-md bg-[#FFA500] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[#FFA500]/90 focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:ring-offset-2">
                  Ga verder naar afrekenen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  )
}
