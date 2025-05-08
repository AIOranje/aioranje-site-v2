import type { Language } from "./translations"

// Map of country codes to languages
export const countryToLanguageMap: Record<string, Language> = {
  // European countries
  NL: "nl", // Netherlands
  BE: "nl", // Belgium (could also be French, but we'll default to Dutch)
  GB: "en", // United Kingdom
  US: "en", // United States
  IE: "en", // Ireland
  DE: "de", // Germany
  AT: "de", // Austria
  CH: "de", // Switzerland (could also be French/Italian, but we'll default to German)
  FR: "fr", // France
  ES: "es", // Spain
  IT: "it", // Italy
  PL: "pl", // Poland
  SE: "sv", // Sweden
  // Add more country-to-language mappings as needed
}

// Default language if we can't detect or map the country
export const defaultLanguage: Language = "nl"

export async function detectUserLanguage(): Promise<Language> {
  try {
    // Use a free geolocation API service
    const response = await fetch("https://ipapi.co/json/")
    const data = await response.json()

    // Get the country code from the response
    const countryCode = data.country_code

    // Map the country code to a language, or use default if not found
    return countryToLanguageMap[countryCode] || defaultLanguage
  } catch (error) {
    console.error("Error detecting user location:", error)
    return defaultLanguage
  }
}
