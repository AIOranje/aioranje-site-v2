"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { X, Loader2, Key, ChevronRight, Bot } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface Message {
  role: "user" | "assistant"
  content: string
}

interface FAQItem {
  question: string
  category: string
}

// Voeg deze vertaalsleutels toe aan lib/translations.ts
// Ik zal alleen de Nederlandse en Engelse vertalingen tonen als voorbeeld
/*
  "askQuestion": "Stel hier uw vraag",
  "chatWithUs": "Chat met ons",
  "helpYouWith": "Hoe kan ik je vandaag helpen?",
  "lauraTyping": "Laura typt...",
  "send": "Verstuur",
  "typeQuestion": "Typ je vraag aan Laura...",
  "welcomeLaura": "Hallo, ik ben Laura de Vries!",
  "lauraIntro": "Als AI-klantenservice specialist bij AIOranje help ik je graag met al je vragen over onze producten en diensten.",
  "lauraCapabilities": "Met mijn geavanceerde kennis van technologie en mijn programmering voor AI-producten kan ik je persoonlijk advies geven over welke slimme gadgets het beste bij jouw behoeften passen.",
  "frequentlyAskedQuestions": "Veelgestelde vragen:",
  "closeChat": "Sluit chat",
  "openChat": "Open chat",
  "lauraFromAIOranje": "Laura de Vries van AIOranje",
*/

export default function OranBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showApiKeyField, setShowApiKeyField] = useState(false)
  const [apiKey, setApiKey] = useState("")
  const [adminKeySequence, setAdminKeySequence] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const { t, language } = useLanguage()

  // FAQ vragen - deze zouden ook vertaald moeten worden
  // In een volledige implementatie zouden we deze ook via de vertaalsleutels doen
  const faqItems: FAQItem[] = [
    { question: "Wat zijn jullie populairste AI-producten?", category: "producten" },
    { question: "Hoe lang duurt de bezorging?", category: "bezorging" },
    { question: "Kan ik een bestelling retourneren?", category: "service" },
    { question: "Hebben jullie producten voor kinderen?", category: "producten" },
    { question: "Wat is jullie retourbeleid?", category: "service" },
  ]

  // Scroll naar beneden wanneer er nieuwe berichten zijn
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Focus op het invoerveld wanneer de chat wordt geopend
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  // Luister naar toetsaanslagen voor de geheime toegangscode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      // Voeg de ingedrukte toets toe aan de sequence
      setAdminKeySequence((prev) => {
        const newSequence = (prev + e.key).slice(-5) // Houd maximaal de laatste 5 toetsaanslagen bij

        // Controleer of de geheime code is ingevoerd (in dit geval "admin")
        if (newSequence === "admin") {
          setShowApiKeyField((prev) => !prev) // Toggle de zichtbaarheid van het API-sleutel veld
          return ""
        }

        return newSequence
      })
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
  }

  const handleApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  // Simuleer een antwoord van Laura de Vries wanneer de API niet beschikbaar is
  const generateFallbackResponse = (userMessage: string): string => {
    // Deze responses zouden ook vertaald moeten worden
    const responses = [
      "Hallo! Ik ben Laura de Vries, de AI-klantenservice assistent van AIOranje. Momenteel is onze chatservice in onderhoud. Kun je later terugkomen of contact opnemen via info@aioranje.nl?",
      "Bedankt voor je bericht! Onze chat-API is momenteel niet beschikbaar. Je kunt ons bereiken via WhatsApp of e-mail voor directe hulp van een van onze menselijke teamleden.",
      "Leuk dat je contact opneemt! Helaas kan ik je vraag nu niet verwerken omdat mijn AI-systemen offline zijn. Probeer het later nog eens of bezoek onze FAQ-pagina.",
      "Hoi daar! Laura de Vries hier, je AI-assistent. Ik zou je graag helpen, maar mijn systemen zijn momenteel in onderhoud. Probeer het over enkele minuten opnieuw.",
    ]

    return responses[Math.floor(Math.random() * responses.length)]
  }

  const handleFAQClick = (question: string) => {
    // Zet de vraag als gebruikersbericht
    const userMessage: Message = { role: "user", content: question }
    setMessages((prev) => [...prev, userMessage])

    // Verwerk de vraag
    processUserMessage(userMessage)
  }

  const processUserMessage = async (userMessage: Message) => {
    setIsLoading(true)

    try {
      // Bepaal of we de API-sleutel direct moeten gebruiken of via de backend
      if (apiKey && showApiKeyField) {
        // Direct naar OpenAI API met de ingevoerde sleutel (alleen voor testgebruik)
        try {
          const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              model: "gpt-4",
              messages: [
                {
                  role: "system",
                  content:
                    "Je bent Laura de Vries, de klantenservice medewerker van AIOranje.nl. Je helpt klanten met vragen over AI-producten, bestellingen en technische ondersteuning. Je antwoorden zijn behulpzaam, vriendelijk en beknopt. Je communiceert in het Nederlands tenzij de klant in een andere taal vraagt. Je bent enthousiast over AI-technologie en de producten van AIOranje. Je stelt je voor als Laura de Vries van AIOranje.",
                },
                userMessage,
              ],
              temperature: 0.7,
            }),
          })

          if (!response.ok) {
            throw new Error(`API fout: ${response.status}`)
          }

          const data = await response.json()
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content: data.choices[0].message.content,
            },
          ])
        } catch (error) {
          console.error("Fout bij directe API-aanroep:", error)
          // Fallback naar gesimuleerd antwoord
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content:
                "Er is een fout opgetreden met de API-sleutel. Controleer of de sleutel geldig is en probeer het opnieuw.",
            },
          ])
        }
      } else {
        // Probeer de backend route, maar met fallback voor preview-omgeving
        try {
          const response = await fetch("/api/chat", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              messages: [userMessage],
            }),
          })

          if (!response.ok) {
            throw new Error(`Backend API fout: ${response.status}`)
          }

          const data = await response.json()
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content: data.choices[0].message.content,
            },
          ])
        } catch (error) {
          console.error("Fout bij backend API-aanroep:", error)
          // Gebruik fallback in preview-omgeving
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content: generateFallbackResponse(userMessage.content),
            },
          ])
        }
      }
    } catch (error) {
      console.error("Algemene fout bij het versturen van het bericht:", error)

      // Toon een gebruiksvriendelijke foutmelding
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Er is een fout opgetreden bij het verwerken van je vraag. In de preview-omgeving is de chatfunctie beperkt beschikbaar. Op de live website zal dit normaal werken.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Controleer of de input niet leeg is
    if (input.trim() === "" || isLoading) {
      return
    }

    // Voeg het gebruikersbericht toe aan de berichten
    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Verwerk het bericht
    processUserMessage(userMessage)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="mb-4 w-full max-w-[450px] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800 sm:max-w-[500px]">
          {/* Oranje titelbalk */}
          <div className="bg-[#FFA500] p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-[#FFA500]">
                  <Bot className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{t("lauraFromAIOranje")}</h3>
              </div>
              <button
                onClick={toggleChat}
                className="rounded-full p-1 text-white transition-colors hover:bg-[#FFA500]/80"
                aria-label={t("closeChat")}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Chat messages */}
          <div className="h-[400px] overflow-y-auto p-4">
            {messages.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center text-gray-500 dark:text-gray-400">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#FFA500]/10 text-[#FFA500]">
                  <Bot className="h-10 w-10" />
                </div>
                <p className="mb-2 text-xl font-medium">{t("welcomeLaura")}</p>
                <div className="mb-4 max-w-[90%] rounded-lg bg-[#FFA500]/10 p-4 text-left text-sm text-gray-600 dark:text-gray-300">
                  <p className="mb-2">{t("lauraIntro")}</p>
                  <p>{t("lauraCapabilities")}</p>
                </div>
                <p className="mb-3 text-sm">{t("helpYouWith")}</p>

                {/* FAQ knoppen */}
                <div className="mt-2 w-full space-y-2 px-2">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    {t("frequentlyAskedQuestions")}
                  </p>
                  {faqItems.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleFAQClick(item.question)}
                      className="flex w-full items-center justify-between rounded-md border border-gray-200 bg-white px-3 py-2 text-left text-sm text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                    >
                      <span>{item.question}</span>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    {message.role === "assistant" && (
                      <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFA500]/10 text-[#FFA500]">
                        <Bot className="h-6 w-6" />
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] rounded-lg px-4 py-3 ${
                        message.role === "user"
                          ? "bg-[#FFA500] text-white"
                          : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                      }`}
                    >
                      {message.role === "assistant" && (
                        <div className="mb-1 text-sm font-bold text-gray-600 dark:text-gray-300">Laura de Vries</div>
                      )}
                      <p className="whitespace-pre-wrap text-sm">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && messages[messages.length - 1]?.role === "user" && (
                  <div className="flex justify-start">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFA500]/10 text-[#FFA500]">
                      <Bot className="h-6 w-6" />
                    </div>
                    <div className="max-w-[75%] rounded-lg bg-gray-100 px-4 py-3 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                      <div className="mb-1 text-sm font-bold text-gray-600 dark:text-gray-300">Laura de Vries</div>
                      <div className="flex items-center">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        <p className="text-sm">{t("lauraTyping")}</p>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Chat input */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 dark:border-gray-700">
            <div className="flex flex-col space-y-3">
              <textarea
                ref={inputRef}
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder={t("typeQuestion")}
                className="flex-1 resize-none rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 focus:border-[#FFA500] focus:outline-none focus:ring-1 focus:ring-[#FFA500] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-[#FFA500]"
                rows={2}
                disabled={isLoading}
              />

              {/* Verborgen API-sleutel veld (alleen zichtbaar na geheime code) */}
              {showApiKeyField && (
                <div className="flex items-center space-x-2 rounded-md border border-gray-300 bg-gray-50 p-2 dark:border-gray-600 dark:bg-gray-700">
                  <Key className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <div className="flex-1">
                    <label htmlFor="api-key" className="block text-xs font-medium text-gray-500 dark:text-gray-400">
                      🔒 OpenAI API-sleutel (alleen voor testgebruik)
                    </label>
                    <input
                      id="api-key"
                      type="password"
                      value={apiKey}
                      onChange={handleApiKeyChange}
                      className="mt-1 w-full border-none bg-transparent p-0 text-sm text-gray-800 focus:outline-none focus:ring-0 dark:text-white"
                      placeholder="sk-..."
                    />
                  </div>
                </div>
              )}

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="flex h-10 items-center justify-center rounded-md bg-[#FFA500] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#FFA500]/90 focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-offset-gray-800"
                  disabled={isLoading || input.trim() === ""}
                  aria-label={t("send")}
                >
                  {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : t("send")}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 z-50 flex h-12 items-center justify-center rounded-lg bg-[#FFA500] px-4 py-3 text-white shadow-lg transition-colors hover:bg-[#FFA500]/90 focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        aria-label={isOpen ? t("closeChat") : t("openChat")}
      >
        <span className="text-xl">🤖</span>
        <span className="ml-2 text-base font-medium">{t("askQuestion")}</span>
      </button>
    </div>
  )
}
