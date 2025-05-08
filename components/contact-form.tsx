"use client"

import type React from "react"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { submitContactForm, type ContactFormData } from "@/app/actions/contact-form"

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({
    type: null,
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Naam is verplicht"
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mail is verplicht"
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Voer een geldig e-mailadres in"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Onderwerp is verplicht"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Bericht is verplicht"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Bericht moet minimaal 10 tekens bevatten"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        // Show success message
        setSubmitStatus({
          type: "success",
          message: result.message,
        })

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        // Show error message
        setSubmitStatus({
          type: "error",
          message: result.message,
        })

        // Set field errors if any
        if (result.errors) {
          setErrors(result.errors)
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus({
        type: "error",
        message: "Er is iets misgegaan bij het verzenden van uw bericht. Probeer het later opnieuw.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
      <h2 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">Stuur ons een bericht</h2>

      {submitStatus.type && (
        <div
          className={`mb-6 rounded-md p-4 ${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-400"
              : "bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-400"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Naam <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full rounded-md border ${
              errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-600"
            } bg-white px-4 py-2 text-gray-900 focus:border-[#FFA500] focus:outline-none focus:ring-1 focus:ring-[#FFA500] dark:bg-gray-700 dark:text-white`}
            placeholder="Uw naam"
            disabled={isSubmitting}
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full rounded-md border ${
              errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"
            } bg-white px-4 py-2 text-gray-900 focus:border-[#FFA500] focus:outline-none focus:ring-1 focus:ring-[#FFA500] dark:bg-gray-700 dark:text-white`}
            placeholder="uw@email.nl"
            disabled={isSubmitting}
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Onderwerp <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full rounded-md border ${
              errors.subject ? "border-red-500" : "border-gray-300 dark:border-gray-600"
            } bg-white px-4 py-2 text-gray-900 focus:border-[#FFA500] focus:outline-none focus:ring-1 focus:ring-[#FFA500] dark:bg-gray-700 dark:text-white`}
            placeholder="Onderwerp van uw bericht"
            disabled={isSubmitting}
          />
          {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Bericht <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className={`w-full rounded-md border ${
              errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-600"
            } bg-white px-4 py-2 text-gray-900 focus:border-[#FFA500] focus:outline-none focus:ring-1 focus:ring-[#FFA500] dark:bg-gray-700 dark:text-white`}
            placeholder="Uw bericht"
            disabled={isSubmitting}
          ></textarea>
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center rounded-md bg-[#FFA500] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[#FFA500]/90 focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:ring-offset-2 disabled:opacity-70 dark:focus:ring-offset-gray-800"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Verzenden...
              </>
            ) : (
              "Verstuur bericht"
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
