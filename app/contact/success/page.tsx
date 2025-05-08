import Link from "next/link"
import Header from "@/components/header"
import { CheckCircle } from "lucide-react"

export default function ContactSuccessPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-md">
            <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-gray-800">
              <div className="mb-6 flex justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
                </div>
              </div>

              <h1 className="mb-4 text-center text-2xl font-bold text-gray-900 dark:text-white">Bericht verzonden!</h1>

              <p className="mb-6 text-center text-gray-600 dark:text-gray-400">
                Bedankt voor uw bericht. We hebben uw aanvraag ontvangen en zullen zo spoedig mogelijk contact met u
                opnemen.
              </p>

              <div className="flex justify-center">
                <Link
                  href="/"
                  className="rounded-md bg-[#FFA500] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[#FFA500]/90 focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:ring-offset-2"
                >
                  Terug naar home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
