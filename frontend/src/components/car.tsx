import { Link } from "react-router-dom";
import "../index.css";

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

export default function CarCard({ car }: { car: Car }) {
    const imageFinalUrl = "http://localhost:3000" + car.imageUrl;

    return (
        <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
            {/* Image Section */}
            <div className="aspect-w-16 aspect-h-9">
                <img
                    src={imageFinalUrl}
                    alt={car.vehicle}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col justify-between flex-grow">
                <Link
                    to={`/car/${car.id}`}
                    className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300"
                >
                    {car.vehicle}
                </Link>
                <p className="text-sm text-gray-500 mt-1">{car.manufacturer} - {car.yearMade}</p>
                <p className="text-sm text-gray-600 mt-2">{car.description}</p>

                <div className="mt-4">
                    <p className="text-lg font-bold text-blue-600">
                        ${car.price.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    );
}