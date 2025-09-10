'use client'

import { useState } from 'react'
import Button from '../../components/Button'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log('Form submitted:', formData)
        alert('Thank you for your message! (This is a demo)')
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
                <p className="text-lg text-gray-600 mb-8">
                    Have questions about this starter? We'd love to hear from you!
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>

                    <Button type="submit">Send Message</Button>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-xl font-semibold mb-4">Other Ways to Connect</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-medium mb-2">📧 Email</h4>
                            <p className="text-gray-600">hello@mychoice-ai.dev</p>
                        </div>
                        <div>
                            <h4 className="font-medium mb-2">🐙 GitHub</h4>
                            <p className="text-gray-600">github.com/mychoice-ai/1-</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}