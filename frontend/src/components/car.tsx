import "../index.css";
import "../app.css";

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
        <div className="bg-white shadow-md rounded-md p-2 flex flex-col items-center">
            <img
                src={imageFinalUrl}
                alt={car.vehicle}
                className="w-24 h-24 object-cover rounded-md"
            />
            <h2 className="text-md font-semibold mt-2 text-center">{car.vehicle}</h2>
            <p className="text-sm text-gray-500 text-center">{car.manufacturer} - {car.yearMade}</p>
            <p className="text-sm text-gray-800 font-bold mt-1">${car.price.toLocaleString()}</p>
        </div>
    );
}