import Button from '../../components/Button'

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">About This Starter</h1>
                <p className="text-lg text-gray-600 mb-6">
                    This production-ready Next.js 15 starter template provides a solid foundation
                    for building modern web applications with best practices and developer experience in mind.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">🚀 Modern Stack</h3>
                        <p className="text-gray-600">
                            Built with Next.js 15, React 19, TypeScript, and Tailwind CSS 4.
                            Includes ESLint, Prettier, and comprehensive testing setup.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">🛠️ Developer Experience</h3>
                        <p className="text-gray-600">
                            Hot reloading, type safety, automated linting, and CI/CD pipeline
                            ready for immediate deployment.
                        </p>
                    </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-semibold mb-3">✨ Key Features</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>App Router with file-based routing</li>
                        <li>TypeScript for type safety</li>
                        <li>Tailwind CSS for styling</li>
                        <li>ESLint for code quality</li>
                        <li>Jest and Playwright for testing</li>
                        <li>GitHub Actions for CI/CD</li>
                        <li>Health check API endpoint</li>
                    </ul>
                </div>

                <div className="flex gap-4">
                    <Button>Get Started</Button>
                    <Button variant="secondary">View Docs</Button>
                </div>
            </div>
        </div>
    )
}
