"use client"

import { useState } from "react"
import { MessageSquare } from "lucide-react"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="mb-2 w-80 rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <div className="p-4">
            <h3 className="mb-2 text-lg font-semibold text-[#333] dark:text-white">Chat met ons</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We zijn er om je te helpen! Stuur ons een bericht.
            </p>
            {/* Add your chat interface here. This is just a placeholder. */}
            <textarea
              className="mt-4 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-[#333] focus:outline-none focus:ring-2 focus:ring-[#FFA500] dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              rows={4}
              placeholder="Typ je bericht..."
            />
            <button className="mt-3 rounded-md bg-[#FFA500] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#FFA500]/90 focus:outline-none focus:ring-2 focus:ring-[#FFA500]">
              Verstuur
            </button>
          </div>
        </div>
      )}
      <button
        onClick={toggleChat}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFA500] text-white shadow-lg transition-colors hover:bg-[#FFA500]/90 focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
        aria-label={isOpen ? "Sluit chat" : "Open chat"}
      >
        <MessageSquare className="h-6 w-6" />
      </button>
    </div>
  )
}
