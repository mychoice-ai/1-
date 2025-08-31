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

                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 mb-6">
                    <h2 className="text-2xl font-bold text-white mb-4">What you can do now:</h2>
                    <ul className="text-white space-y-2">
                        <li className="flex items-center">
                            <span className="mr-2">✅</span>
                            Edit this page in <code className="bg-white bg-opacity-20 px-2 py-1 rounded">app/page.js</code>
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2">✅</span>
                            Add new pages by creating files in the <code className="bg-white bg-opacity-20 px-2 py-1 rounded">app/</code> directory
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2">✅</span>
                            Start building your React components with Tailwind CSS
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2">✅</span>
                            Use TypeScript for better development experience
                        </li>
                    </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h3 className="text-xl font-semibold text-green-800 mb-2">Development</h3>
                        <p className="text-green-700">Run <code className="bg-green-100 px-2 py-1 rounded">npm run dev</code> to start the development server.</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">Production</h3>
                        <p className="text-blue-700">Run <code className="bg-blue-100 px-2 py-1 rounded">npm run build</code> to build for production.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

