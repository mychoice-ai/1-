import './globals.css'

export const metadata = {
    title: 'My Next.js App',
    description: 'A modern Next.js application with Tailwind CSS',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                <header>
                    <nav className="bg-blue-600 text-white p-4 shadow-lg">
                        <h1 className="text-2xl font-bold">My Next.js App</h1>
                    </nav>
                </header>
                <main className="container mx-auto px-4 py-8">
                    {children}
                </main>
            </body>
        </html>
    )
}

