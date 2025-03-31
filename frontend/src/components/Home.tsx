export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800">Welcome to Car Showcase</h1>
                <p className="text-lg text-gray-600 mt-2">
                    Discover the best cars available for you!
                </p>
            </header>
            <div className="flex space-x-4">
                <a href="/cars" className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">View Cars</a>
                <a href="/about" className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg shadow-md hover:bg-gray-400 transition">Learn More</a>
            </div>
        </div>
    );
}