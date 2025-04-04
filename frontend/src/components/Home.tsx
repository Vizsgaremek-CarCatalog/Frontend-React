import { useEffect, useState } from "react";
import RoutingService from "../services/RoutingService";
import { useNavigate } from "react-router-dom";
import "../index.css"; 
import Footer from "./Footer";

export default function Home() {
    const [extendedImages, setExtendedImages] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Preload images
    const preloadImages = (imageUrls: string[]) => {
        return Promise.all(
            imageUrls.map((url) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = url;
                    img.onload = resolve;
                    img.onerror = reject;
                });
            })
        );
    };

    useEffect(() => {
        // Fetch car images from the backend
        fetch("http://localhost:3000/carcatalog")
            .then((response) => response.json())
            .then((data) => {
                const imageUrls = data.map((car: { imageUrl: string }) => `http://localhost:3000${car.imageUrl}`);
                const duplicatedUrls = [...imageUrls, ...imageUrls]; // Duplicate the array in memory
                preloadImages(duplicatedUrls) // Preload the duplicated array
                    .then(() => {
                        setExtendedImages(duplicatedUrls); // Set the preloaded array
                        setLoading(false); // Set loading to false after images are preloaded
                    })
                    .catch((error) => {
                        console.error("Error preloading images:", error);
                        setLoading(false); // Set loading to false even if there's an error
                    });
            })
            .catch((error) => {
                console.error("Error fetching car images:", error);
                setLoading(false); // Set loading to false even if there's an error
            });
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-900">
            {/* Main Content */}
            <div className="flex-grow">
                {/* Film Strip Slideshow */}
                <div className="flex justify-center items-center py-4 bg-gray-100 overflow-hidden">
                    <div className="film-strip">
                        {extendedImages.map((image, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-50 h-30 mx-2 bg-white border-4 border-white shadow-lg" // Adjust width and height here
                            >
                                <img
                                    src={image}
                                    alt={`Slide ${index}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                        {/* Render the duplicated array off-screen */}
                        <div className="film-strip-duplicate">
                            {extendedImages.map((image, index) => (
                                <div
                                    key={`duplicate-${index}`}
                                    className="flex-shrink-0 w-50 h-30 mx-2 bg-white border-4 border-white shadow-lg"
                                >
                                    <img
                                        src={image}
                                        alt={`Slide duplicate ${index}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center text-white py-16">
                    <header className="mb-8">
                        <h1 className="text-4xl font-bold">Welcome to our Car Catalog</h1>
                        <p className="text-lg mt-2">Discover the best cars available worldwide!</p>
                    </header>
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={() => RoutingService.navigateToCars(navigate)}
                            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
                        >
                            View Cars
                        </button>
                    </div>
                </div>

                {/* Features Section */}
                <div className="py-16 bg-gray-100 text-center">
                    <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
                    <div className="flex justify-center space-x-8">
                        <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Wide Selection</h3>
                            <p>Choose from a wide variety of cars to suit your needs and preferences.</p>
                        </div>
                        <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Affordable Prices</h3>
                            <p>We offer competitive pricing to ensure you get the best deal.</p>
                        </div>
                        <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Trusted by Thousands</h3>
                            <p>Join our community of satisfied customers worldwide.</p>
                        </div>
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="py-16 bg-gray-900 text-center text-white">
                    <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
                    <div className="flex justify-center space-x-8">
                        <div className="w-1/3 bg-gray-800 p-6 rounded-lg shadow-md">
                            <p>"I found my dream car here! The process was so easy and seamless."</p>
                            <p className="mt-4 font-semibold">- John Doe</p>
                        </div>
                        <div className="w-1/3 bg-gray-800 p-6 rounded-lg shadow-md">
                            <p>"Great selection and amazing prices. Highly recommend this site!"</p>
                            <p className="mt-4 font-semibold">- Jane Smith</p>
                        </div>
                        <div className="w-1/3 bg-gray-800 p-6 rounded-lg shadow-md">
                            <p>"The customer service was excellent. I’ll definitely come back."</p>
                            <p className="mt-4 font-semibold">- Alex Johnson</p>
                        </div>
                    </div>
                </div>

                {/* Newsletter Signup Section */}
                <div className="py-16 bg-gray-100 text-center">
                    <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
                    <p className="mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
                    <form className="flex justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 border rounded-l-lg focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}