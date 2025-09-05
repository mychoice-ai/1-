import Button from '../components/Button'

export default function HomePage() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">
                    Welcome to Next.js! 🚀
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                    This is your first Next.js application with Tailwind CSS styling.
                </p>
                <div className="flex gap-3">
                    <Button>Primary action</Button>
                    <Button variant="secondary">Secondary</Button>
                </div>
            </div>
        </div>
    )
}

