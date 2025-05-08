"use server"

import { z } from "zod"

// Define validation schema
const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Naam is verplicht" }),
  email: z.string().email({ message: "Voer een geldig e-mailadres in" }),
  subject: z.string().min(1, { message: "Onderwerp is verplicht" }),
  message: z.string().min(10, { message: "Bericht moet minimaal 10 tekens bevatten" }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validate form data
    const validatedData = contactFormSchema.parse(formData)

    // In a real application, you would:
    // 1. Send an email
    // 2. Store the message in a database
    // 3. Integrate with a CRM system

    // For this example, we'll simulate a successful submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Return success response
    return {
      success: true,
      message: "Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op.",
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Return validation errors
      return {
        success: false,
        message: "Er zijn validatiefouten in het formulier",
        errors: error.errors.reduce(
          (acc, curr) => {
            const field = curr.path[0] as string
            acc[field] = curr.message
            return acc
          },
          {} as Record<string, string>,
        ),
      }
    }

    // Return generic error
    return {
      success: false,
      message: "Er is iets misgegaan bij het verzenden van uw bericht. Probeer het later opnieuw.",
    }
  }
}
