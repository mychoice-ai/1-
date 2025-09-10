import Link from 'next/link'
import './globals.css'

export const metadata = {
    title: 'MyChoice AI - Next.js Starter',
    description: 'A production-ready Next.js 15 starter with modern tooling and best practices',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                <header>
                    <nav className="bg-blue-600 text-white p-4 shadow-lg">
                        <div className="container mx-auto flex justify-between items-center">
                            <Link href="/" className="text-2xl font-bold hover:text-blue-200 transition-colors">
                                MyChoice AI
                            </Link>
                            <div className="space-x-6">
                                <Link href="/" className="hover:text-blue-200 transition-colors">Home</Link>
                                <Link href="/about" className="hover:text-blue-200 transition-colors">About</Link>
                                <Link href="/contact" className="hover:text-blue-200 transition-colors">Contact</Link>
                            </div>
                        </div>
                    </nav>
                </header>
                <main className="container mx-auto px-4 py-8">
                    {children}
                </main>
            </body>
        </html>
    )
}

