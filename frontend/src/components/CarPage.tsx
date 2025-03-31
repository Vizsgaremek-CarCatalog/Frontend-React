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
        return <p className="text-red-500">{error}</p>;
    }

    if (!car) {
        return <p>Loading...</p>;
    }

    return (
        <div className="p-6">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row">
                {/* Car Image */}
                <div className="w-full lg:w-1/3 p-4">
                    <img
                        src={`http://localhost:3000${car.imageUrl}`}
                        alt={car.vehicle}
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>

                {/* Car Details */}
                <div className="w-full lg:w-2/3 p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{car.vehicle}</h1>
                    <p className="text-gray-600 mb-6">{car.description}</p>

                    {/* Table-like layout for additional details */}
                    <table className="table-auto w-full text-left border-collapse">
                        <tbody>
                            <tr className="border-b">
                                <th className="py-2 px-4 font-medium text-gray-700 bg-gray-100">Type</th>
                                <td className="py-2 px-4">{car.type}</td>
                            </tr>
                            <tr className="border-b">
                                <th className="py-2 px-4 font-medium text-gray-700 bg-gray-100">Color</th>
                                <td className="py-2 px-4">{car.color}</td>
                            </tr>
                            <tr className="border-b">
                                <th className="py-2 px-4 font-medium text-gray-700 bg-gray-100">Fuel</th>
                                <td className="py-2 px-4">{car.fuel}</td>
                            </tr>
                            <tr className="border-b">
                                <th className="py-2 px-4 font-medium text-gray-700 bg-gray-100">Manufacturer</th>
                                <td className="py-2 px-4">{car.manufacturer}</td>
                            </tr>
                            <tr className="border-b">
                                <th className="py-2 px-4 font-medium text-gray-700 bg-gray-100">Mass</th>
                                <td className="py-2 px-4">{car.mass} kg</td>
                            </tr>
                            <tr className="border-b">
                                <th className="py-2 px-4 font-medium text-gray-700 bg-gray-100">Horsepower</th>
                                <td className="py-2 px-4">{car.horsePower} HP</td>
                            </tr>
                            <tr className="border-b">
                                <th className="py-2 px-4 font-medium text-gray-700 bg-gray-100">Year Made</th>
                                <td className="py-2 px-4">{car.yearMade}</td>
                            </tr>
                            <tr>
                                <th className="py-2 px-4 font-medium text-gray-700 bg-gray-100">Price</th>
                                <td className="py-2 px-4">${car.price.toLocaleString()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}