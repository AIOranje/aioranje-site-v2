import { NextResponse } from "next/server"

// Voorkom timeout voor lange verzoeken
export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // Controleer of er een OPENAI_API_KEY is ingesteld
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: "OpenAI API key is niet geconfigureerd" }, { status: 500 })
    }

    // Voeg een systeembericht toe voor Jan Jansen
    const fullMessages = [
      {
        role: "system",
        content:
          "Je bent Laura de Vries, de klantenservice medewerker van AIOranje.nl. Je helpt klanten met vragen over AI-producten, bestellingen en technische ondersteuning. Je antwoorden zijn behulpzaam, vriendelijk en beknopt. Je communiceert in het Nederlands tenzij de klant in een andere taal vraagt. Je bent enthousiast over AI-technologie en de producten van AIOranje. Je stelt je voor als Laura de Vries van AIOranje.",
      },
      ...messages,
    ]

    // Maak het verzoek naar de OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: fullMessages,
        temperature: 0.7,
      }),
    })

    // Controleer of het verzoek succesvol was
    if (!response.ok) {
      const error = await response.json()
      return NextResponse.json({ error: "OpenAI API fout", details: error }, { status: response.status })
    }

    // Stuur het antwoord terug naar de client
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Fout bij het verwerken van het chatverzoek:", error)
    return NextResponse.json({ error: "Er is een fout opgetreden bij het verwerken van je verzoek" }, { status: 500 })
  }
}
