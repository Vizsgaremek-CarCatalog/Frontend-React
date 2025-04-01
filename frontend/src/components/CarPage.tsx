import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export interface Car {
    id: number;
    vehicle: string;
    type: string;
    color: string;
    fuel: string;
    manufacturer: string;
    mass: number;
    imageUrl: string;
    price: number;
    description: string;
    yearMade: number;
    horsePower: number;
}

export default function CarPage() {
    const { id } = useParams<{ id: string }>();
    const [car, setCar] = useState<Car | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`http://localhost:3000/carcatalog/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch car with ID ${id}`);
                }
                return response.json();
            })
            .then((data) => setCar(data))
            .catch((err) => setError(err.message));
    }, [id]);

    if (error) {
        return <p className="text-red-500 text-center mt-8">{error}</p>;
    }

    if (!car) {
        return <p className="text-center mt-8">Loading...</p>;
    }

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Car Image */}
                <div className="w-full lg:w-1/2 p-4">
                    <img
                        src={`http://localhost:3000${car.imageUrl}`}
                        alt={car.vehicle}
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>

                {/* Car Details */}
                <div className="p-6">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">{car.manufacturer} - {car.vehicle}</h1>
                    <p className="text-gray-600 mb-8">{car.description}</p>

                    {/* Table-like layout for additional details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-gray-100 p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold text-gray-700">Type</h3>
                            <p className="text-gray-600">{car.type}</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold text-gray-700">Color</h3>
                            <p className="text-gray-600">{car.color}</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold text-gray-700">Fuel</h3>
                            <p className="text-gray-600">{car.fuel}</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold text-gray-700">Manufacturer</h3>
                            <p className="text-gray-600">{car.manufacturer}</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold text-gray-700">Mass</h3>
                            <p className="text-gray-600">{car.mass} kg</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold text-gray-700">Horsepower</h3>
                            <p className="text-gray-600">{car.horsePower} HP</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold text-gray-700">Year Made</h3>
                            <p className="text-gray-600">{car.yearMade}</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold text-gray-700">Price</h3>
                            <p className="text-gray-600">${car.price.toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}