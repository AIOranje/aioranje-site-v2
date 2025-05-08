import Header from "@/components/header"
import ContactForm from "@/components/contact-form"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            {/* Page Header */}
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Contact</h1>
              <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                Heeft u vragen of opmerkingen? Neem gerust contact met ons op. Ons team staat klaar om u te helpen.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
                  <h2 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">Contactgegevens</h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#FFA500]/10 text-[#FFA500]">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-900 dark:text-white">E-mail</h3>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                          <a href="mailto:info@aioranje.nl" className="text-[#FFA500] hover:underline">
                            info@aioranje.nl
                          </a>
                        </p>
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                          We reageren binnen 24 uur op uw e-mail
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#FFA500]/10 text-[#FFA500]">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-900 dark:text-white">WhatsApp</h3>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                          <a
                            href="https://wa.me/31612345678"
                            className="text-[#FFA500] hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            +31 6 12345678
                          </a>
                        </p>
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                          Beschikbaar van maandag t/m vrijdag, 9:00 - 17:00
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#FFA500]/10 text-[#FFA500]">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-900 dark:text-white">Adres</h3>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                          Oranjestraat 123
                          <br />
                          1234 AB Amsterdam
                          <br />
                          Nederland
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#FFA500]/10 text-[#FFA500]">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-900 dark:text-white">Openingstijden</h3>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                          Maandag - Vrijdag: 9:00 - 17:00
                          <br />
                          Zaterdag: 10:00 - 14:00
                          <br />
                          Zondag: Gesloten
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="mb-4 text-sm font-medium text-gray-900 dark:text-white">Volg ons</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://instagram.com/aioranje"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-[#FFA500] hover:text-white dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-[#FFA500]"
                        aria-label="Instagram"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
